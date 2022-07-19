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
    protected $enable;
    protected $footer;
    protected $createdAt;
    protected $updatedAt;

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
    public function getEnabled(): bool
    {
        return $this->enable;
    }

    /**
     * @param int $userId
     */
    public function setEnabled(bool $enable): void
    {
        $this->enable = $enable ? 1 : 0;
    }

    /**
     * @return int
     */
    public function getDisplayOnFooter(): bool
    {
        return $this->footer;
    }

    /**
     * @param int $userId
     */
    public function setDisplayOnFooter(bool $footer): void
    {
        $this->footer = $footer ? 1 : 0;
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
        $this->title = htmlspecialchars($title);
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
        $this->content = htmlspecialchars($content);
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
        $this->path = htmlspecialchars($path);
    }

    /**
     * @return string
     */
    public function getCreatedAt(): string
    {
        return $this->createdAt;
    }

    /**
     * @param string $createdAt
     */
    public function setCreatedAt(string $createdAt): void
    {
        $this->createdAt = $createdAt;
    }

    /**
     * @return string
     */
    public function getUpdatedAt(): string
    {
        return $this->updatedAt;
    }

    /**
     * @param string $updatedAt
     */
    public function setUpdatedAt(string $updatedAt): void
    {
        $this->updatedAt = $updatedAt;
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
                "enable" => [
                    "type" => "checkbox",
                    "placeholder" => "Activer la page",
                    "class" => "input input-pink a-self-start",
                    "id" => "slug",
                    "label" => "Activer la page",
                    "checked" => $this->enable ?? "false"
                ],
                "footer" => [
                    "type" => "checkbox",
                    "placeholder" => "Afficher dans le Footer",
                    "class" => "input input-pink a-self-start",
                    "id" => "slug",
                    "label" => "Afficher dans le Footer",
                    "checked" => $this->footer ?? "false"
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
