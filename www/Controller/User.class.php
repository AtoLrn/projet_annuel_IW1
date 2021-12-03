<?php
namespace App\Controller;

use App\Core\CleanWords;
use App\Core\Sql;
use App\Core\View;
use App\Model\User as UserModel;

class User {

    public function login()
    {
        $view = new View("Login", "back");

        $view->assign("pseudo", "Prof");
        $view->assign("firstname", "Yves");
        $view->assign("lastname", "Skrzypczyk");

    }


    public function register()
    {

        $user = new UserModel();
        $user->setFirstname("YveS   ");
        $user->setLastname("   SKrzYPCzyk");
        $user->setEmail("y.SKRzypCZYK@GMail.com");
        $user->setPassword("Test1234");
        $user->generateToken();
        $user->save();


        $view = new View("register");
    }


    public function logout()
    {
        echo "Se déco";
    }


    public function pwdforget()
    {
        echo "Mot de passe oublié";
    }

}





