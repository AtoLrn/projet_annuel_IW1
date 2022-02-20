<?php

namespace App\Core;

use PDO;

abstract class Sql
{
    private $pdo;
    private $table;

    public function __construct()
    {
        //Se connecter à la bdd
        //il faudra mettre en place le singleton
        try {
            $this->pdo = new \PDO(
                DBDRIVER . ":host=" . DBHOST . ";port=" . DBPORT . ";dbname=" . DBNAME,
                DBUSER,
                DBPWD,
                [\PDO::ATTR_ERRMODE => \PDO::ERRMODE_WARNING]
            );
        } catch (\Exception $e) {
            die("Erreur SQL : " . $e->getMessage());
        }

        //Si l'id n'est pas null alors on fait un update sinon on fait un insert
        $calledClassExploded = explode("\\", get_called_class());
        $this->table = strtolower(DBPREFIXE . end($calledClassExploded));
    }

    /**
     * @param int $id
     */
    public function setId(?int $id): object
    {
        $sql = "SELECT * FROM " . $this->table . " WHERE id=" . $id;
        $query = $this->pdo->query($sql);
        return $query->fetchObject(get_called_class());
    }

    public function save(): int
    {

        $columns = get_object_vars($this);
        $columns = array_diff_key($columns, get_class_vars(get_class()));

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

    public function delete()
    {
        $sql = "DELETE FROM " . $this->table . " WHERE id=" . $this->getId();
        $queryPrepared = $this->pdo->query($sql);
    }

    public function select(array $tables): ?array
    {
        $calledClassExploded = explode("\\", get_called_class());
        $table = strtolower(end($calledClassExploded));

        $args = $this->getArgs($tables);
        $lf = $this->getLeftJoins($tables);
        $sql = "SELECT " . $args . " FROM " . DBPREFIXE . $table . $lf;

        $where = $this->getWhere($tables);
        if ($where !== "") {
            $sql .= " WHERE " . $where;
        }

        $params = [];
        foreach ($tables as $key => $val) {
            $params = array_merge($params, $val['params']);
        }

        return $this->dbFetchAll($sql, $params);
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
                array_push($args, DBPREFIXE . $keyTable . "." . $vals . " AS " . $keyTable . "_" . $vals);
            }
        }

        return implode(",", $args);
    }

    private function getLeftJoins(array $tables): string
    {
        $lf = [];

        $tables = array_filter($tables, function ($table) {
            return isset($table['lf']);
        });

        foreach ($tables as $key => $values) {
            foreach ($values['lf'] as $val) {
                array_push($lf, " LEFT JOIN " . DBPREFIXE . $val . " ON " . DBPREFIXE . $key . ".id = " . DBPREFIXE . $val . "." . $key . "Id");
            }
        }

        return implode("", $lf);
    }

    private function getWhere(array $tables): string
    {

        $where = [];
        foreach ($tables as $key => $table) {
            foreach ($table['params'] as $keyParams => $param) {
                array_push($where, DBPREFIXE . $key . "." . $keyParams . " = :" . $keyParams);
            }
        }

        return implode(" AND ", $where);
    }
}