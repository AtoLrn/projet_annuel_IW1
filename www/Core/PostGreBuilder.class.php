<?php

namespace App\Core;
use App\Core\Interfaces\QueryBuilder;

class PostGreBuilder extends MysqlBuilder implements QueryBuilder
    {
        public function limit(int $from, int $offset): QueryBuilder
        {
            $this->query->limit = " LIMIT " . $from . " OFFSET " . $offset;
            return $this;
        }
    }