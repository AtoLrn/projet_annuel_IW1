<?php
namespace App\Controller;

use App\Core\CleanWords;
use App\Core\View;

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
        //Ici on part du principe que l'on a créé un formulaire d'inscription
        //Et l'utilisateur a renseigné ses données

        $lastname = "   SKrzYPCZyk";
        $lastname = CleanWords::lastname($lastname);

        echo $lastname;


        echo "S'inscrire";
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





