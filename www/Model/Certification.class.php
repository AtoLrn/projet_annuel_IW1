<?php

namespace App\Model;

use App\Core\Sql;

class Certification extends Sql
{
    protected $id = null;
    protected $description;
    protected $idDocumentPath;
    protected $officialDocumentPath;
    protected $status = "inDemand";
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
    public function getDescription(): string
    {
        return $this->description;
    }

    /**
     * @param string $description
     */
    public function setDescription(string $description): void
    {
        $this->description = $description;
    }

    /**
     * @return string
     */
    public function getIdDocumentPath(): string
    {
        return $this->idDocumentPath;
    }

    /**
     * @param string $idDocumentPath
     */
    public function setIdDocumentPath(string $idDocumentPath): void
    {
        $this->idDocumentPath = $idDocumentPath;
    }

    /**
     * @return string
     */
    public function getOfficialDocumentPath(): string
    {
        return $this->officialDocumentPath;
    }

    /**
     * @param string $officialDocumentPath
     */
    public function setOfficialDocumentPath(string $officialDocumentPath): void
    {
        $this->officialDocumentPath = $officialDocumentPath;
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

    public function formatList(): array
    {
        return [
            "title" => "Liste des demande de certification",
            "search" => "Rechercher une demande",
            "columns" => ["Mail", "Statut", "Date"]

        ];
    }


}