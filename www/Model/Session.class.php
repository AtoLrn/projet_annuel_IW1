<?php

namespace App\Model;

use App\Core\Sql;

class Session extends Sql
{
    protected $id = null;
    protected $token = null;
    protected $expiration;
    protected $userId = null;

    public function __construct()
    {
        parent::__construct();
        $this->expiration = date('Y-m-d H:i:s');
    }

    public function getId(): ?int
    {
        return $this->id;
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
        $_SESSION['token'] = $this->token;
    }


    public function getExpiration(): ?string
    {
        return $this->expiration;
    }

    public function setExpiration(?string $expiration): void
    {
        $this->expiration = $expiration;
    }

    public function getUserId(): ?string
    {
        return $this->userId;
    }

    public function setUserId(?string $userId): void
    {
        $this->userId = $userId;
    }

    public static function getByToken(): ?Session
    {
        $session = new Session();
        $token = $_SESSION['token']??"";
        $res = $session->select2('session', ["id", "token", "expiration", "userId"])
            ->where('token', $token)
            ->fetch();
        
        if (!empty($res->id)) {
            return $res;
        }
        return null;
    }
}