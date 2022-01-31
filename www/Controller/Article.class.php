<?php

namespace App\Controller;

use App\Core\View;

class Article
{

    public function create()
    {
        $view = new View("article", "front");
    }

}