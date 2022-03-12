<?php

namespace App\Controller;

use App\Core\Verificator;
use App\Core\Sql;
use App\Core\View;
use App\Model\Article as ArticleModel;

use App\Model\Session;
use App\Model\Image;
use App\Model\User as UserModel;
class Article
{
    public function getArticle()
    {
        if (empty($_GET['id'])) {
            header("Location: /not-found");
        }

        $article = new ArticleModel();
        $article = $article->setId($_GET['id']);
        $image = new Image();
        $images = $image->select([
            "image" => [
                "args" => ["path"],
                "params" => [
                    "articleId" => $article->getId()
                ]
            ]
        ]);

        print_r($images);

        if (!$article) {
            header("Location: /not-found");
        }


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
            if (empty($result)) {
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
}