<?php

namespace App;

use App\Model\Page as PageModel;
use App\Core\Middleware\PageControl;
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

$page = PageControl::isExist($uri);

/*$page = new PageModel();
$pageId = $page->select2('page', ['id'])
    ->where('path', substr($uri, 1))
    ->fetchAll();*/

if (empty($routes[$uri]) ||  empty($routes[$uri]["controller"])  ||  empty($routes[$uri]["action"])) {
    if (!$page) {
        die("Erreur 404");
    }
}

/*$page = $pageId ? $page->setId($pageId[0]->getId()) : null;*/

$controller = !$page ? ucfirst(strtolower($routes[$uri]["controller"])) : 'Page';
$action = !$page ? strtolower($routes[$uri]["action"]) : 'getPage';
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

!$page ? $objectController->$action() : $objectController->$action($page);

// //DEBUG FOR CREATING A SESSION
// $session = new Session();
// $session->generateToken();
// $session->setUserId(1);
// // $session->setExpiration(time() + 3600);
// $session->save();