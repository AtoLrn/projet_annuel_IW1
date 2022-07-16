<?php

namespace App\Core;
use App\Core\Interfaces\QueryBuilder;

class FactorySql 
    {
        function __construct() {
            return new MysqlBuilder();
        }
    }