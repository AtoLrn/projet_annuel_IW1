<?php

namespace App\Controller;

use App\Core\Logger;
use App\Core\Verificator;
use App\Core\Sql;
use App\Core\View;
use App\Model\Article as ArticleModel;
use App\Model\Star as StarModel;

use App\Model\Ingredient as Ingredient;
use App\Model\IngredientArticle;
use App\Core\Server;

use App\Model\Comment as CommentModel;
use App\Model\Session;
use App\Model\Image;
use App\Model\User as UserModel;
class Article
{
    public function handleArticle()
    {
        $article = new ArticleModel();

        if (!empty($_POST)) {

            $result = Verificator::checkForm($article->getArticleForm(), $_POST);
            print_r($result);
            if (empty($result)) {
                $article->setTitle($_POST['title']);
                $article->setContent($_POST['content']);
                $article->save();
            }
        }

        $view = new View("handle-article");
        $view->assign("article", $article);
    }

    public function getCommentsByArticle(int $articleId): ?array
    {
        $comment = new CommentModel();
        return $comment->select2('comment', [ 'content', 'comment.createdAt as createdAt', 'user.id as userId', 'firstname', 'profilePicture' ])
            ->leftJoin('user', 'comment.userId', 'user.id')
            ->where('articleId', $articleId)
            ->fetchAll();
    }

    public function getArticle()
    {
        if (empty($_GET['id']) || !is_numeric($_GET['id'])) {
            header("Location: /not-found");
            exit();
        }

        $article = new ArticleModel();
        $comment = new CommentModel();
        $ingredients = new Ingredient();
        $article = $article->setId($_GET['id']);

        if (!$article) {
            header("Location: /not-found");
            exit();
        }
        
        $image = new Image();
        $images = $image->select([
            "image" => [
                "args" => ["path", "main"],
                "params" => [
                    "articleId" => $article->getId()
                ]
            ]
        ], null, "main");

        $score = $article->select([
            "star" => [
                "args" => ["COUNT(*)", "AVG(score)"],
                "params" => [
                    "articleId" => $article->getId()
                ]
            ]
        ]);

        $ingredients = $ingredients->select2('ingredient_article', ['name', 'path'])
            ->leftJoin('ingredient', 'ingredient_article.ingredientId', 'ingredient.id')
            ->where('articleId', $article->getId())
            ->fetchAll();
        

        $comments = $this->getCommentsByArticle($article->getId());
        

        // PUSH THE MAIN IMAGE IN THE FIRST ELEM PLACEMENT
        array_unshift($images, array_pop($images));

        $session = Session::getByToken();

        $view = new View("article");

        $view->assign("isUserOrAdmin", is_null($session) ? false : $article->getUserId() == $session->getUserId());
        $view->assign("article", $article);
        $view->assign("images", $images);
        $view->assign("score", $score[0]);
        $view->assign("ingredients", $ingredients);
        $view->assign("comment", $comment);
        $view->assign("comments", $comments);
    }

    public function create()
    {
        $article = new ArticleModel();
        if (!empty($_POST)) {
            $result = Verificator::checkForm($article->getArticleForm(), $_POST);

            $user = new UserModel();
            $session = Session::getByToken();
            $user = $user->setId($session->getUserId());
            if (!empty($result)) {
                $article->setTitle($_POST['title']);
                $article->setDescription($_POST['description']);
                $article->setContent($_POST['article']);
                $article->setCategoryId(1);
                $article->setUserId($user->getId());
                $id = $article->save();

                $mainPhoto = $_POST['photo'][0] ?? 0;
                $i = 0;

                $ingredients = explode(",",$_POST['ingredient'][0]);

                foreach ($ingredients as $ingredient) {
                    $ingredientModel = new Ingredient();
                    $ingredientId = $ingredientModel->select([
                        "ingredient" => [
                            "args" => ["id"],
                            "params" => [
                                "name" => $ingredient
                            ]
                        ]
                    ])[0];

                    $assoc = new IngredientArticle();
                    $assoc->setIngredientId($ingredientId["ingredient_id"]);
                    $assoc->setArticleId($id);
                    $assoc->save();
                }

                foreach ($_FILES["photo"]["tmp_name"] as $file) {
                    $target_file = "assets/img/articles/" . bin2hex(random_bytes(20));
                    if (move_uploaded_file($file, $target_file)) {
                        $image = new Image();
                        $image->setArticleId($id);
                        $image->setPath($target_file);
                        $image->setMain($i == $mainPhoto ? 1 : 0);
                        $image->save();
                    }
                    $i++;
                }

                

                header("Location: /recette?id=$id");
                
            }
        }
        
        $view = new View("article-creation", "front");
        $view->assign("article", $article);

    }

