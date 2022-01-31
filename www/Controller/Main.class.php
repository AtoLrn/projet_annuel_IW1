<?php

namespace App\Controller;

use App\Core\View;
use App\Model\User as UserModel;

class Main {

    public function home()
    {
        $view = new View('home', 'front');
        if (!empty($_SESSION['token'])){
            $user = new UserModel();
            $userInfo = $user->select(['id'],[
                'token' => $_SESSION['token']
            ]);
            if (!empty($userInfo)){
                $user = $user->setId($userInfo[0]['id']);
                $view->assign('firstname', $user->getFirstname());
                $view->assign('lastname', $user->getLastname());
            }
        }
    }


    public function contact()
    {
        $view = new View("contact");
    }



}