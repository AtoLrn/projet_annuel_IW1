<?php

namespace App\Core;

use App\Core\Connection;
use JsonSerializable;
use PDO;
use PDOStatement;
use App\Core\Interfaces\QueryBuilder;

abstract class Sql implements JsonSerializable
{
    private $pdo;
    private $table;
    private $driver;

    public function __construct()
    {

     

        try {
            $this->pdo = Connection::getInstance();
            if (DBDRIVER == "mysql") {
                $this->driver = new MysqlBuilder($this->pdo);
            } else {
                $this->driver = new PostGreBuilder($this->pdo);
            }
            
        } catch (\Exception $e) {
            $error = $e->getMessage();
            Logger::writeErrorLog("Error with DB Connection, $error");
            die("Erreur SQL : " . $error);
        }

        $calledClassExploded = explode("\\", get_called_class());
        $this->table = ($this->tableSpecialName ?? strtolower(end($calledClassExploded)));
    }

    /**
     * @param int|null $id
     * @return object|null
     */
    public function setId(?int $id): ?object
    {
        $obj = $this->driver->select2($this->table, ["*"])
            ->where('id', $id)
            ->fetch(get_called_class());
        return $obj ? $obj : null;
    }

    public function save(): int
    {
        $columns = get_object_vars($this);
        $columns = array_diff_key($columns, get_class_vars(get_class()));

        $columns = array_filter($columns, function($key) {
            return $key != "tableSpecialName";
        }, ARRAY_FILTER_USE_KEY);

        if ($this->getId() == null) {
            $this->insert($this->table, $columns);
        } else {
            $this->update($this->table, $columns)->where('id', $this->getId());
        }

        $queryPrepared = $this->pdo->prepare($this->get());
        $queryPrepared->execute(array_merge($columns, $this->getParams()));
        return $this->pdo->lastInsertId();
    }

    public function delete(): PDOStatement
    {
        $sql = "DELETE FROM " . DBPREFIXE . $this->table . " WHERE id=" . $this->getId();
        $queryPrepared = $this->pdo->query($sql);

        return $queryPrepared;
    }

    public function select(array $tables, ?int $limit = null, ?string $orderBy = null, $order = "ASC"): ?array
    {
        $calledClassExploded = explode("\\", get_called_class());
        /*$table = strtolower(end($calledClassExploded));*/
        $table = array_keys($tables)[0];

        $args = $this->getArgs($tables);
        $joins = $this->getJoins($tables, 'lf') . $this->getJoins($tables, 'ij') . $this->getJoins($tables, 'rj');
        $sql = "SELECT " . $args . " FROM " . DBPREFIXE . $table . $joins;

        $where = $this->getWhere($tables);
        if ($where !== "") {
            $sql .= " WHERE " . $where;
        }

        if(!is_null($orderBy)) {
            // ex: article.createAt OR createdAt works here
            $checkedOrderBy = strstr($orderBy, ".") ? DBPREFIXE . $orderBy : $orderBy;
            $sql .= " ORDER BY " . $checkedOrderBy . " " . $order;
        }

        if(!is_null($limit)) {
            $sql .= " LIMIT " . $limit;
        }

        $params = [];
        foreach ($tables as $key => $val) {
            if(isset($val['params'])) {
                foreach ($val['params'] as $keyParam => $param) {
                    $params[$keyParam] = is_array($param) ? $param['value'] : $param;
                }
            }
        }
        // echo $sql;
        return $this->dbFetchAll($sql, $params);
    }

    private function getArgs(array $tables): string
    {
        $args = [];
        foreach ($tables as $keyTable => $values) {
            foreach ($values['args'] as $key => $vals) {
                if (strstr($vals, "COUNT") || strstr($vals, "AVG")) {
                    $args[] = $vals;
                } else {
                    $args[] = DBPREFIXE . $keyTable . "." . $vals . " AS " . $keyTable . "_" . $vals;
                }
            }
        }

        return implode(",", $args);
    }

    private function getJoins(array $tables, $separator): string
    {
        $separators = [
            'lf' => 'LEFT JOIN',
            'ij' => 'INNER JOIN',
            'rj' => 'RIGHT JOIN'
        ];

        if(!isset($separators[$separator])) {
            return "";
        }

        $joins = [];
        $tables = array_filter($tables, function($table) use($separator) {
            return isset($table[$separator]);
        } );

        foreach ($tables as $key => $values) {
            foreach ($values[$separator] as $val) {
                $joins[] = " " . $separators[$separator] . " " . DBPREFIXE . $val . " ON " . DBPREFIXE . $key . ".id = " . DBPREFIXE . $val . "." . $key . "Id";
            }
        }

        return implode("", $joins);
    }

    private function getWhere(array $tables): string
    {

        $where = [];
        foreach ($tables as $key => $table) {
            if(isset($table['params'])) {
                foreach ($table['params'] as $keyParams => $param) {
                    $operator = is_string($param) ? "=" : $param["operator"] ?? "=";
                    if (!preg_match('/=|<|>|<=|>=|!=/', $operator)) {
                        $operator = "=";
                    }
                    $where[] = DBPREFIXE . $key . "." . $keyParams . " " .$operator. " :" . $keyParams;

                }
            }
        }

        return implode(" AND ", $where);
    }

    public function jsonSerialize()
    {
        $columns = get_object_vars($this);
        $columns = array_diff_key($columns, get_class_vars(get_class()));
        return $columns;
    }

    public function getParams(): ?array
    {
        return $this->driver->getParams();
    }

    public function select2(string $table, array $columns) {
        $this->driver->select2($table, $columns);
        return $this;
    }

    public function insert(string $table, array $columns) {
        $this->driver->insert($table, $columns);
        return $this;
    }
    public function update(string $table, array $columns) {
        $this->driver->update($table, $columns);
        return $this;
    }
    public function where(string $column, ?string $value, string $operator = "=") {
        $this->driver->where($column,  $value, $operator);
        return $this;
    }
    public function whereOr(string $column, ?string $value, string $operator = "=") {
        $this->driver->whereOr($column, $value, $operator);
        return $this;
    }
    public function leftJoin(string $table, string $fk, string $pk) {
        $this->driver->leftJoin($table,  $fk, $pk);
        return $this;
    }
    public function innerJoin(string $table, string $fk, string $pk) {
        $this->driver->innerJoin($table,  $fk, $pk);
        return $this;
    }
    public function rightJoin(string $table, string $fk, string $pk) {
        $this->driver->rightJoin( $table,  $fk, $pk);
        return $this;
    }
    public function groupBy(array $columns) {
        $this->driver->groupBy($columns);
        return $this;
    }
    public function orderBy(string $column, string $direction = "ASC") {
        $this->driver->orderBy($column, $direction);
        return $this;
    }
    public function limit(int $from, int $offset) {
        $this->driver->limit( $from,  $offset);
        return $this;
    }
    public function get() {
        
        return $this->driver->get();
    }

    public function count()
    {
        return $this->driver->count(get_called_class());
    }

    public function fetch()
    {
        return $this->driver->fetch(get_called_class());
    }

    public function fetchAll()
    {
        return $this->driver->fetchAll(get_called_class());
    }

    private function dbFetchAll($sql, $params): ?array
    {
        $queryPrepared = $this->pdo->prepare($sql);
        $queryPrepared->execute($params);

        return $queryPrepared->fetchAll(PDO::FETCH_ASSOC);
    }
}