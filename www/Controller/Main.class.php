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
            $userInfo = $user->select([
                "user" => [
                    "args" => ["id"], "params" => ["token"]
                ]
            ]);
            
            if (!empty($userInfo)){
                $user = $user->setId($userInfo[0]['user_id']);

                $user->generateToken();
                $_SESSION['token'] = $user->getToken();
                $user->save();

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