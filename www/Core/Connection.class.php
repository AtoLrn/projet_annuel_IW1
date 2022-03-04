<?php
namespace App\Core;

use PDO;

class Connection {
    private static $_instance = null;

    public function __construct()
    {
    }

    public static function getInstance() 
    {
        if (is_null(self::$_instance)) {
            self::$_instance = new \PDO(
                DBDRIVER . ":host=" . DBHOST . ";port=" . DBPORT . ";dbname=" . DBNAME,
                DBUSER,
                DBPWD,
                [\PDO::ATTR_ERRMODE => \PDO::ERRMODE_WARNING]
            );
        }
        return self::$_instance;
    }
}