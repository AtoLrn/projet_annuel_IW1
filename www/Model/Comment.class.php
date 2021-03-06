<?php

namespace App\Model;

use App\Core\Sql;

class Comment extends Sql
{
    protected $id = null;
    protected $content;
    protected $userId = null;
    protected $articleId = null;
    protected $status = 'inDemand';

    /**
     * @return null|int
     */
    public function getId(): ?int
    {
        return $this->id;
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
        $this->content = trim(htmlspecialchars($content));
    }

    /**
     * @return int
     */
    public function getUserId(): ?int
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
     * @return int
     */
    public function getArticleId(): ?int
    {
        return $this->articleId;
    }

    /**
     * @param int $articleId
     */
    public function setArticleId(int $articleId): void
    {
        $this->articleId = $articleId;
    }

    /**
     * @return string
     */
    public function getStatus(): ?string
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

    public function getCommentCreationForm($id): array
    {
        return [
            "config" => [
                "method" => "POST",
                "action" => "/create-comment",
                "enctype" => "multipart/form-data",
                "submit" => "Envoyer",
                "class" => "col a-center py-4 w-per-20 px-8 g-5"
            ],
            "inputs" => [
                "description" => [
                    "type" => "textarea",
                    "rows" => "10",
                    "cols" => "20",
                    "placeholder" => "Rentrez votre commentaire",
                    "required" => true,
                    "label" => "Commentaire",
                    "class" => "input h-per-20"
                ],
                "articleId" => [
                    "type" => "hidden",
                    "required" => true,
                    "value" => $id
                ]
            ]
        ];
    }

    public function formatList(): array
    {
        return [
            "title" => "Liste des commentaires",
            "search" => "Rechercher un commentaire",
            "columns" => ["Mail", "Statut", "Date"]

        ];
    }
}
