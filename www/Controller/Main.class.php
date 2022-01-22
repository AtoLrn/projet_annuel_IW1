<?php

namespace App\Controller;

use App\Core\View;

class Main {

    public function home()
    {
        $view = new View('home', 'front');
        if (!empty($_SESSION['id'])){
            if (!empty($_SESSION['firstname']) && !empty($_SESSION['lastname'])){
                $view->assign('firstname', $_SESSION['firstname']);
                $view->assign('lastname', $_SESSION['lastname']);
            }
        }
    }


    public function contact()
    {
        $view = new View("contact");
    }



}