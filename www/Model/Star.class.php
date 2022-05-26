<?php
namespace App\Model;

use App\Core\Sql;

class Star extends Sql {

    protected $id = null;
    protected $score;
    protected $userId;
    protected $articleId;

    public function __construct()
    {
        parent::__construct();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getScore(): string
    {
        return $this->score;
    }

    public function setScore(string $score): void
    {
        $this->score = $score;
    }

    public function setUserId(int $userId): void
    {
        $this->userId = $userId;
    }

    public function setArticleId(int $articleId): void
    {
        $this->articleId = $articleId;
    }


}