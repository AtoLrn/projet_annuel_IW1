<?php

namespace App\Core;


class Verificator
{

    public static function checkForm($config, $data): array
    {
        $result = [];
        //Le nb de inputs envoyés ?

        $images = array_filter($config['inputs'], function($input) {
            return $input["type"] === "file";
        });

        if( count($data) != (count($config['inputs']) - count($images))){
            die("Tentative de hack !!!!");
        }

        foreach ($config['inputs'] as $name => $input){

            if($input["type"] === "file") {
                continue;
            }

            if(!isset($data[$name]) ){
                $result[$name][] = "Le champs ".$name." n'existe pas";
            }

            if(empty($data[$name]) && !empty($input["required"]) ){
                $result[$name][] = "Le champs ".$name." ne peut pas être vide";
            }

            if($input["type"] == "email" && !self::checkEmail($data[$name]) ){
                $result[$name][] = $input["error"];
            }

            if($input["type"] == "password" && empty($input["confirm"]) && !self::checkPassword($data[$name]) ){
                $result[$name][] = $input["error"];
            }

            if(!empty($input["confirm"]) && $data[$name] != $data[$input["confirm"]]){
                $result[$name][] = $input["error"];
            }

            if(isset($input['enum']) ){
                $valid = false;
                foreach($input['enum'] as $key => $value) {
                    if($data[$name] == $value) {
                        $valid = true;
                    }
                }
                if(!$valid) {
                    $result[$name][] = "Cette police n'existe pas";
                }
            }


        }


        return $result;

    }

    public static function checkEmail($email): bool
    {
       return filter_var($email, FILTER_VALIDATE_EMAIL);
    }


    public static function checkPassword($password): bool
    {

        return strlen($password)>=8
            && preg_match("/[0-9]/", $password, $match)
            && preg_match("/[a-z]/", $password, $match)
            && preg_match("/[A-Z]/", $password, $match);
    }
}

