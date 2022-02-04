<?php

namespace App\Controller;

use App\Core\View;
use App\Model\Session;
use App\Model\User as UserModel;

class Main {

    public function home()
    {
        $view = new View('home', 'front');
        if (!empty($_SESSION['token'])){
            $user = new UserModel();
            $session = Session::getByToken($_SESSION['token']);
            if ($session !== null){
                $user = $user->setId($session->getUserId());

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