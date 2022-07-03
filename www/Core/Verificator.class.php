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



        if( count($data) != ((count($config['inputs']) - count($images)) + count(array_filter($config['inputs'], 
        function($value) {
            return $value["type"] === "file";
        }
        ))
        )){
            Logger::writeErrorLog("Error parsing form data.");
            die("something go wrong in form.");
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
                    $result[$name][] = "élément non répertorié: attention à la syntaxe";
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

    public static function checkRecaptcha(string $key): bool
    {
        $recaptchaUrl = 'https://www.google.com/recaptcha/api/siteverify';
        $recaptchaSecret = KEY_SECRET_RECAPTCHA;
        $recaptcha = $key;

        // Make and decode POST request:
        $recaptcha = file_get_contents($recaptchaUrl . '?secret=' . $recaptchaSecret . '&response=' . $recaptcha);
        $recaptcha = json_decode($recaptcha);
        
        if(isset($recaptcha->score) && $recaptcha->score >= 0.5) {
            return true;
        }

        Logger::writeErrorLog("An Bot has been detected.");
        return false;
    }
}

