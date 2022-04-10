<?php

namespace App\Model;

use App\Core\Sql;

class User extends Sql
{
    protected $id = null;
    protected $firstname = null;
    protected $lastname = null;
    protected $status = "user";
    protected $email;
    protected $password;
    protected $isVerified = 0;
    protected $mailToken = null;

    public function __construct()
    {

        parent::__construct();
    }

    /**
     * @return null|int
     */
    public function getId(): ?int
    {
        return $this->id;
    }



    /**
     * @return null|string
     */
    public function getFirstname(): ?string
    {
        return $this->firstname;
    }

    /**
     * @param string $firstname
     */
    public function setFirstname(?string $firstname): void
    {
        $this->firstname = ucwords(strtolower(trim($firstname)));
    }

    /**
     * @return null|string
     */
    public function getLastname(): ?string
    {
        return $this->lastname;
    }

    /**
     * @param null|string
     */
    public function setLastname(?string $lastname): void
    {
        $this->lastname = strtoupper(trim($lastname));
    }


    /**
     * @return string
     */
    public function getEmail(): string
    {
        return $this->email;
    }

    /**
     * @param string $email
     */
    public function setEmail(string $email): void
    {
        $this->email = strtolower(trim($email));
    }

    /**
     * @return string
     */
    public function getPassword(): string
    {
        return $this->password;
    }

    /**
     * @param string $password
     */
    public function setPassword(string $password): void
    {
        $this->password = password_hash($password, PASSWORD_DEFAULT);
    }

    /**
     * @return string
     */
    public function getStatus(): string
    {
        return $this->status;
    }

    /**
     * @param string $status
     */
    public function setStatus(string $status): void
    {
        $this->status = $status;
    }


    /**
     * @return null|string
     */
    public function getToken(): ?string
    {
        return $this->token;
    }

    /**
     * length : 255
     */
    public function generateToken(): void
    {
        $this->token = substr(bin2hex(random_bytes(128)), 0, 255);
    }


    public function formatList(): array
    {
        return [
            "title" => "Les Utilisateurs",
            "search" => "Rechercher un utilisateur",
            "columns" => ["Mail", "Nom", "Prénom", "Statut"]
              
        ];
    }

    public function formatUserById(): array
    {
        return [          
            "user" => [
                "args" => ["id", "email", "firstname", "lastname", "status"],
                "params" => ["id" => ""],
                "lf" => ["article"]
            ],
            "article" => [
                "args" => ["id", "title", "description"],
                "params" => [],
                "lf" => ["like", "comment"]
            ],
            "like" => [
                "args" => ["id"],
                "params" => [],
            ],

            "comment" => [
                "args" => ["id"],
                "params" => [],
            ]                 
        ];
    }

    /**
     * @param string $isVerified
     */
    public function setIsVerified(string $isVerified): void
    {
        $this->isVerified = $isVerified;
    }

    /**
     * @return null|string
     */
    public function getMailToken(): ?string
    {
        return $this->mailToken;
    }

    /**
     * length : 255
     */
    public function generateMailToken(): void
    {
        $this->mailToken = substr(bin2hex(random_bytes(128)), 0, 255);
    }

    /**
     * @param string $isVerify
     */
    public function setIsVerify(string $isVerify): void
    {
        $this->isVerify = $isVerify;
    }

    /**
     * @return int
     */
    public function getIsVerify(): int
    {
        return $this->isVerify;
    }

    public function getIsVerified(): int
    {
        return $this->isVerified;
    }

    public function getRegisterForm(): array
    {
        return [
            "config" => [
                "id" => "registerForm",
                "method" => "POST",
                "action" => "/register-login?formType=register",
                "submit" => "S'inscrire",
                "class" => "col a-center py-4 w-per-20 px-8 g-5"
            ],
            'inputs' => [
                "email" => [
                    "type" => "email",
                    "placeholder" => "Votre email ...",
                    "required" => true,
                    "class" => "input input-pink",
                    "id" => "emailForm",
                    "label" => "Email",
                    "error" => "Email incorrect",
                    "unicity" => "true",
                    "errorUnicity" => "Email déjà en bdd",
                ],
                "password" => [
                    "type" => "password",
                    "placeholder" => "Votre mot de passe ...",
                    "required" => true,
                    "class" => "input input-pink",
                    "id" => "pwdForm",
                    "label" => "Mot de passe",
                    "error" => "Votre mot de passe doit faire au min 8 caractères avec majscule, minuscules et des chiffres",
                ],
                "passwordConfirm" => [
                    "type" => "password",
                    "placeholder" => "Confirmation ...",
                    "required" => true,
                    "class" => "input input-pink",
                    "id" => "pwdConfirmForm",
                    "label" => "Confirmez votre mot de passe",
                    "confirm" => "password",
                    "error" => "Votre mot de passe de confirmation ne correspond pas",
                ],
                "firstname" => [
                    "type" => "text",
                    "placeholder" => "Votre prénom ...",
                    "class" => "input input-pink",
                    "id" => "firstnameForm",
                    "label" => "Prénom",
                    "min" => 2,
                    "max" => 50,
                    "error" => "Prénom incorrect"
                ],
                "lastname" => [
                    "type" => "text",
                    "placeholder" => "Votre nom ...",
                    "class" => "input input-pink",
                    "id" => "lastnameForm",
                    "label" => "Nom",
                    "min" => 2,
                    "max" => 100,
                    "error" => "Nom incorrect"
                ],
            ]
        ];
    }

    public function getLoginForm(): array
    {
        return [
            "config" => [
                "id" => "loginForm",
                "method" => "POST",
                "action" => "/register-login?formType=login",
                "submit" => "Se connecter",
                "class" => "col a-center py-4 w-per-20 px-8 g-5"
            ],
            'inputs' => [
                "email" => [
                    "type" => "email",
                    "placeholder" => "Votre email ...",
                    "required" => true,
                    "class" => "input input-pink",
                    "id" => "emailForm",
                    "label" => "Email",
                    "error" => "Email incorrect"
                ],
                "password" => [
                    "type" => "password",
                    "placeholder" => "Votre mot de passe ...",
                    "required" => true,
                    "class" => "input input-pink",
                    "id" => "pwdForm",
                    "label" => "Mot de passe"
                ]
            ]
        ];
    }
}