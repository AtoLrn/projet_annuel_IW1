<?php

namespace App\Controller;

use App\Core\Logger;
use App\Core\Middleware\Security;
use App\Core\Verificator;
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
            Security::csrf();
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
        return $comment->select2('comment', [ 'content', 'comment.status as status', 'comment.createdAt as createdAt', 'user.id as userId', 'firstname', 'profilePicture' ])
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
        $chief = new UserModel();
        $chief = $chief->setId($article->getUserId());

        if (!$article) {
            header("Location: /not-found");
            exit();
        }
        
        $image = new Image();

        $images = $image->select2('image', ['path', 'main'])
            ->where('articleId', $article->getId())
            ->orderBy('main')
            ->fetchAll();

        $score = $article->select2('star', ['COUNT(*) as total', 'AVG(score) as avg'])
            ->where('articleId', $article->getId())
            ->fetch();

        $ingredients = $ingredients->select2('ingredient_article', ['name', 'path'])
            ->leftJoin('ingredient', 'ingredient_article.ingredientId', 'ingredient.id')
            ->where('articleId', $article->getId())
            ->fetchAll();
        

        $comments = $this->getCommentsByArticle($article->getId());
        

        // PUSH THE MAIN IMAGE IN THE FIRST ELEM PLACEMENT
        array_unshift($images, array_pop($images));

        $session = Session::getByToken();
        $user = new UserModel();
        if(!is_null($session)) {
            $user = $user->setId($session->getUserId());
        }
        

        $view = new View("article");

        $view->assign("isUserOrAdmin", is_null($user->getId()) ? false : $article->getUserId() == $session->getUserId() || $user->getStatus() == "admin");
        $view->assign("article", $article);
        $view->assign("chief", $chief);
        $view->assign("images", $images);
        $view->assign("score", $score);
        $view->assign("ingredients", $ingredients);
        $view->assign("comment", $comment);
        $view->assign("comments", $comments);
    }

    public function create()
    {
        $article = new ArticleModel();
        if (!empty($_POST)) {
            Security::csrf();
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

                    $ingredientId = $ingredientModel->select2('ingredient', ['id'])
                        ->where('name', $ingredient)
                        ->fetch();

                    $assoc = new IngredientArticle();
                    $assoc->setIngredientId($ingredientId->getId());
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

                $users = $user->select2('user', ['*'])
                    ->innerJoin('follow', 'user.id', 'follow.follower')
                    ->where('isFollowed', $user->getId())
                    ->where('notification', 1)
                    ->fetchAll();
                
                
                foreach($users as $user) {
                    $article->addObserver($user);
                }
                header("Location: /recette?id=$id");
                $article->notify();                
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
            Security::csrf();
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

                $oldIngredients = $ingredientModel->select2('ingredient', ['ingredient_article.id AS ingredientArticleId', 'name'])
                    ->leftJoin('ingredient_article', 'ingredient_article.ingredientId', 'ingredient.id')
                    ->where('ingredient_article.articleId', $id)
                    ->fetchAll();

                foreach ($oldIngredients as $ingredient) {
                    $assoc = new IngredientArticle();
                    $assoc = $assoc->setId($ingredient->ingredientArticleId);
                    $assoc->delete();
                }

                foreach ($ingredients as $ingredient) {
                    $ingredientModel = new Ingredient();

                    $ingredientId = $ingredientModel->select2('ingredient', ["id"])
                        ->where('name', $ingredient)
                        ->fetch();

                    $assoc = new IngredientArticle();
                    $assoc->setIngredientId($ingredientId->getId());
                    $assoc->setArticleId($id);
                    $assoc->save();
                }

                $image = new Image();
                $images = $image->select2("image", ["id"])->where("articleId", $id)->fetchAll();

                foreach($images as $image) {
                    $image->delete();
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
        $getParams = isset($_GET['params']) && is_array(json_decode($_GET['params'])) ? json_decode($_GET['params']) : null;
        $article = new ArticleModel();
        
        $article->select2("article", ["id", "title", "description", "createdAt"]);     
        if(!is_null($getParams)) {
            $article->where($getParams[0]??"", $getParams[1]??null, $getParams[2]??null);
        }
        $result = $article->fetchAll();


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

        $result["article"] = $article->select2('article', ['id', 'title', 'description'])
            ->where('id', $id)
            ->fetch();

        $result["comments"] = $article->select2('comment', ['id'])
            ->where("articleId", $id)
            ->count();

        $result["note"] = $article->select2('star', ['AVG(score) AS avg'])
            ->where("articleId", $id)
            ->fetch();

        $result["note"] = is_numeric($result["note"]->avg) ? number_format($result["note"]->avg, 1, ",", " ") . " / 5" : "pas de note";

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
        Security::csrf();
        $session = Session::getByToken();

        if(!isset($_POST['articleId']) || !is_numeric($_POST['articleId']) || !isset($_POST['score']) || !in_array($_POST['score'], [1,2,3,4,5])) {
            http_response_code(400);
            header("location: /404");
            die(); 
        }   
        
        $star = new StarModel();

        $result = $star->select2('star', ["id"])
            ->where('articleId', $_POST['articleId'])
            ->where('userId', $session->getUserId())
            ->fetch();

        if(isset($result)) {
            $star = $star->setId($result->getId());
        }else {
            $star->setUserId($session->getUserId());
            $star->setArticleId($_POST['articleId']);
        }    
        
        $star->setScore($_POST['score']);
        $echo = $star->save();

        header("location: /recette?id=" . $_POST['articleId'] );
    }

    public function deleteArticleById()
    {
        //Server::ensureHttpMethod('DELETE');

        $id = isset($_GET['id']) && is_numeric($_GET['id']) ? $_GET['id'] : null;
        if($id === null) {
            http_response_code(400);
            die();
        }

        $user = new UserModel();
        $session = Session::getByToken();
        $user = $user->setId($session->getUserId());

        $article = new ArticleModel();
        $article = $article->setId($id);

        if($article === null) {
            http_response_code(404);
            die();
        }

        if($user->getStatus() != 'admin' && !($user->getStatus() == 'chief' && $article->getUserId() == $user->getId())) {
            http_response_code(401);
            die();
        }

        $result = $article->delete();
        if($result) {
            http_response_code(200);
        }else {
            http_response_code(500);
        }
    }
}