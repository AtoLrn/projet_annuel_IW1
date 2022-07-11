<?php

namespace App\Model;

use App\Core\Mail;
use App\Core\Sql;
use App\Model\Article;

class User extends Sql
{
    protected $id = null;
    protected $email;
    protected $lastname = null;
    protected $firstname = null;
    protected $status = "user";
    protected $password;
    protected $isVerified = 0;
    protected $mailToken = null;
    protected $passwordToken = null;
    protected $profilePicture = null;
    protected $tmpEmail = null;

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

    /**
     * @return null|string
     */
    public function getProfilePicture(): ?string
    {
        return $this->profilePicture;
    }

    /**
     * @param string $profilePicture
     */
    public function setProfilePicture(string $profilePicture): void
    {
        $this->profilePicture = $profilePicture;
    }

    /**
     * @return string
     */
    public function getPasswordToken(): ?string
    {
        return $this->passwordToken;
    }

    /**
     * @param string $passwordToken
     */
    public function setPasswordToken(string $passwordToken): void
    {
        $this->passwordToken = $passwordToken;
    }

    /**
     * @return string
     */
    public function getTmpEmail(): string
    {
        return $this->tmpEmail;
    }

    /**
     * @param string|null $tmpEmail
     */
    public function setTmpEmail(?string $tmpEmail): void
    {
        $this->tmpEmail = strtolower(trim($tmpEmail));
    }

    public function formatList(): array
    {
        return [
            "title" => "Les Utilisateurs",
            "search" => "Rechercher un utilisateur",
            "columns" => ["Mail", "Nom", "Prénom", "Statut"]
              
        ];
    }

    /**
     * @param string $isVerified
     */
    public function reverseIsVerified(): void
    {
        $this->isVerified = ($this->isVerified == 1 ? 0 : 1);
    }

    /**
     * @return null|string
     */
    public function getMailToken(): ?string
    {
        return $this->mailToken;
    }

    public function generateMailToken(): void
    {
        $this->mailToken = substr(bin2hex(random_bytes(128)), 0, 255);
    }

    public function generatePasswordToken(): void
    {
        $this->passwordToken = substr(bin2hex(random_bytes(128)), 0, 255);
    }

    /**
     * @param string $isVerify
     */
    public function setIsVerified(int $isVerified): void
    {
        $this->isVerified = $isVerified;
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

    public function getOrderType(string $key): array
    {
        $orders = [
            'date_desc' => ['val' => 'createdAt', 'order' => 'DESC'],
            'date_asc' => ['val' => 'createdAt', 'order' => 'ASC']
        ];

        return $orders[$key] ?? $orders['date_desc'];
    }

    public function sendEmailNotification(Article $article, User $chief)
    {
        $email = Mail::getInstance();
        $email->notification($article, $chief, $this);
    }


    public function getRegisterForm(): array
    {
        return [
            "config" => [
                "id" => "register-form",
                "method" => "POST",
                "action" => "/register-login?form=register",
                "submit" => "S'inscrire",
                "class" => "col a-center py-4 w-per-20 px-8 g-5",
                "labels" => "small",
                "recaptcha" => true
            ],
            'inputs' => [
                "email" => [
                    "type" => "email",
                    "placeholder" => "Votre email ...",
                    "required" => true,
                    "class" => "input input-pink",
                    "id" => "emailForm",
                    "label" => "Email",
                    "error" => "Email incorrecte",
                    "unicity" => "true",
                    "errorUnicity" => "Email déjà utilisé",
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
                "recaptcha" => [
                    "type" => "hidden",
                    "id" => "recaptcha-register-form",
                    "value" => KEY_SITE_RECAPTCHA
                ]
            ]
        ];
    }

    public function getLoginForm(): array
    {
        return [
            "config" => [
                "id" => "login-form",
                "method" => "POST",
                "action" => "/register-login?form=login". (isset($_GET['url']) ? "&url=".$_GET['url'] : ""),
                "submit" => "Se connecter",
                "class" => "col a-center py-4 w-per-20 px-8 g-5",
                "labels" => "small",
                "recaptcha" => true
            ],
            'inputs' => [
                "email" => [
                    "type" => "email",
                    "placeholder" => "Votre email ...",
                    "required" => true,
                    "class" => "input input-pink",
                    "id" => "emailLogin",
                    "label" => "Email",
                    "error" => "Email incorrect"
                ],
                "password" => [
                    "type" => "password",
                    "placeholder" => "Votre mot de passe ...",
                    "required" => true,
                    "class" => "input input-pink",
                    "id" => "pwdLogin",
                    "label" => "Mot de passe"
                ],
                "recaptcha" => [
                    "type" => "hidden",
                    "id" => "recaptcha-login-form",
                    "value" => KEY_SITE_RECAPTCHA
                ]
            ]
        ];
    }

    public function getPwdForgetForm (): array
    {
        return [
            "config" => [
                "id" => "pwd_forget_form",
                "method" => "POST",
                "action" => "/pwd-forget",
                "submit" => "Envoyer",
                "class" => "col a-center p-8 w-per-20 g-5 br-3",
            ],
            'inputs' => [
                "email" => [
                    "type" => "email",
                    "placeholder" => "Votre email ...",
                    "required" => true,
                    "class" => "input input-pink",
                    "id" => "emailLogin",
                    "label" => "Email",
                    "error" => "Email incorrect"
                ],
            ]
        ];
    }

    public function getModifyPasswordForm ($token): array
    {
        return [
            "config" => [
                "id" => "modify_password_form",
                "method" => "POST",
                "action" => $token ? "/modify-password?token=" . $token : "/modify-password",
                "submit" => "Envoyer",
                "class" => "col a-center px-8 pt-8 pb-4 w-per-20 g-5 br-3",
            ],
            'inputs' => [
                "password" => [
                    "type" => "password",
                    "placeholder" => "Votre mot de passe ...",
                    "required" => true,
                    "class" => "input input-pink",
                    "id" => "pwdForm",
                    "label" => "Mot de passe",
                    "error" => "Votre mot de passe doit faire au min 8 caractères avec majuscule, minuscules et des chiffres",
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
                ]
            ]
        ];
    }
}