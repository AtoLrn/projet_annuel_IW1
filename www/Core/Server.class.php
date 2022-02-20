<?php
namespace App\Core;

class Server {
    public static function ensureHttpMethod(string $method): void 
    {
        if($_SERVER['REQUEST_METHOD'] !== $method) {
            http_response_code(405);
            die();
        }
    }
}