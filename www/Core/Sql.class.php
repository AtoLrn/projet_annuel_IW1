<?php

namespace App\Core;

use App\Core\Connection;
use JsonSerializable;
use PDO;
use PDOStatement;

abstract class Sql extends MysqlBuilder implements JsonSerializable
{
    private $pdo;
    private $table;

    public function __construct()
    {
        //Se connecter à la bdd
        //il faudra mettre en place le singleton
        try {
            $this->pdo = Connection::getInstance();
        } catch (\Exception $e) {
            die("Erreur SQL : " . $e->getMessage());
        }

        //Si l'id n'est pas null alors on fait un update sinon on fait un insert
        $calledClassExploded = explode("\\", get_called_class());
        $this->table = DBPREFIXE.($this->tableSpecialName ?? strtolower(end($calledClassExploded)));
    }

    /**
     * @param int $id
     */
    public function setId(?int $id): ?object
    {
        $sql = "SELECT * FROM " . $this->table . " WHERE id=" . $id;
        $query = $this->pdo->query($sql);
        $obj = $query->fetchObject(get_called_class());
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
            $sql = "INSERT INTO " . $this->table . " (" . implode(",", array_keys($columns)) . ") 
            VALUES ( :" . implode(",:", array_keys($columns)) . ")";
        } else {
            $update = [];
            foreach ($columns as $column => $value) {
                $update[] = $column . "=:" . $column;
            }
            $sql = "UPDATE " . $this->table . " SET " . implode(",", $update) . " WHERE id=" . $this->getId();
        }
        // DEBUG
        // echo $sql;

        $queryPrepared = $this->pdo->prepare($sql);
        $queryPrepared->execute($columns);
        return $this->pdo->lastInsertId();
    }

    public function delete(): PDOStatement
    {
        $sql = "DELETE FROM " . $this->table . " WHERE id=" . $this->getId();
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


    public function fetchAll()
    {
        $queryPrepared = $this->pdo->prepare($this->get());
        $queryPrepared->execute($this->getParams());

        return $queryPrepared->fetchAll(PDO::FETCH_CLASS, get_called_class());
    }

    public function fetch()
    {
        $queryPrepared = $this->pdo->prepare($this->get());
        $queryPrepared->execute($this->getParams());
        $queryPrepared->setFetchMode(PDO::FETCH_CLASS, get_called_class());
        
        return $queryPrepared->fetch();
    }


    private function dbFetchAll($sql, $params): ?array
    {
        $queryPrepared = $this->pdo->prepare($sql);
        $queryPrepared->execute($params);

        return $queryPrepared->fetchAll(PDO::FETCH_ASSOC);
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
}