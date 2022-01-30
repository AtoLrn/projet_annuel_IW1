<?php

namespace App\Controller;

use App\Core\View;

class Admin
{

    public function dashboard()
    {
        $view = new View("dashboard", "back");
    }

}