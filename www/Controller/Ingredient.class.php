<?php

namespace App\Controller;

use App\Core\Middleware\Security;
use App\Core\Server;
use App\Core\View;
use App\Model\Session;
use App\Model\User as UserModel;
use App\Model\Ingredient as IngredientModel;

class Ingredient
{
    private function sendIngredientRequest(IngredientModel $ingredientDemand, int $id)
    {
        $file = $_FILES['ingredientImage'];
        $uploadsDir = 'assets/img/ingredient-images/';
        $ingredientName = trim($_POST['ingredientName']);
        if ($_FILES['ingredientImage']['error'] === UPLOAD_ERR_OK) {
            $randomFileName = uniqid();
            $type = explode('.', basename($file['name']));
            $type = end($type);
            $fileName = $randomFileName . "_" . $ingredientName . '.' . $type;
            move_uploaded_file($file['tmp_name'], $uploadsDir . $fileName);
            $ingredientDemand->setPath($uploadsDir . $fileName);
        } else {
            die('Error with uploaded files');
        }

        $ingredientDemand->setName($ingredientName);
        $ingredientDemand->setUserId($id);

        return $ingredientDemand->save();
    }

    
    public function ingredientRequest()
    {
        $view = new View("ingredient-request", "front");
        $isRequestCreated = false;
        $session = Session::getByToken();
        $ingredientDemand = new IngredientModel();
        $isDemandExist = $ingredientDemand->select2('ingredient', ['id'])
            ->where('userId', $session->getUserId())
            ->where('status', 'inDemand')
            ->fetchAll();       
        
        if(count($isDemandExist) == 0) {

            if (!empty($_POST)) {
                Security::csrf();
                $isRequestCreated = $this->sendIngredientRequest($ingredientDemand, $session->getUserId());
                $view->assign("isRequestCreated", $isRequestCreated);

            }
            $view->assign("ingredient", $ingredientDemand);
        }else {
            $view->assign("demandAlreadyExist", true);
        }   
    }

    // -------------- API calls ------------- //

    public function getIngredients()
    {
        Server::ensureHttpMethod('GET');
        $ingredients = new IngredientModel();

        $result = $ingredients->select2('ingredient', ['ingredient.id AS id', 'name', 'ingredient.status AS status', 'ingredient.createdAt as createdAt', 'email'])
            ->innerJoin('user', 'user.id', 'ingredient.userId')
            ->fetchAll();

        if($result) {
            http_response_code(200);
            header('Content-Type: application/json; charset=utf-8');
            echo json_encode($result);
        }else {
            http_response_code(500);
        }
    }

    public function getIngredientById()
    {
        $content = file_get_contents('php://input');
        $_POST = json_decode($content, true);
        Server::ensureHttpMethod('POST');

        $id = $_POST['id'] ?? null;
        $ingredients = new IngredientModel();

        $result = $ingredients->select2('ingredient', ['ingredient.id AS id', 'name', 'path', 'ingredient.status AS status', 'ingredient.createdAt as createdAt', 'user.id AS userId', 'email', 'firstname', 'lastname'])
            ->innerJoin('user', 'user.id', 'ingredient.userId')
            ->where('ingredient.id', $id)
            ->fetch();


        if($result) {
            http_response_code(200);
            header('Content-Type: application/json; charset=utf-8');
            echo json_encode($result);
        }else {
            http_response_code(500);
        }
    }

    public function modifyIngredientStatus()
    {
        $content = file_get_contents('php://input');
        $_POST = json_decode($content, true);
        Server::ensureHttpMethod('PUT');

        $ingredientId = $_POST['ingredient_id'] ?? null;
        $ingredientStatus = $_POST['ingredient_status'] ?? null;
        if (is_null($ingredientId) && is_null($ingredientStatus)) {
            http_response_code(406);
            die();
        }

        $ingredient = new IngredientModel();
        try {
            $ingredient = $ingredient->setId($ingredientId);
            $ingredient->setStatus($ingredientStatus);
            $ingredient->save();
        } catch (\Exception $e) {
            http_response_code(500);
        }
    }
}
