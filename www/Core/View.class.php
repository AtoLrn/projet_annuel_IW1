<?php

namespace App\Core;

use App\Model\Session;
use App\Model\User;

class View
{
    private $view;
    private $template;
    private $data = [];

    public function __construct($view, $template = "front")
    {
        $this->setView($view);
        $this->setTemplate($template);
    }

    public function setView($view): void
    {
        $this->view = strtolower($view);
    }

    public function setTemplate($template): void
    {
        $this->template = strtolower($template);
    }


    public function __toString(): string
    {
        return "La vue est : " . $this->view;
    }

    public function partialInclude(string $partial, $data): void
    {
        if (!file_exists("View/Partial/" . $partial . ".partial.php")) {
            die("N existe pas");
        }

        include("View/Partial/" . $partial . ".partial.php");
    }


    public function assign($key, $value): void
    {
        $this->data[$key] = $value;
    }

    public function __destruct()
    {
        //array("pseudo"=>"Prof") ---> $pseudo = "Prof";
        $this->data['userSession'] = null;
        $this->data['userStatus'] = null;
        if (isset($_SESSION['token'])) {
            $this->data['userSession'] = Session::getByToken();
            if($this->data['userSession'] && $this->data['userSession']->getUserId()) {
                $user = new User();
                $user = $user->setId($this->data['userSession']->getUserId());
                $this->data['userStatus'] = $user->getStatus();
            }

        }

        $this->data['website_logo'] = "../".LOGOPATH;

        extract($this->data);
        include "View/" . $this->template . ".tpl.php";
    }
}