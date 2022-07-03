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
            $columns = array_map(
                function($column) {
                    return strstr($column, ".") ? DBPREFIXE . $column : $column;
                },
                $columns);
            
            $this->query->base = "SELECT " . implode(", ", $columns) . " FROM " . DBPREFIXE . $table;
            return $this;
        }

        public function insert(string $table, array $columns): QueryBuilder
        {
            $this->reset();
            
            $this->query->base = "INSERT INTO " . DBPREFIXE . $table . " (" . implode(",", array_keys($columns)) . ") 
            VALUES ( :" . implode(",:", array_keys($columns)) . ")";
            return $this;
        }

        public function update(string $table, array $columns): QueryBuilder
        {
            $this->reset();
            
            $update = [];
            foreach ($columns as $column => $value) {
                $update[] = $column . "=:" . $column;
            }
            $this->query->base = "UPDATE " . DBPREFIXE . $table . " SET " . implode(",", $update);
            return $this;
        }

        public function where(string $column, ?string $value, string $operator = "="): QueryBuilder
        {
            if(!is_null($value)) {
                $this->query->where[] = $column . $operator .  ":" . $column;
                $this->params[$column] = $value;
            }
            return $this;
        }

        public function whereOr(string $column, ?string $value, string $operator = "="): QueryBuilder
        {
            if(!is_null($value)) {
                $this->query->whereOr[] = $column . $operator .  ":" . $column . "_or";
                $this->params[$column . "_or"] = $value;
            }
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

        public function groupBy(array $columns): QueryBuilder
        {
            $this->query->groupBy = " GROUP BY " . implode(',', $columns);
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

            if (!empty($query->whereOr)) {
                $where = empty($query->where);
                $sql .= ($where ? " WHERE ": " AND (") . implode(' OR ', $query->whereOr) . ($where ? "" : ")");
            }


            if (!empty($query->groupBy)) {
                $sql .= $query->groupBy;
            }

            if(!empty($query->order)) {
                $sql .= $query->order;
            }

            if (isset($query->limit)) {
                $sql .= $query->limit;
            }

            $sql .= ";";

            $this->reset();

            return $sql;
            
        }
    }