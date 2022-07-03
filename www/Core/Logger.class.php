<?php
namespace App\Core;

use \DateTime;

class Logger {
    private static $_file_instance = null;

    public function __construct()
    {
    }

    public static function getInstance() 
    {
        if (is_null(self::$_file_instance)) {
            self::$_file_instance = fopen('./errors.log', 'a');
        }
        return self::$_file_instance;
    }

    public static function writeErrorLog(string $message)
    {
        $date = new DateTime();
        $date = $date->format('Y-m-d H:i:s');

        $instance = self::getInstance();
        fwrite($instance, "[$date]: $message\n");
    }

    public function __destruct()
    {
        $instance = self::getInstance();
        fclose($instance);
    }
}