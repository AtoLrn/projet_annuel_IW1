<?php

class CleanWords
{

    public static function lastname($lastname):string
    {
        return strtoupper(trim($lastname));
    }

}