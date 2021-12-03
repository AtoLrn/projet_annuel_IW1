<?php

namespace App\Core;

abstract class Sql
{
    private $pdo;

    public function __construct()
    {
        //Se connecter à la bdd
        //il faudra mettre en place le singleton
        try{
            $this->pdo = new \PDO( DBDRIVER.":host=".DBHOST.";port=".DBPORT.";dbname=".DBNAME
                ,DBUSER, DBPWD , [\PDO::ATTR_ERRMODE => \PDO::ERRMODE_WARNING]);
        }catch (\Exception $e){
            die("Erreur SQL : ".$e->getMessage());
        }

    }

    public function save()
    {
        //Si l'id n'est pas null alors on fait un update sinon on fait un insert
        $calledClassExploded = explode("\\",get_called_class());
        $table = strtolower(DBPREFIXE.end($calledClassExploded));


        $sql = "INSERT INTO ".$table." (email, password) VALUES ( :email , :password )";

        echo $sql;
        die();

        $queryPrepared = $this->pdo->prepare($sql);
        $queryPrepared->execute( [
                                    "password"=>"Test1234",
                                    "email"=>"y.skrzypczyk@gmail.com"
                                ] );


    }


}