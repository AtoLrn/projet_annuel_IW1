<?php

namespace App\Controller;

use App\Core\Verificator;
use App\Core\Sql;
use App\Core\View;
use App\Model\Article as ArticleModel;
use App\Model\Star as StarModel;

use App\Core\Server;


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

    public function getArticle()
    {
        if (empty($_GET['id']) || !is_numeric($_GET['id'])) {
            header("Location: /not-found");
        }

        $article = new ArticleModel();
        $article = $article->setId($_GET['id']);

        if (!$article) {
            header("Location: /not-found");
        }
        
        $image = new Image();
        $images = $image->select([
            "image" => [
                "args" => ["path"],
                "params" => [
                    "articleId" => $article->getId()
                ]
            ]
        ]);
        $score = $article->select([
            "star" => [
                "args" => ["COUNT(*)", "AVG(score)"],
                "params" => [
                    "articleId" => $article->getId()
                ]
            ]
        ]);

        $view = new View("article");
        $view->assign("article", $article);
        $view->assign("images", $images);
        $view->assign("score", $score[0]);

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

                foreach ($_FILES["photo"]["tmp_name"] as $file) {
                    $target_file = "assets/img/articles/" . bin2hex(random_bytes(20));
                    if (move_uploaded_file($file, $target_file)) {
                        $image = new Image();
                        $image->setArticleId($id);
                        $image->setPath($target_file);
                        $image->save();
                    }
                }

                

                header("Location: /recette?id=$id");
                
            }
        }
        
        $view = new View("article-creation", "front");
        $view->assign("article", $article);

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

        $result["comments"] = $article->select([          
            "comment" => [
                "args" => ["COUNT(*)"],
                "params" => ["articleId" => $id]
            ]                
        ])[0]["COUNT(*)"];

        $result["like"] = $article->select([          
            "like" => [
                "args" => ["COUNT(*)"],
                "params" => ["articleId" => $id]
            ]                
        ])[0]["COUNT(*)"];

        if($result) {
            http_response_code(200);
            header('Content-Type: application/json; charset=utf-8');
            echo json_encode($result);
        }else {
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