<?php
namespace App\Controller;

use App\Core\CleanWords;
use App\Core\Mail;
use App\Core\Verificator;
use App\Core\Sql;
use App\Core\View;
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
                    if (password_verify($_POST['password'], $loggedUser[0]['password'])){
                        $user = $user->setId($loggedUser[0]['id']);

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
                        "args" => ["id", "password"],
                        "params" => ["email" => $_POST['email'] ]
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

}