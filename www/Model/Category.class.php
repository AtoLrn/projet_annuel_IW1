<?php
namespace App\Model;

use App\Core\Sql;

class Category extends Sql {

    private $id = null;
    protected $name = "";

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): void
    {
        $this->name = strtolower(trim($name));
    }

    public function checkExist(): ?array
    {
        if(!is_null($this->getId())) {
            return $this->select([
                "category" => [
                    "args" => ["id"],
                    "params" => [
                        "name" => [ "value" => $this->getName(), "operator" => "="],
                        "id" => [ "value" => $this->getId(), "operator" => "!="]
                        ]
                ]
            ]);
        }

        return  $this->select([
            "category" => [
                "args" => ["id"],
                "params" => ["name" => $this->getName()]
            ]
        ]);
        
    }

    public function getForm(?int $id = null): array
    {
        return [
            "config" => [
                "id" => "categoryForm",
                "method" => "POST",
                "action" => "/categories",
                "submit" => (!is_null($id) ? "Modifier" : "Ajouter"),
                "class" => "grid row a-s",
                "classContInputs" => "",
                "classSubmit" => "btn btn-pink py-1 px-3",
                "container-inputs" => "col-lg-2"

            ],
            'inputs' => [
                "name" => [
                    "type" => "text",
                    "placeholder" => "Nom de la categorie",
                    "required" => true,
                    "class" => "input input-pink w-per-20",
                    "id" => "name",
                    "error" => "Nom incorrect",
                    "unicity" => "true",
                    "errorUnicity" => "Ce nom est deja utilisé",
                    "value" => $this->getName(),
                    "maxLength" => 32
                ],
                "editId" => [
                    "value" => $id,
                    "type" => "hidden"
                ],

             ]
        ];
    }


}