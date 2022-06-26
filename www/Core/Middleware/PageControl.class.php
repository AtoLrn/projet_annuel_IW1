<?php

namespace App\Core\Middleware;

use App\Core\Sql;
use App\Model\Article;
use App\Model\Page as PageModel;

class PageControl {
    public static function isExist (string $uri): ?Sql
    {
        $page = new PageModel();
        $page = $page->select2('page', ['id','userId', 'title', 'content', 'path'])
            ->where('path', substr($uri, 1))
            ->fetch();

        if ($page) return $page;

        $article = new Article();
        $article = $article->select2('article', ['id','userId', 'title', 'content'])
            ->where('path', substr($uri, 1))
            ->fetch();

        if ($article) return $article;


        return null;
    }
}