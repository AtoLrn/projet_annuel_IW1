<?php

namespace App\Controller;

use App\Core\CleanWords;
use App\Core\Mail;
use App\Core\Middleware\Security;
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
            Security::csrf();
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

                    

                    if (isset($_GET["url"])) {
                        header("Location: " . htmlspecialchars($_GET["url"]));
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
            Security::csrf();
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
        
        if(isset($_GET["form"]) && !in_array($_GET["form"], ['login', 'register'])) {
            header('location: /register-login');
            die();
        }

        if (!empty($_POST)) {
            
            Security::csrf();
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

    public function newMailValidation()
    {
        $user = new UserModel();
        $view = new View("mail-validation", 'front');
        if ($_GET['token']) { // Faire une sécu ic!!!!!!!!!
            $user = $user->select2('user', ["*"])
                ->where('mailToken', $_GET['token'])
                ->fetch();
            if (!empty($user)) {
                $user->setEmail($user->getTmpEmail());
                $user->setTmpEmail(null);
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
        $user = new UserModel();
        $view = new View("pwd-forget", 'front');
        $error = null;
        $view->assign("user", $user);
        if (!empty($_POST)) {
            Security::csrf();
            $result = Verificator::checkForm($user->getPwdForgetForm(), $_POST);
            if (empty($result)) {
                $user = $user->select2('user', ["*"])
                    ->where('email', $_POST['email'])
                    ->fetch();

                if ($user) {
                    $user->generatePasswordToken();
                    $user->save();

                    $mail = Mail::getInstance();
                    $mail->passwordForget($user->getEmail(), $user->getFirstName(), $user->getFirstname(), $user->getPasswordToken());
                    $view->assign("isSent", true);
                    return;
                }
            }
            $error = $result;
        }
        $view->assign("error", $error);
        $view->assign("isSent", false);
    }

    public function modifyPassword()
    {
        $view = new View("modify-password", 'front');
        $error = null;
        $user = new UserModel();
        if (isset($_GET['token'])) {
            $token = $_GET['token'];
            $user = $user->select2('user', ["*"])
                ->where('passwordToken', $token)
                ->fetch();
        } else if (isset($_SESSION['token'])) {
            $session = Session::getByToken();
            if ($session === null) {
                $view->assign("tokenError", true);
                return;
            }
            $user = $user->setId($session->getUserId());
        } else {
            $view->assign("tokenError", true);
            return;
        }

        if (!$user) {
            $view->assign("tokenError", true);
            return;
        }

        $view->assign("tokenError", false);
        $view->assign("user", $user);
        if (!empty($_POST)) {
            Security::csrf();
            $result = Verificator::checkForm($user->getModifyPasswordForm($token??null), $_POST);
            if (empty($result)) {

                $user->setPassword($_POST['password']);
                $user->save();

                $view->assign("success", true);
            }
            $error = $result;
        }
        $view->assign("error", $error);
        $view->assign("token", $token ?? null);
    }

    public function profile()
    {
        $user = new UserModel();
        if (!isset($_GET['userId']) || !is_numeric($_GET['userId'])) {
            header('location: /404');
            die();
        }

        $userId = $_GET['userId'];

        $session = !empty($_SESSION["token"]) ? Session::getByToken() : null;

        $isMyProfile = $session && $session->getUserId() == $userId;
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
        ->where('article.userId', $userId)
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

    public function getUsers()
    {
        Server::ensureHttpMethod('GET');
        $getParams = isset($_GET['params']) && is_array(json_decode($_GET['params'])) ? json_decode($_GET['params']) : null;
        $users = new UserModel();
        $users->select2('user', ["id", "email", "lastname", "firstname", "status", "createdAt"]);
        if(!is_null($getParams)) {
            $users->where($getParams[0]??"",$getParams[1]??null,$getParams[2]??"=");
        }
        $users = $users->fetchAll();
     
        if($users) {       
            header('Content-Type: application/json; charset=utf-8');
            echo json_encode($users);
            http_response_code(200);
        }else {
            http_response_code(500);
        }
    
    }

    public function getUserById()
    {
        $content = file_get_contents('php://input');
        $_POST = json_decode($content, true);
        Server::ensureHttpMethod('POST');

        $id = $_POST['id'] ?? null;
        if(is_null($id)) {
            http_response_code(400);
            die();
        }
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

    public function updateActiveUser()
    {
        $content = file_get_contents('php://input');
        $_POST = json_decode($content, true);
        Server::ensureHttpMethod('POST');

        $id = $_POST['id'] ?? null;
        if(is_null($id)) {
            http_response_code(400);
            die();
        }
        $user = new UserModel();
        $user = $user->setId($id);
        if($user) {
            http_response_code(200);
            header('Content-Type: application/json; charset=utf-8');
            $user->reverseIsVerified();
            $user->save();
            echo json_encode($user);
        }else {
            http_response_code(500);
        }

        
    }

    public function updateStatusUser()
    {
        $content = file_get_contents('php://input');
        $_POST = json_decode($content, true);
        Server::ensureHttpMethod('POST');

        $id = $_POST['id'] ?? null;
        $status =  isset($_POST['status']) && in_array($_POST['status'], ['chief', 'user', 'admin']) ? $_POST['status'] : null;
        if(is_null($id) || is_null($status)) {
            http_response_code(400);
            die();
        }
        $user = new UserModel();
        $user = $user->setId($id);
        if($user) {
            http_response_code(200);
            header('Content-Type: application/json; charset=utf-8');
            $user->setStatus($status);
            $user->save();
            echo json_encode($user);
        }else {
            http_response_code(500);
        }

        
    }


    public function deleteUserById()
    {
        Server::ensureHttpMethod('DELETE');

        $id = isset($_GET['id']) && is_numeric($_GET['id']) ? $_GET['id'] : null;
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
            $session = Session::getByToken();
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

    public function modifyFirstnameLastname()
    {
        Server::ensureHttpMethod('POST');

        $user = new UserModel();

        $session = Session::getByToken();
        if ($session === null) {
            echo "aucun compte correspondant";
            http_response_code(500);
            return;
        }

        if (!isset($_POST['firstname']) || !isset($_POST['lastname'])) {
            echo "Champs manquant";
            http_response_code(500);
            return;
        }

        $user = $user->setId($session->getUserId());
        $user->setFirstname(CleanWords::firstname($_POST['firstname']));
        $user->setLastname(CleanWords::lastname($_POST['lastname']));
        $user->save();
    }

    public function modifyEmail()
    {
        Server::ensureHttpMethod('POST');

        $user = new UserModel();

        $session = Session::getByToken();
        if ($session === null) {
            echo "aucun compte correspondant";
            http_response_code(500);
            return;
        }

        if (!isset($_POST['email'])) {
            echo "Champs manquant";
            http_response_code(500);
            return;
        }

        if (!Verificator::checkEmail($_POST['email'])) {
            echo "Mail invalide";
            http_response_code(500);
            return;
        }

        $isEmailExist = $user->select2('user', ['id'])
            ->where('email', $_POST['email'])
            ->fetch();
        if ($isEmailExist){
            echo "Ce mail exist déjà";
            http_response_code(500);
            return;
        }

        $user = new UserModel();
        $user = $user->setId($session->getUserId());
        $user->setTmpEmail($_POST['email']);
        $user->generateMailToken();
        $user->save();

        $mail = Mail::getInstance();
        $mail->newMailValidation($_POST['email'], $user->getFirstname(), $user->getLastname(), $user->getMailToken());
    }

}