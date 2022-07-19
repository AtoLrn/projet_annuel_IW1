<?php

namespace App\Core\Middleware;

use App\Core\Sql;
use App\Model\Article;
use App\Model\Page as PageModel;

class PageControl {
    public static function isExist (string $uri): ?Sql
    {
        $uri = substr($uri, 1);
        $page = new PageModel();
        $page = $page->select('page', ['id','userId', 'title', 'content', 'path'])
            ->where('path', $uri)
            ->fetch();

        if ($page) return $page;

        $uri = str_replace("recette/", "", $uri);        
        $uri = urldecode($uri);
        $article = new Article();
        $article = $article->select('article', ['id','userId', 'title', 'content'])
            ->where('title', $uri)
            ->fetch();
            
        if ($article) return $article;


        return null;
    }
}