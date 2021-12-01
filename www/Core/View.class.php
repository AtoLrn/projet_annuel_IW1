<?php

namespace App\Core;

class View
{
    private $view;

    public function __construct($view)
    {
        $this->setView($view);
    }

    public function setView($view):void
    {
        $this->view = strtolower($view);
    }


    public function __toString():string
    {
        return "La vue est : ". $this->view;
    }

    public function __destruct()
    {
        include "View/".$this->view.".view.php";
    }

}