<?php

namespace App\Model;

use App\Core\Sql;

class Article extends Sql
{
    protected $id = null;
    protected $title;
    protected $content;
    protected $description;
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

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(?string $description): void
    {
        $this->description = $description;
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

    public function formatList(): array
    {
        return [
            "title" => "Les Articles",
            "search" => "Rechercher un article",
            "columns" => ["Titre" , "Description", "Créer le"]
              
        ];
    }

    public function formatArticleById(int $id): array
    {
        return [          
            "article" => [
                "args" => ["id", "title", "description"],
                "params" => ["id" => $id],
            ],
                            
        ];
    }

    public function getArticleForm(): array
    {
        return [
            "config" => [
                "id" => "articleForm",
                "method" => "POST",
                "action" => "/create-recette",
                "submit" => "Publier",
                "class" => "col a-center py-4 w-per-20 px-8",
                "enctype" => "multipart/form-data",

            ],
            'inputs' => [
                "title" => [
                    "type" => "text",
                    "placeholder" => "Votre Titre",
                    "required" => true,
                    "class" => "input input-pink",
                    "id" => "title",
                    "label" => "Titre",
                    "error" => "Mauvais Titre"
                ],
                "description" => [
                    "type" => "text",
                    "placeholder" => "Description de votre recette",
                    "required" => true,
                    "class" => "input input-pink",
                    "id" => "description",
                    "label" => "Description"
                ],
                "ingredient[]" => [
                    "type" => "select",
                    "placeholder" => "Liste Des Ingredients",
                    "required" => true,
                    "class" => "input input-pink",
                    "id" => "ingredient",
                    "label" => "Ingredients",
                    "options" => "['Salade', 'Tomate', 'Oignons']"
                ],
                "photo[]" => [
                    "type" => "file",
                    "multiple" => true,
                    "placeholder" => "Vos Photos",
                    "required" => true,
                    "class" => "input input-pink",
                    "id" => "photo",
                    "label" => "Photos",
                ],
                "article" => [
                    "type" => "wysiwyg",
                    "required" => true,
                    "id" => "article",
                    "class" => "p-8 card",
                    "label" => "Article",
                ]
            ]
        ];
    }
}