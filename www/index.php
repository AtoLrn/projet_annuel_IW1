<?php

require_once __DIR__ . "/controllers/Router.php";
require_once __DIR__ . "/controllers/ErrorController.php";
require_once __DIR__ . "/vue/Index.php";

$router = new Router();
$router->route($_GET["path"]);