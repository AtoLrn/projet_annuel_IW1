<?php

namespace App\Core;

class View
{
    private $view;
    private $data=[];

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


    public function assign($key, $value):void
    {
        $this->data[$key]=$value;
    }

    public function __destruct()
    {
        //array("pseudo"=>"Prof") ---> $pseudo = "Prof";
        extract($this->data);
        include "View/".$this->view.".view.php";
    }

}