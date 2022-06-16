<?php

namespace App\Core;


class CleanWords
{

    public static function lastname($lastname):string
    {
        return strtoupper(trim($lastname));
    }

    public static function formatePath($title): string
    {
        $path = strtolower(trim($title));
        return str_replace(" ", "-", $path);
    }

}