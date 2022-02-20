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



class User {

    public function login()
    {
        $user = new UserModel();
        if (!empty($_POST)){
            /*$result = Verificator::checkForm($user->getLoginForm(), $_POST);
            if (empty($result)){*/
                $loggedUser = $user->select(
                    [
                        "user" => [
                            "args" => ["id", "password"],
                            "params" => ["email" => $_POST['email'] ],
                        ]
                    ]
                );

                if (!empty($loggedUser)){
                    if (password_verify($_POST['password'], $loggedUser[0]['user_password'])){
                        $user = $user->setId($loggedUser[0]['user_id']);

                        $session = new Session();
                        $session->generateToken();
                        $session->setUserId($user->getId());
                        $session->save();

                        if ($_GET["uri"]) {
                            header("Location: ".$_GET["uri"]);

                        } else {
                            header("Location: /");
                        }

                    }
                    echo 'mot de passe incorrect';
                }
                echo 'identifient incorrect';
            /*}
            print_r($result);*/
        }
        $view = new View("Login", "front");
        $view->assign("user", $user);
    }

    public function register()
    {
        $user = new UserModel();

        if(!empty($_POST)){

            $result = Verificator::checkForm($user->getRegisterForm(), $_POST);
            if ($user->select(
                [
                    "user" => [
                        "args" => ["id", "password"], "params" => ["email" => $_POST['email'] ]
                    ]
                ])
            ) {
                $result[] = 'This email already exist';
            }
            if (empty($result)) {

                $user->setFirstname($_POST['firstname']);
                $user->setLastname($_POST['lastname']);
                $user->setEmail($_POST['email']);
                $user->setPassword($_POST['password']);

                $id = $user->save();
                $user = $user->setId($id);

                $session = new Session();
                $session->generateToken();
                $session->setUserId($id);
                $session->save();

                $mail = new Mail();
                $mail->mailConfirm($_POST['email'], $_POST['firstname'], $_POST['lastname']);
                header("Location: /");
            }
            print_r($result);

        }

        $view = new View("register", 'front');
        $view->assign("user", $user);
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