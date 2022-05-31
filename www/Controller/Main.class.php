<?php

namespace App\Controller;

use App\Core\MysqlBuilder as Query;
use App\Core\View;
use App\Model\Article as ArticleModel;
use App\Model\Session;
use App\Model\User as UserModel;

class Main
{

    public function home()
    {
        $view = new View('home', 'front');
        $articles = new ArticleModel();
        $articles = $articles->select2('article', ['title', 'description', 'path'])
            ->leftJoin('image', 'article.id', 'image.articleId')
            ->where('main', 1)
            ->fetchAll();
        
            // echo '<pre>';
            // print_r($articles);
            // exit;
     
                           
        // $lastArticle = $lastArticle->select([
        //     "article" => [
        //         "args" => ["title", "description"],
        //         "lf" => ["image"]
        //     ],
        //     "image" => [
        //         "args" => ['path'],
        //         "params" => ['main' => 1]
        //     ]
        //     ], 6, "createdAt", "DESC");



        $view->assign("articles", $articles);
        
    }

    public function contact()
    {
        $view = new View("contact");
    }
}