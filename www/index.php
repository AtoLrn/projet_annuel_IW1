<?php

require_once "controllers/Router.php";
require_once "vue/Index.php";


function sendLastRelease()
{
    header('Content-Disposition: attachment; filename="Dockerfile"');
    readfile("./public/Dockerfile");
}

function indexPage()
{
    $page = new Index("Index");
    $page->render();
}

function getRoutes()
{
    yaml_parse_file("./routes.yml");
}

$router = new Router();
$routes = getRoutes();


$router->addRoute("/release", "sendLastRelease");
$router->addRoute("/", "indexPage");


$router->route($_GET["path"]);