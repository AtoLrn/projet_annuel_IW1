<?php

namespace App\Controller;

use App\Core\View;
use App\Model\Category as CategoryModel;

class Category
{

    public function categories(): void
    {
        $categories = new CategoryModel();
        $view = new View("categories", "back");

        if(!empty($_POST['name'])) {

            if(is_numeric($_POST['editId'])) {
                $categories = $categories->setId($_POST['editId']);   
            }
            $categories->setName($_POST['name']);

            $result = $categories->checkExist();
            if(is_null($result) || empty($result)) {
                unset($_GET['edit']);
                $categories->save();
            }else {
                $view->assign("error", "Cette catégorie existe deja !");
            }
            $categories = new CategoryModel();
        }
        
        if(!empty($_GET['edit']) && is_numeric($_GET['edit'])) {
            $categories = $categories->setId($_GET['edit']);
        }

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

        if(!empty($_GET['id']) && is_numeric($_GET['id'])) {
            $categories = $categories->setId($_GET['id']);
            $categories->delete();
        }

        header('location: /categories');
    }
}