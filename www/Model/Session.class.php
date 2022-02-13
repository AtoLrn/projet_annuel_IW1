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

    public static function getByToken(string $token): ?Session
    {
        $session = new Session();
        $res = $session->select([
            "session" => [
                "args" => ["id", "token", "expiration", "userId"],
                "params" => ["token" => $token]
            ]
        ]);
        if (!empty($res)) {
            return $session->setId($res[0]['session_id']);
        }
        return null;
    }
}