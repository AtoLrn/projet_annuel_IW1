<?php

namespace App\Controller;

use App\Core\Verificator;
use App\Core\Sql;
use App\Core\View;
use App\Model\Article as ArticleModel;
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
        if (empty($_GET['id'])) {
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

        


        $view = new View("article");
        $view->assign("title", $article->getTitle());
        $view->assign("description", $article->getDescription());
        $view->assign("content", $article->getContent());
        $view->assign("images", $images);
    }
    public function create()
    {
        $article = new ArticleModel();
        if (!empty($_POST)) {
            $result = Verificator::checkForm($article->getArticleForm(), $_POST);

            $user = new UserModel();
            $session = Session::getByToken($_SESSION['token']);
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
                    "args" => ["id", "userId", "categoryId", "title", "description", "content", "createdAt"],
                    "params" => is_array($getParams) ? [$getParams[0] => ['value' => $getParams[1], 'operator' => $getParams[2]]] : []
                ]
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
}