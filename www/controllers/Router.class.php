<?php

class Router
{

    protected $routes = [];
    public function __construct()
    {
        $routes = $this->getRoutes();


        foreach ($routes['routes'] as $route => $val) {
            $this->addRoute($route, $val['controller'], $val['action']);
        }
    }

    public function getRoutes()
    {
        return yaml_parse_file("./routes.yml");
    }

    public function addRoute(string $path, $controller, $action): void
    {
        array_push($this->routes, ["path" => $path, "controller" => $controller, "action" => $action]);
    }

    public function route(string $path): void
    {
        $pageFounded = False;
        foreach ($this->routes as $route) {
            if (trim($route["path"], "/") === trim($path, "/")) {
                $pageFounded = True;
                $controller = new $route["controller"]();
                $controller->{$route["action"]}();
            }
        }
        if (!$pageFounded) {
            $error = new ErrorController();
            $error->error404();
        }
    }
}