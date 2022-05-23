<?php

namespace App\Controller;

use App\Core\View;
use App\Model\Article as ArticleModel;
use App\Model\Session;
use App\Model\User as UserModel;

class Main
{

    public function home()
    {
        $view = new View('home', 'front');
        $lastArticle = new ArticleModel();
        $lastArticle = $lastArticle->select([
            "article" => [
                "args" => ["title", "description"],
                "lf" => ["image"]
            ],
            "image" => [
                "args" => ['path'],
                "params" => ['main' => 1]
            ]
            ], 6, "createdAt", "DESC");

        $view->assign("articles", $lastArticle);
        
    }

    public function contact()
    {
        $view = new View("contact");
    }
}