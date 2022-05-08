<?php
namespace App\Model;

use App\Core\Sql;

class Category extends Sql {

    private $id = null;
    protected $name;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }
}