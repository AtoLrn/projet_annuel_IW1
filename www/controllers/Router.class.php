<?php

class Router
{
    public function __construct()
    {
    }

    public function getRoutes()
    {
        return yaml_parse_file("./routes.yml");
    }


    public function runUrl(string $path): void
    {
        $pageFounded = False;
        $routes = $this->getRoutes();

        foreach ($routes as $routePath => $route) {
            if (trim($routePath, "/") === trim($path, "/")) {
                if (isset($route["controller"]) && isset($route["action"])) {
                    $pageFounded = True;


                    $controller = $route["controller"];
                    $action = $route["action"];
                    $controller = new $controller();
                    $controller->$action();
                }
            }
        }
        if (!$pageFounded) {
            $error = new ErrorController();
            $error->error404();
        }
    }
}