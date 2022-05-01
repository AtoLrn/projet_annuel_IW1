<?php

namespace App\Controller;

use App\Core\View;
use App\Model\User as UserModel;

class Admin
{

    public function dashboard()
    {
        $view = new View("dashboard", "back");
    }

    public function list()
    {
        $lists = ['user', 'article', 'comment', 'certification'];
        $value =  isset($_GET['q']) ? (in_array($_GET['q'], $lists) ? $_GET['q']: 'user') : 'user';
        $model = "App\\Model\\" . ucfirst($value);
        
        $model = new $model();
        $listTpl = $model->formatList();
          
        $view = new View("list", "back");
        $view->assign("listTpl", $listTpl);
        $view->assign("table", $value);
    }

    public function settings(): void
    {
        $view = new View("settings", "back");
    }

}