<?php

namespace App\Controller;

use App\Core\Server;
use App\Core\View;
use App\Model\Session;
use App\Model\User as UserModel;
use App\Model\Ingredient as IngredientModel;

class Ingredient
{
    private function sendIngredientRequest(IngredientModel $ingredientDemand, UserModel $user)
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
        $ingredientDemand->setUserId($user->getId());

        return $ingredientDemand->save();
    }
    public function ingredientRequest()
    {
        $user = new UserModel();
        $view = new View("ingredient-request", "front");
        $isRequestCreated = false;
        if (!empty($_SESSION["token"])) {
            $session = Session::getByToken();
            if ($session !== null){
                $view->assign("connectedUser", true);
                $user = $user->setId($session->getUserId());
                $ingredientDemand = new IngredientModel();
                $isDemandExist = $ingredientDemand->select([
                    "ingredient" => [
                        "args" => ["id"],
                        "params" => [
                            "userId" => $user->getId(),
                            "status" => 'inDemand'
                        ]
                    ]
                ]);
                if (empty($isDemandExist)) {
                    $view->assign("demandAlreadyExist", true);
                    if (!empty($_POST)) {
                        $isRequestCreated = $this->sendIngredientRequest($ingredientDemand, $user);
                    }
                    $view->assign("isRequestCreated", $isRequestCreated);
                    $view->assign("ingredient", $ingredientDemand);
                    return;
                }
                $view->assign("demandAlreadyExist", false);
                return;
            }
        }
        $view->assign("connectedUser", false);
    }

    // -------------- API calls ------------- //

    public function getIngredients()
    {
        Server::ensureHttpMethod('GET');
        $ingredients = new IngredientModel();
        $result = $ingredients->select([
            "user" => [
                "args" => ["email"],
                "ij" => ["ingredient"]
            ],
            "ingredient" => [
                "args" => ["id", "name", "status", "createdAt"],
            ]
        ]);
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
        $result = $ingredients->select([
            "user" => [
                "args" => ["id", "email", "firstname", "lastname"],
                "ij" => ["ingredient"]
            ],
            "ingredient" => [
                "args" => ["id", "name", "path", "status", "createdAt"],
                "params" => ["id" => $id]
            ]
        ]);
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
