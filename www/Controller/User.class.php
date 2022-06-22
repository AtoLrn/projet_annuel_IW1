<?php

namespace App\Controller;

use App\Core\Mail;
use App\Core\Verificator;
use App\Core\View;
use App\Core\Server;
use App\Model\User as UserModel;
use App\Model\Article as ArticleModel;
use App\Model\Session;


class User
{
    public function login(UserModel $user): ?string
    {
        if (!empty($_POST)) {
            $loggedUser = $user->select2('user', ["*"])
                ->where('email', $_POST['email'])
                ->fetch();
            if (!empty($loggedUser)) {
                if ($loggedUser->getIsVerified() != 1) {
                    return 'Ce mail n\'est pas vérifié';
                }

                if (password_verify($_POST['password'], $loggedUser->getPassword())) {

                    $session = new Session();
                    $session->generateToken();
                    $session->setUserId($loggedUser->getId());
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

    public function register(UserModel $user): array
    {
        if (!empty($_POST)) {

            $result = Verificator::checkForm($user->getRegisterForm(), $_POST);
            if ($user->select2('user', ["id", "password"])
                    ->where('email', $_POST['email'])
                    ->fetch()
               ) {
                $result["email"][] = 'Ce mail est deja utilisé';
            }
            if (empty($result)) {

                $user->setFirstname($_POST['firstname']);
                $user->setLastname($_POST['lastname']);
                $user->setEmail($_POST['email']);
                $user->setPassword($_POST['password']);
                $user->generateMailToken();
                $id = $user->save();

                $user = $user->setId($id);

                $session = new Session();
                $session->generateToken();
                $session->setUserId($id);
                $session->save();

                $mail = Mail::getInstance();
                $mail->mailValidation($_POST['email'], $_POST['firstname'], $_POST['lastname'], $user->getMailToken());
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
            $user = $user->select2('user', ["*"])
                ->where('mailToken', $_GET['token'])
                ->fetch();
            if (!empty($user)) {
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

    public function profile()
    {
        $user = new UserModel();
        if (!isset($_GET['userId']) || !is_numeric($_GET['userId'])) {
            header('location: /404');
            die();
        }

        $userId = $_GET['userId'];

        $session = !empty($_SESSION["token"]) ? Session::getByToken($_SESSION["token"]) : null;

        $isMyProfile = $session->getUserId() == $userId;
        $userId = $isMyProfile ? $session->getUserId() : $userId;
        $userInfos = $user->select2('user', ['*'])
            ->where('id', $userId)
            ->fetch();
        
        $articles = new ArticleModel();
        $articles = $articles->select2('article', ['article.id AS idArticle', 'title', 'description', 'path', 'name', 'AVG(score) AS note'])
        ->leftJoin('image', 'article.id', 'image.articleId')
        ->leftJoin('star', 'article.id', 'star.articleId')
        ->innerJoin('category', 'article.categoryId', 'category.id')
        ->where('main', 1)
        ->groupBy(['idArticle', 'title', 'description', 'path', 'createdAt', 'name'])
        ->orderBy('createdAt', 'DESC')
        ->limit(0, 6)
        ->fetchAll();


        $view = new View("profile", "front");
        $view->assign("userInfos", $userInfos);
        $view->assign("articles", $articles);
        $view->assign("isMyProfile", $isMyProfile);      
    }


    // -------------- API calls ------------- //

    public function getUserById()
    {
        $content = file_get_contents('php://input');
        $_POST = json_decode($content, true);
        Server::ensureHttpMethod('POST');

        $id = $_POST['id'] ?? null;
        $user = new UserModel();
        $user = $user->select2('user', ["id", "email", "firstname", "lastname", "status", "isVerified", "mailToken", "profilePicture"])
            ->where('id', $id)
            ->fetch();

        if($user) {
            http_response_code(200);
            header('Content-Type: application/json; charset=utf-8');
            echo json_encode($user);
        }else {
            http_response_code(500);
        }

        
    }


    public function getUsers()
    {
        Server::ensureHttpMethod('GET');
        $getParams = isset($_GET['params']) ? json_decode($_GET['params']) : null;
        $users = new UserModel();
        $users = $users->select2('user', ["id", "email", "lastname", "firstname", "status", "createdAt"])
            ->where($getParams[0]??"",$getParams[1]??null,$getParams[2]??"=")
            ->fetchAll();
     
        if($users) {       
            header('Content-Type: application/json; charset=utf-8');
            echo json_encode($users);
            http_response_code(200);
        }else {
            http_response_code(500);
        }
    
    }


    public function deleteUserById()
    {
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

    public function modifyProfilePicture()
    {
        Server::ensureHttpMethod('POST');

        $user = new UserModel();
        $uploadsDir = 'assets/img/users/';
        $file = $_FILES['file'];
        if (!empty($_SESSION["token"])) {
            $session = Session::getByToken($_SESSION["token"]);
            if ($session !== null) {
                $user = $user->setId($session->getUserId());
                if ($file['error'] === UPLOAD_ERR_OK) {
                    $type = explode('.', basename($file['name']));
                    $type = end($type);
                    $fileName = $user->getLastname() . "_" . $user->getId() . "." . $type;
                    move_uploaded_file($file['tmp_name'], $uploadsDir . $fileName);
                    $user->setProfilePicture($uploadsDir . $fileName);
                    $user->save();
                    echo $uploadsDir . $fileName;
                }
            }
        }
    }

}