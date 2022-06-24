<?php

namespace App\Core\Middleware;

use App\Model\Page as PageModel;

class PageControl {
    public static function isExist (string $uri): ?PageModel
    {
        $page = new PageModel();
        $page = $page->select2('page', ['id','userId', 'title', 'content', 'path'])
            ->where('path', substr($uri, 1))
            ->fetch();

        return $page ?: null;
    }
}