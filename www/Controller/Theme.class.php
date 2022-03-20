<?php

namespace App\Controller;

use App\Core\View;
use App\Model\Theme as ThemeModel;



class Theme
{
    public function settings()
    {
        $theme = new ThemeModel();
        
        $view = new View("settings", "back");
        $view->assign("theme", $theme);
    }

}