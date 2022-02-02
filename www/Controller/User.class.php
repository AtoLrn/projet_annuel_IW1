<?php
namespace App\Controller;

use App\Core\CleanWords;
use App\Core\Verificator;
use App\Core\Sql;
use App\Core\View;
use App\Model\User as UserModel;

class User {

    public function login()
    {
        $user = new UserModel();
        if (!empty($_POST)){
            /*$result = Verificator::checkForm($user->getLoginForm(), $_POST);
            if (empty($result)){*/
                $loggedUser = $user->select(['id','password'],[
                    'email' => $_POST['email']
                ]);

                if (!empty($loggedUser)){
                    if (password_verify($_POST['password'], $loggedUser[0]['password'])){
                        $user = $user->setId($loggedUser[0]['id']);
                        $user->generateToken();

                        $_SESSION['token'] = $user->getToken();
                        $user->save();
                        header("Location: /");
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
            if ($user->select(['id'],['email' => $_POST['email']]))
            {
                $result[] = 'This email already exist';
            }
            if (empty($result)) {

                $user->setFirstname($_POST['firstname']);
                $user->setLastname($_POST['lastname']);
                $user->setEmail($_POST['email']);
                $user->setPassword($_POST['password']);
                $user->generateToken();

                $id = $user->save();
                $user = $user->setId($id);

                $_SESSION['token'] = $user->getToken();
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