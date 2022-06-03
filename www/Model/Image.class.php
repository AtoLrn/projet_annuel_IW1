<?php

namespace App\Model;

use App\Core\Sql;

class Image extends Sql
{
    protected $id = null;
    protected $articleId = null;
    protected $path = null;

    public function __construct()
    {
        parent::__construct();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    /**
     * @return null|int
     */
    public function getArticleId(): ?int
    {
        return $this->articleId;
    }

    public function setArticleId(?int $articleId): void
    {
        $this->articleId = $articleId;
    }

    public function getPath(): ?string
    {
        return $this->path;
    }

    public function setPath(?string $path): void
    {
        $this->path = $path;
    }

    public function getMain(): ?int
    {
        return $this->main;
    }

    public function setMain(?int $main): void
    {
        $this->main = $main;
    }


}