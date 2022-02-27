<?php

namespace App\Controller;

use App\Core\CleanWords;
use App\Core\Mail;
use App\Core\Verificator;
use App\Core\Sql;
use App\Core\View;
use App\Core\Server;
use App\Model\User as UserModel;
use App\Model\Session;


class User
{
    public function login(UserModel $user, array $post): ?string
    {
        if (!empty($post)) {
            /*$result = Verificator::checkForm($user->getLoginForm(), $_POST);
            if (empty($result)){*/
            $loggedUser = $user->select(
                [
                    "user" => [
                        "args" => ["id", "password", "isVerified"],
                        "params" => ["email" => $_POST['email']],
                    ]
                ]
            );
            if (!empty($loggedUser)) {
                if ($loggedUser[0]['user_isVerified']) {

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
                return 'Ce mail n\'est pas vérifié';
            }
            return 'identifient incorrect';
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
                $result[] = 'This email already exist';
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
                return [1];
            }
            return $result;
        }
        return ['formulaire absent'];
    }

    public function register_login(){
        $user = new UserModel();
        $isCreated = false;
        $errorMessage = null;
        $view = new View("register-login", 'front');

        if (!empty($_POST) ) {
            if ($_GET["formType"] !== null) {
                if ($_GET["formType"] === "login") {
                    $response = $this->login($user, $_POST);
                    $errorMessage = $response ?? null;
                } else if ($_GET["formType"] === "register") {
                    $response = $this->register($user, $_POST);
                    if (is_string($response[0])) {
                        $errorMessage = !empty($response) ? $response[0] : "un problème est survenu";
                    } else {
                        $isCreated = $response;
                    }
                }
            }
        }

        $view->assign('isCreated', $isCreated);
        $view->assign('errorMessage', $errorMessage);
        $view->assign("user", $user);
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
        echo "Se déco";
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
        }else {
            http_response_code(500);
        }

        header('Content-Type: application/json; charset=utf-8');
        echo json_encode($result);
    }


    public function getUsers()
    {
        Server::ensureHttpMethod('GET');
        $user = new UserModel();
        $result = $user->select(
            [
                "user" => [
                    "args" => ["id", "email", "lastname", "firstname", "status"],
                    "params" => [],
                ]
            ]
        );
        if($result) {
            http_response_code(200);
        }else {
            http_response_code(500);
        }

        header('Content-Type: application/json; charset=utf-8');
        echo json_encode($result);
    }

}