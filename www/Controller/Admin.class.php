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

        $value =  isset($_GET['q']) ? (in_array($_GET['q'], ['user', 'article', 'comment']) ? $_GET['q']: 'user') : 'user';

        $model = "App\\Model\\" . ucfirst($value);
        
        $model = new $model();
        $listTpl = $model->getSelectTemplate();
        
        $list = $model->select(
            $listTpl["args"]
        );

        $view = new View("list", "back");
        $view->assign("list", $list);
        $view->assign("listTpl", $listTpl);
        $view->assign("model", $model);
    }

}