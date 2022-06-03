<?php

namespace App\Model;

use App\Core\Sql;

class IngredientArticle extends Sql
{
    protected $id = null;
    protected $ingredientId;
    protected $articleId;
    protected $quantity = "1";

    protected $tableSpecialName = "ingredient_article";

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
     * @return null|int
     */
    public function getArticleId(): ?int
    {
        return $this->articleId;
    }

    /**
     * @return null|int
     */
    public function getIngredientId(): ?int
    {
        return $this->ingredientId;
    }

    /**
     * @return null|int
     */
    public function getQuantity(): ?int
    {
        return $this->quantity;
    }

    /**
     * @return null|int
     */
    public function setArticleId(int $articleId): void
    {
        $this->articleId = $articleId;
    }

    /**
     * @return null|int
     */
    public function setIngredientId(int $ingredientId): void
    {
        $this->ingredientId = $ingredientId;
    }

    /**
     * @return null|int
     */
    public function setQuantity(int $quantity): void
    {
        $this->quantity = $quantity;
    }
    
}
