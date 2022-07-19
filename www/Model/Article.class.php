<?php

namespace App\Model;

use App\Core\Sql;
use App\Model\User;

class Article extends Sql
{
    protected $id = null;
    protected $title;
    protected $content;
    protected $description;
    protected $categoryId = null;
    protected $userId = null;  
    private $observerUsers = [];


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
        $this->title = strtolower(trim(htmlspecialchars($title)));
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
        $this->description = htmlspecialchars($description);
    }

    public function getUserId(): ?string
    {
        return $this->userId;
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

    public function addObserver(User $user)
    {
        $this->observerUsers[$user->getId()] = $user;
    }

    public function removeObserver(User $user) {
        unset($this->observerUsers[$user->id]);
    }

    public function notify() {
        $chief = new User();
        $chief = $chief->setId($this->getUserId());
        foreach($this->observerUsers as $user) {
            $user->sendEmailNotification($this, $chief);
        }
    }

    public function formatList(): array
    {
        return [
            "title" => "Les Articles",
            "search" => "Rechercher un article",
            "columns" => ["Titre" , "Description", "Créer le"]
              
        ];
    }


    public function getOrderType(string $key): array
    {
        $orders = [
            'date_desc' => ['val' => 'createdAt', 'order' => 'DESC'],
            'date_asc' => ['val' => 'createdAt', 'order' => 'ASC'],
            'like_desc' => ['val' => 'note', 'order' => 'DESC'],
            'like_asc' => ['val' => 'note', 'order' => 'ASC']
        ];

        return $orders[$key] ?? $orders['date_desc'];
    }

    public function getArticleForm(?bool $edit = false): array
    {
        $ingredient = new Ingredient();

        $enabledIngredients = $ingredient->select('ingredient', ['name'])
            ->where('status', 'enabled')
            ->fetchAll();

        $options = array_map(function($elem) {
            return '\''.$elem->getName().'\'';
        },$enabledIngredients);

        $options = '['.implode(',', $options).']';

        $defaultSelected = "";

        if ($edit) {
            $ingredients = $ingredient->select('ingredient', ['ingredient_article.id', 'name'])
                ->leftJoin('ingredient_article', 'ingredient_article.ingredientId', 'ingredient.id')
                ->where('ingredient_article.articleId', $this->getId())
                ->fetchAll();
            $defaultSelected =  implode(",", array_map(function($v) {
                return $v->getName();
            },$ingredients)); 
        }

        return [
            "config" => [
                "id" => "articleForm",
                "method" => "POST",
                "action" => $edit ? "/recette/edit?id=$this->id" : "/create-recette",
                "submit" => $edit ? "Mettre à Jour" : "Publier",
                "class" => "col a-center py-4 w-per-20 px-8 g-5",
                "labels" => "small",
                "enctype" => "multipart/form-data",
                "classSubmit" => "btn btn-pink px-20",

            ],
            'inputs' => [
                "title" => [
                    "value" => $this->title ?? "",
                    "type" => "text",
                    "placeholder" => "Votre Titre",
                    "required" => true,
                    "class" => "input input-pink",
                    "id" => "title",
                    "label" => "Titre",
                    "error" => "Mauvais Titre"
                ],
                "description" => [
                    "value" => $this->description ?? "",
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
                    "options" => $options,
                    "value" => $defaultSelected
                ],
                "photo[]" => [
                    "type" => "file",
                    "accept" => 'accept=image/*',
                    "multiple" => true,
                    "placeholder" => "Vos Photos",
                    "required" => true,
                    "class" => "input input-pink",
                    "id" => "photo",
                    "label" => "Photos",
                    "preview" => true,
                    "selectable" => true
                ],
                "article" => [
                    "value" => $this->content ?? null,
                    "readOnly" => "false",
                    "type" => "wysiwyg",
                    "required" => true,
                    "id" => "article",
                    "class" => "p-8 card writer",
                    "label" => "Contenu de la recette",
                ]
            ]
        ];
    }
}