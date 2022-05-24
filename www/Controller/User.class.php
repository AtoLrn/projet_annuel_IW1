<?php

namespace App\Controller;

use App\Core\CleanWords;
use App\Core\Mail;
use App\Core\Verificator;
use App\Core\Sql;
use App\Core\View;
use App\Core\Server;
use App\Model\Certification as CertificationModel;
use App\Model\User as UserModel;
use App\Model\Session;


class User
{
    public function login(UserModel $user, array $post): ?string
    {
        if (!empty($post)) {
            $loggedUser = $user->select(
                [
                    "user" => [
                        "args" => ["id", "password", "isVerified"],
                        "params" => ["email" => $_POST['email']],
                    ]
                ]
            );
            if (!empty($loggedUser)) {
                if ($loggedUser[0]['user_isVerified'] != 1) {
                    return 'Ce mail n\'est pas vérifié';
                }

                if (password_verify($_POST['password'], $loggedUser[0]['user_password'])) {

                    $user = $user->setId($loggedUser[0]['user_id']);

                    $session = new Session();
                    $session->generateToken();
                    $session->setUserId($user->getId());
                    $session->save();

                    if ($_GET["uri"]) {
                        header("Location: " . $_GET["uri"]);
                    } else {
                        header("Location: /");
                    }
                }
                    
            }
            return 'identifiants incorrects';
        }
        return "formulaire absent";
    }

    public function register(UserModel $user, array $post): array
    {
        if (!empty($post)) {

            $result = Verificator::checkForm($user->getRegisterForm(), $post);
            if ($user->select(
                [
                    "user" => [

                        "args" => ["id", "password"], "params" => ["email" => $post['email']]
                    ]
                ]
            )) {
                $result["email"][] = 'Ce mail est deja utilisé';
            }
            if (empty($result)) {

                $user->setFirstname($post['firstname']);
                $user->setLastname($post['lastname']);
                $user->setEmail($post['email']);
                $user->setPassword($post['password']);
                $user->generateMailToken();
                $id = $user->save();

                $user = $user->setId($id);

                $session = new Session();
                $session->generateToken();
                $session->setUserId($id);
                $session->save();

                $mail = Mail::getInstance();
                $mail->mailValidation($post['email'], $post['firstname'], $post['lastname'], $user->getMailToken());
            }
            return $result;
        }
        return ['server' => 'form invalid'];
    }

    public function register_login(){
        $user = new UserModel();
        $isCreated = false;
        $errorMessage = null;
        $view = new View("register-login", 'front');
        $view->assign("user", $user);

        if (!empty($_POST) ) {
            $validRecaptcha = Verificator::checkRecaptcha($_POST['recaptcha']);
            if ($validRecaptcha && $_GET["form"] !== null) {
                if ($_GET["form"] == "login") {
                    $response = $this->login($user, $_POST);
                    if (!empty($response)) {
                        $view->assign('errorMessage', ['login' => $response]);
                    }
                } else if ($_GET["form"] == "register") {
                    $response = $this->register($user, $_POST);
                    if (!empty($response)) {
                        $view->assign('errorMessage', $response);
                    } else {
                        $isCreated = $response;
                        $view->assign('isCreated', $isCreated);
                    }
                }
            }
            if(!$validRecaptcha) {
                $view->assign("errorMessage", ['server' => 'une erreur est survenu.']);
            }
        }
    }

    public function mailValidation()
    {
        $user = new UserModel();
        $view = new View("mail-validation", 'front');
        if ($_GET['token']) { // Faire une sécu ic!!!!!!!!!
            $tokenIsExist = $user->select(
                [
                    "user" => [
                        "args" => ["id"],
                        "params" => ["mailToken" => $_GET['token']]
                    ]
                ]
            );
            if (!empty($tokenIsExist)) {
                $user = $user->setId($tokenIsExist[0]['user_id']);
                $user->setIsVerified(1);
                $user->save();
                $view->assign('validationStatus', true);
                return;
            }
        }

        $view->assign('validationStatus', false);
    }

    public function logout()
    {
        session_destroy();     
        header('location: /');
    }


    public function pwdforget()
    {
        echo "Mot de passe oublié";
    }


    // -------------- API calls ------------- //

    public function getUserById()
    {
        $content = file_get_contents('php://input');
        $_POST = json_decode($content, true);
        Server::ensureHttpMethod('POST');

        $id = $_POST['id'] ?? null;
        $user = new UserModel();
        $listTpl = $user->formatUserById();
        $listTpl['user']['params']['id'] = $id;
        $result = $user->select($listTpl);
        if($result) {
            http_response_code(200);
            header('Content-Type: application/json; charset=utf-8');
            echo json_encode($result);
        }else {
            http_response_code(500);
        }

        
    }


    public function getUsers()
    {
        Server::ensureHttpMethod('GET');
        $getParams = isset($_GET['params']) ? json_decode($_GET['params']) : null;
        $user = new UserModel();
        $result = $user->select(
            [
                "user" => [
                    "args" => ["id", "email", "lastname", "firstname", "status", "createdAt"],
                    "params" => is_array($getParams) ? [$getParams[0] => ['value' => $getParams[1], 'operator' => $getParams[2]]] : []
                ],
                
            ]
        );
        if($result) {       
            header('Content-Type: application/json; charset=utf-8');
            echo json_encode($result);
            http_response_code(200);
        }else {
            http_response_code(500);
        }
    
    }


    public function deleteUserById()
    {
        $content = file_get_contents('php://input');
        $_POST = json_decode($content, true);
        Server::ensureHttpMethod('DELETE');

        $id = $_GET['id'] ?? null;
        if($id === null) {
            http_response_code(400);
            die();
        }

        $user = new UserModel();
        $user = $user->setId($id);
        if($user === null) {
            http_response_code(404);
            die();
        }
        $result = $user->delete();
        if($result) {
            http_response_code(200);
        }else {
            http_response_code(500);
        }
    }

}