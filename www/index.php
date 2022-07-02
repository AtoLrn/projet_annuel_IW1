<?php

namespace App;

use App\Model\Page as PageModel;
use App\Core\Middleware\PageControl;
use App\Core\Decorator\UrlDecorator;


session_start();
require "conf.inc.php";
// require "Core/Middleware/Security.php";

function myAutoloader($class)
{
    // $class => CleanWords
    $class = str_replace("App\\", "", $class);
    $class = str_replace("\\", "/", $class);
    if (file_exists($class . ".class.php")) {
        include $class . ".class.php";
    }else if (file_exists($class . ".php")) {
        include $class . ".php";
    }
}

spl_autoload_register("App\myAutoloader");



//Réussir à récupérer l'URI
$uri = $_SERVER["REQUEST_URI"];

$routeFile = "routes.yml";
if (!file_exists($routeFile)) {
    die("Le fichier " . $routeFile . " n'existe pas");
}

$uri = strtok($uri, "?");

$routes = yaml_parse_file($routeFile);

$page = null;
if (empty($routes[$uri]) ||  empty($routes[$uri]["controller"])  ||  empty($routes[$uri]["action"])) {
    $page = PageControl::isExist($uri);
    if ($page) {
        $page = explode('\\', str_replace('Model', 'Controller', get_class($page)));
        $page = end($page);
    }
    if (!$page) {
        header('location: /404');
        die();
    }
}

/*$page = $pageId ? $page->setId($pageId[0]->getId()) : null;*/

$controller = $page ?? ucfirst(strtolower($routes[$uri]["controller"]));
$action = !$page ? strtolower($routes[$uri]["action"]) : 'getBySlug';
$rights = $routes[$uri]["security"] ?? [];


/*
 *
 *  Vérfification de la sécurité, est-ce que la route possède le paramètr security
 *  Si oui est-ce que l'utilisation a les droits et surtout est-ce qu'il est connecté ?
 *  Sinon rediriger vers la home ou la page de login
 *
 */


$controllerFile = "Controller/" . $controller . ".class.php";
if (!file_exists($controllerFile)) {
    die("Le controller " . $controllerFile . " n'existe pas");
}
//Dans l'idée on doit faire un require parce vital au fonctionnement
//Mais comme on fait vérification avant du fichier le include est plus rapide a executer
include $controllerFile;

$controller = "App\\Controller\\" . $controller;
if (!class_exists($controller)) {
    die("La classe " . $controller . " n'existe pas");
}

// $controller = User ou $controller = Global
$objectController = new $controller();

if (!method_exists($objectController, $action)) {
    die("L'action " . $action . " n'existe pas");
}

//Call MiddleWare
use App\Core\Middleware\Security;

Security::Auth($rights);

if ($page)
$objectController = new UrlDecorator($objectController);

!$page ? $objectController->$action() : $objectController->$action();
