<?php
namespace App\Model;

use App\Core\Sql;

class Follow extends Sql {

    private $id = null;
    protected $isFollowed = null;
    protected $follower = null;
    protected $notification = 0;

    public function __construct()
    {
        parent::__construct();
    }


    public function getId(): ?int
    {
        return $this->id;
    }

    public function getIsFollowed(): ?int
    {
        return $this->isFollowed;
    }

    public function setIsFollowed(int $isFollowed): void
    {
        $this->isFollowed = $isFollowed;
    }

    public function getFollower(): ?int
    {
        return $this->follower;
    }

    public function setFollower(int $follower): void
    {
        $this->follower = $follower;
    }

    public function getNotification(): ?int
    {
        return $this->notification;
    }

    public function setNotification(int $notification): void
    {
        $this->notification = $notification;
    }

}