<?php

class Router
{

    protected $routes = [];
    public function __construct()
    {
    }

    public function addRoute(string $path, $action): void
    {
        array_push($this->routes, ["path" => $path, "callback" => $action]);
    }

    public function route(string $path): void
    {

        foreach ($this->routes as $route) {
            if (trim($route["path"], "/") === trim($path, "/")) {
                $route["callback"]();
            }
        }
    }
}
