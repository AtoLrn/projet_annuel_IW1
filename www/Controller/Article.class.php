<?php
namespace App\Controller;

use App\Core\Verificator;
use App\Core\Sql;
use App\Core\View;
use App\Model\Article as ArticleModel;

class Article
{
    public function handleArticle() {
        $article = new ArticleModel();

        if( !empty($_POST)){

            $result = Verificator::checkForm($article->getArticleForm(), $_POST);
            print_r($result);
            if(empty($result)) {
                $article->setTitle($_POST['title']);
                $article->setContent($_POST['content']);
                $article->save();
            }

        }

        $view = new View("handle-article");
        $view->assign("article", $article);

    }

    public function create()
    {
        $view = new View("article", "front");
    }

}