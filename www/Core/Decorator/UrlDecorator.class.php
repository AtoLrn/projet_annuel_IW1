<?php

namespace App\Core\Decorator;

use App\Core\Interfaces\UrlDecoratorInterface;

class UrlDecorator implements UrlDecoratorInterface
{
    protected $component;

    public function __construct($component)
    {
        $this->component = $component;
    }

    public function getBySlug(): void {

        $uri = strtok($_SERVER["REQUEST_URI"], "?");
        $uri = substr($uri, 1);
        $this->component->getBySlug($uri);
    }
}