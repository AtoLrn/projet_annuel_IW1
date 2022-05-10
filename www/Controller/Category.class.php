<?php

namespace App\Controller;

use App\Core\View;
use App\Model\Category as CategoryModel;

class Category
{

    public function categories(): void
    {
        $categories = new CategoryModel();

        if(!empty($_POST['name'])) {
            $categories->setName($_POST['name']);
            $categories->save();
        }

        if(!empty($_GET['edit']) && is_numeric($_GET['edit'])) {
            $categories = $categories->setId($_GET['edit']);
        }

        $view = new View("categories", "back");
        $view->assign("categories", $categories);
        $view->assign("categoriesList", $categories->select([
            "category" => [
                "args" => ["id", "name"],
                "params" => []
            ]
        ]));

    }  
    
    public function deleteCategoryById(): void
    {
        $categories = new CategoryModel();

        print_r($_GET['id']);

        if(!empty($_GET['id']) && is_numeric($_GET['id'])) {
            $categories = $categories->setId($_GET['id']);
            $categories->delete();
        }

        header('location: /categories');
    }
}