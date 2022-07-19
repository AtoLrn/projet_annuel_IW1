<?php

namespace App\Model;

use App\Core\Sql;

class Ingredient extends Sql
{
    protected $id = null;
    protected $name;
    protected $path;
    protected $status = "inDemand";
    protected $createdAt;
    protected $userId;

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
     * @return string
     */
    public function getName(): string
    {
        return $this->name;
    }

    /**
     * @param string $name
     */
    public function setName(string $name): void
    {
        $this->name = htmlspecialchars($name);
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

    /**
     * @return string
     */
    public function getStatus(): string
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

    /**
     * @return string
     */
    public function getCreatedAt(): string
    {
        return $this->createdAt;
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

    public function getIngredientRequestForm(): array
    {
        return [
            "config" => [
                "method" => "POST",
                "action" => "",
                "enctype" => "multipart/form-data",
                "submit" => "Envoyer",
                "class" => "col g-6 a-center w-per-20",
                "classContInputs" => "col j-bet g-1 w-per-20",
                "labels" => "small"
            ],
            "inputs" => [
                "ingredientName" => [
                    "type" => "text",
                    "placeholder" => "Entrez le nom de votre ingrédient",
                    "required" => true,
                    "label" => "Nom de l'ingrédient",
                    "class" => "input input-pink",
                ],
                "ingredientImage" => [
                    "type" => "file",
                    "required" => true,
                    "label" => "Photo de l'ingrédient"
                ]
            ]
        ];
    }

    public function formatList(): array
    {
        return [
            "title" => "Liste des demande de nouvel Ingrédient",
            "search" => "Rechercher une demande",
            "columns" => ["Mail", "Name", "Statut", "Date"]
        ];
    }
}
