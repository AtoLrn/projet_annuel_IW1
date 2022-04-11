<?php

namespace App\Controller;

use App\Core\Verificator;
use App\Core\Sql;
use App\Core\View;
use App\Model\Article as ArticleModel;
use App\Core\Server;

class Article
{
    public function handleArticle()
    {
        $article = new ArticleModel();

        if (Server::ensureHttpMethod('POST') && !empty($_POST)) {

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


        $view = new View("article");
        $view->assign("title", $article->getTitle());
        $view->assign("description", $article->getDescription());
    }
    public function create()
    {
        $view = new View("article", "front");
    }


}