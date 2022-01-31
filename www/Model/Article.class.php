<?php

namespace App\Model;

use App\Core\Sql;

class Article extends Sql
{
    protected $id = null;
    protected $title;
    protected $content;
    protected $categoryId = null;
    protected $userId = null;

    public function __construct()
    {
        parent::__construct();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(string $title): void
    {
        $this->title = strtolower(trim($title));
    }

    public function getContent(): ?string
    {
        return $this->content;
    }

    public function setContent(?string $content): void 
    {
        $this->content = $content;
    }

    public function getUserId(): ?string
    {
        return $this->content;
    }

    public function setUserId(?string $userId): void 
    {
        $this->userId = $userId;
    }

    public function getCategoryId(): ?string
    {
        return $this->categoryId;
    }

    public function setCategoryId(?string $categoryId): void 
    {
        $this->categoryId = $categoryId;
    }

    public function getArticleForm(): array
    {
        return [
            "config" => [
                "method" => "POST",
                "action" => "",
                "submit" => "Publier"
            ],
            'inputs' => [
                "title" => [
                    "type" => "text",
                    "placeholder" => "Titre",
                    "required" => true,
                    "class" => "input-form",
                    "id" => "titre-form",
                    "error" => "Titre entre 3 et 100 caractères",
                ],
                "content" => [
                    "type" => "text",
                    "placeholder" => "Votre contenu ...",
                    "required" => true,
                    "class" => "input-form",
                    "id" => "content-article",
                    "error" => "votre contenu ne doit pas être vide",
                ],
                
            ]
        ];
    }





    


}