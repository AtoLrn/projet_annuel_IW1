<?php

namespace App\Core;
use App\Core\Interfaces\QueryBuilder;

class MysqlBuilder implements QueryBuilder
    {
        protected $query;
        protected $params;


        private function reset()
        {
            $this->query = new \stdClass();
        }

        public function getParams(): ?array
        {
            return $this->params;
        }

        public function select2(string $table, array $columns): QueryBuilder
        {
            $this->reset();
            $this->query->base = "SELECT " . implode(", ", $columns) . " FROM " . DBPREFIXE . $table;
            return $this;
        }

        public function where(string $column, string $value, string $operator = "="): QueryBuilder
        {
            $this->query->where[] = $column . $operator .  ":" . $column;
            $this->params[$column] = $value;
            return $this;
        }

        public function leftJoin(string $table, string $fk, string $pk): QueryBuilder 
        {
            $this->query->join[] = " LEFT JOIN " . DBPREFIXE . $table . " ON " . DBPREFIXE . $pk . " = " . DBPREFIXE . $fk;
            return $this;
        }

        public function innerJoin(string $table, string $fk, string $pk): QueryBuilder 
        {
            $this->query->join[] = " INNER JOIN " . DBPREFIXE . $table . " ON " . DBPREFIXE . $pk . " = " . DBPREFIXE . $fk;
            return $this;
        }

        public function rightJoin(string $table, string $fk, string $pk): QueryBuilder 
        {
            $this->query->join[] = " RIGHT JOIN " . DBPREFIXE . $table . " ON " . DBPREFIXE . $pk . " = " . DBPREFIXE . $fk;
            return $this;
        }

        public function limit(int $from, int $offset): QueryBuilder
        {
            $this->query->limit = " LIMIT " . $from . ", " . $offset;
            return $this;
        }

        public function orderBy(string $column, string $direction = "ASC"): QueryBuilder
        {
            $this->query->order = " ORDER BY " . $column . " " . $direction;
            return $this;
        }

        public function get(): string
        {
            $query = $this->query;

            $sql = $query->base;

            if (!empty($query->join)) {
                $sql .= implode(' ', $query->join);
            }

            if (!empty($query->where)) {
                $sql .= " WHERE " . implode(' AND ', $query->where);
            }

            if(!empty($query->order)) {
                $sql .= $query->order;
            }

            if (isset($query->limit)) {
                $sql .= $query->limit;
            }

            $sql .= ";";

            return $sql;
            
        }
    }