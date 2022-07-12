<?php

namespace App\Model;

use App\Core\Sql;

class Page extends Sql
{
    protected $id = null;
    protected $userId = null;
    protected $title;
    protected $content;
    protected $path;

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
     * @return int
     */
    public function getUserId(): int
    {
        return $this->userId;
    }

    /**
     * @param int $userId
     */
    public function setUserId(int $userId): void
    {
        $this->userId = $userId;
    }

    /**
     * @return string
     */
    public function getTitle(): string
    {
        return $this->title;
    }

    /**
     * @param string $title
     */
    public function setTitle(string $title): void
    {
        $this->title = $title;
    }

    /**
     * @return string
     */
    public function getContent(): string
    {
        return $this->content;
    }

    /**
     * @param string $content
     */
    public function setContent(string $content): void
    {
        $this->content = $content;
    }

    /**
     * @return string
     */
    public function getPath(): string
    {
        return $this->path;
    }

    /**
     * @param string $path
     */
    public function setPath(string $path): void
    {
        $this->path = $path;
    }

    public function getPageForm(?bool $edit = false): array
    {
        return [
            "config" => [
                "id" => "articleForm",
                "method" => "POST",
                "action" => $edit ? "/page/edit?id=$this->id" : "/create-page",
                "submit" => $edit ? "Éditer" : "Publier",
                "class" => "col a-center py-4 w-per-20 px-8",
                "enctype" => "multipart/form-data",

            ],
            'inputs' => [
                "title" => [
                    "type" => "text",
                    "placeholder" => "Entrez votre titre",
                    "required" => true,
                    "class" => "input input-pink",
                    "id" => "title",
                    "label" => "Titre",
                    "value" => $this->title ?? "",
                    "error" => "Mauvais Titre"
                ],
                "slug" => [
                    "type" => "text",
                    "placeholder" => "Entrez votre titre",
                    "class" => "input input-pink",
                    "id" => "slug",
                    "label" => "Page Slug",
                    "value" => $this->path ?? "",
                    "error" => "Mauvais Titre"
                ],
                "content" => [
                    "readOnly" => "false",
                    "type" => "wysiwyg",
                    "required" => true,
                    "id" => "content",
                    "class" => "p-8 card",
                    "label" => "Content",
                    "value" => $this->content ?? null
                ]
            ]
        ];
    }

    public function formatList(): array
    {
        return [
            "title" => "Liste des pages créé",
            "search" => "Rechercher une page",
            "columns" => ["Titre", "Path", "Auteur"]

        ];
    }


}
