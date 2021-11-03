<?php

require_once "controllers/Router.php";
require_once "vue/Index.php";

$router = new Router();
$router->route($_GET["path"]);