    public function editArticle()
    {
        if (empty($_GET['id']) || !is_numeric($_GET['id'])) {
            header("Location: /not-found");
            exit();
        }

        $article = new ArticleModel();
        $article = $article->setId($_GET['id']);

        if (!$article) {
            header("Location: /not-found");
            exit();
        }

        $id = $_GET['id'];
        if ($_SERVER['REQUEST_METHOD'] == "GET") {

            $view = new View("article-creation", "front");
            $view->assign("article", $article);
            $view->assign("edit", true);
            
            return;
        } 
        if (!empty($_POST)) {
            $result = Verificator::checkForm($article->getArticleForm(), $_POST);

            $user = new UserModel();
            $session = Session::getByToken();
            $user = $user->setId($session->getUserId());
            if (!empty($result)) {
                
                $article->setTitle($_POST['title']);
                $article->setDescription($_POST['description']);
                $article->setContent($_POST['article']);
                $article->setCategoryId(1);
                $article->save();
                

                $mainPhoto = $_POST['photo'][0] ?? 0;
                $i = 0;

                $ingredients = explode(",",$_POST['ingredient'][0]);

                $ingredientModel = new Ingredient();
                $oldIngredients = $ingredientModel->select([
                    "ingredient" => [
                        "args" => ["name"],
                        "lf" => ["ingredient_article"]
                    ],
                    "ingredient_article" => [
                        "args" => ["id"],
                        "params" => ["articleId" => $id],
                    
                    ]
                ]); 

                foreach ($oldIngredients as $ingredient) {
                    $assoc = new IngredientArticle();
                    $assoc = $assoc->setId($ingredient["ingredient_article_id"]);
                    $assoc->delete();
                }

                foreach ($ingredients as $ingredient) {
                    $ingredientModel = new Ingredient();
                    $ingredientId = $ingredientModel->select([
                        "ingredient" => [
                            "args" => ["id"],
                            "params" => [
                                "name" => $ingredient
                            ]
                        ]
                    ])[0];

                    $assoc = new IngredientArticle();
                    $assoc->setIngredientId($ingredientId["ingredient_id"]);
                    $assoc->setArticleId($id);
                    $assoc->save();
                }

                foreach ($_FILES["photo"]["tmp_name"] as $file) {
                    $target_file = "assets/img/articles/" . bin2hex(random_bytes(20));
                    if (move_uploaded_file($file, $target_file)) {
                        $image = new Image();
                        $image->setArticleId($id);
                        $image->setPath($target_file);
                        $image->setMain($i == $mainPhoto ? 1 : 0);
                        $image->save();
                    }
                    $i++;
                }

                header("Location: /recette?id=$id");
                
            }
        }
    }

    public function getArticles()
    {
        Server::ensureHttpMethod('GET');
        $getParams = isset($_GET['params']) ? json_decode($_GET['params']) : null;
        $article = new ArticleModel();
        
        
        $result = $article->select(
            [
                "article" => [
                    "args" => ["id", "title", "description", "createdAt"],
                    "params" => is_array($getParams) ? [$getParams[0] => ['value' => $getParams[1], 'operator' => $getParams[2]]] : [],
                ],

            ]
        );


        if($result) {
            header('Content-Type: application/json; charset=utf-8');
            echo json_encode($result);
            http_response_code(200);
        }else {
            Logger::writeErrorLog("Error while fetching articles.");
            http_response_code(500);
        }

    }


    public function getArticleById()
    {
        $content = file_get_contents('php://input');
        $_POST = json_decode($content, true);
        Server::ensureHttpMethod('POST');

        $id = $_POST['id'] ?? null;
        $article = new ArticleModel();

        $listTpl = $article->formatArticleById($id);

        $result["article"] = $article->select($listTpl)[0];

        $result["comments"] = $article->select2('comment', ['id'])
            ->where("articleId", $id)
            ->count();

        $result["like"] = $article->select2('star', ['id'])
            ->where("articleId", $id)
            ->count();

        if($result) {
            http_response_code(200);
            header('Content-Type: application/json; charset=utf-8');
            echo json_encode($result);
        }else {
            Logger::writeErrorLog("Error while fetching article with id: $id.");
            http_response_code(500);
        }

        
    }

    public function setArticleScore(): void
    {
        $session = Session::getByToken();
        if(is_null($session->getUserId())) {
            http_response_code(401);
            header('location: /register-login');
            die();
        }

        if(!isset($_POST['articleId']) || !is_numeric($_POST['articleId']) || !isset($_POST['score']) || !in_array($_POST['score'], [1,2,3,4,5])) {
            http_response_code(405);
            header("location: /");
            die(); 
        }   
        
        $star = new StarModel();
        $result = $star->select([
            "star" => [
                "args" => ["id"],
                "params" => ["articleId" => $_POST['articleId'], "userId" => $session->getUserId()]
            ]
        ]);

        if(isset($result[0])) {
            $star = $star->setId($result[0]['star_id']);
        }else {
            $star->setUserId($session->getUserId());
            $star->setArticleId($_POST['articleId']);
        }    
        
        $star->setScore($_POST['score']);
        $echo = $star->save();

        header("location: /recette?id=" . $_POST['articleId'] );
    }
}