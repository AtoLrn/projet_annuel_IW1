<?php

require_once __DIR__ . "/controllers/Router.class.php";
require_once __DIR__ . "/controllers/ErrorController.class.php";
require_once __DIR__ . "/controllers/UserController.class.php";
require_once __DIR__ . "/vue/Index.php";

$router = new Router();
$router->runUrl($_SERVER['REQUEST_URI']);