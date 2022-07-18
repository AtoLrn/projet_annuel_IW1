<?php

namespace App\Controller;

use App\Core\Middleware\Security;
use App\Core\View;
use App\Core\Verificator;
use App\Model\User as UserModel;
use App\Model\Article as ArticleModel;
use App\Model\Certification as CertificationModel;
use App\Model\Ingredient as IngredientModel;
use App\Model\Comment as CommentModel;

use PDO;
use PDOException;
class Admin
{

    public function dashboard()
    {
        $user = new UserModel();
        $article = new ArticleModel();
        $certification = new CertificationModel();
        $ingredient = new IngredientModel();
        $comment = new CommentModel();

        $totalUser = $user->select('user', ['id'])
            ->where('status', 'user')
            ->where('isVerified', '1')
            ->count();

        $totalChief = $user->select('user', ['id'])
            ->where('status', 'chief')
            ->where('isVerified', '1')
            ->count();

        $totalArticle = $article->select('article', ['id'])
            ->count();

        $totalCertificationDemand = $certification->select('certification', ['id'])
            ->where("status", "inDemand")
            ->count();

        $totalIngredientDemand = $ingredient->select('ingredient', ['id'])
            ->where('status', 'inDemand')
            ->count();

        $totalCommentDemand = $comment->select('comment', ['id'])
            ->where("status", "inDemand")
            ->count();

        $lastWeekDate = date('Y-m-d H:i:s', mktime(0,0,0,date('m'),date('d')-7,date('Y')));

        $usersBeforeThisWeek = $user->select('user', ['id'])
            ->where("status", "user")
            ->where("isVerified", "1")
            ->where("createdAt", $lastWeekDate, '<')
            ->count();

        $chiefsBeforeThisWeek = $user->select('user', ['id'])
            ->where("status", "chief")
            ->where("isVerified", "1")
            ->where("createdAt", $lastWeekDate, '<')
            ->count();

        $articlesBeforeThisWeek = $article->select('article', ['id'])
            ->where("createdAt", $lastWeekDate, '<')
            ->count();

        $ratioNewOldUsers = $this->ratioBeforeAfter($usersBeforeThisWeek, $totalUser);
        $ratioNewOldChiefs = $this->ratioBeforeAfter($chiefsBeforeThisWeek, $totalChief);
        $ratioNewOldArticles = $this->ratioBeforeAfter($articlesBeforeThisWeek, $totalArticle);

        $view = new View("dashboard", "back");
        $view->assign("totalUser", $totalUser);
        $view->assign("totalChief", $totalChief);
        $view->assign("totalArticle", $totalArticle);
        $view->assign("totalCertificationDemand", $totalCertificationDemand);
        $view->assign("totalIngredientDemand", $totalIngredientDemand);
        $view->assign("totalCommentDemand", $totalCommentDemand);
        $view->assign("ratioNewOldUsers", $ratioNewOldUsers);
        $view->assign("ratioNewOldChiefs", $ratioNewOldChiefs);
        $view->assign("ratioNewOldArticles", $ratioNewOldArticles);
    }

    function ratioBeforeAfter(int $oldValue, int $actualValue): float
    {
        if ($oldValue !== 0) {
            $newValue = $actualValue - $oldValue;
            return ($newValue * 100.0) / $oldValue;
        }

        return 0;
    }

    public function list()
    {
        $lists = ['user', 'article', 'comment', 'certification', 'ingredient', 'page'];
        $value =  isset($_GET['q']) ? (in_array($_GET['q'], $lists) ? $_GET['q']: 'user') : 'user';
        $model = "App\\Model\\" . ucfirst($value);
        
        $model = new $model();
        $listTpl = $model->formatList();
          
        $view = new View("list", "back");
        $view->assign("listTpl", $listTpl);
        $view->assign("table", $value);
    }

    public function settings(): void
    {
        $view = new View("settings", "back");
        $view->assign("form", $this->getSetupFormUpdate());

    }

    public function setup(): void 
    {
        if (file_exists("conf.inc.json")) header("Location: /list");
        if ($_SERVER['REQUEST_METHOD'] == "POST") {
            Security::csrf();
            Verificator::checkForm($this->getSetupForm(), $_POST);
            try {
                if ($_POST['dbPort'] && !is_numeric($_POST['dbPort'])) $errors[] = "Wrong Port Number";

                if ($_POST['dbDriver'] && !in_array($_POST['dbDriver'], ["mysql", "pgsql"])) $errors[] = "Unknown DB Driver";
                
                if ($_POST['websiteUrl'] && !filter_var($_POST['websiteUrl'], FILTER_VALIDATE_URL)) $errors[] = "Wrong URL Format";

                if (count($errors)) {
                    $view = new View("setup", "setup");
                    $view->assign("form", $this->getSetupForm($_POST));
                    $view->assign("errors",  $errors);
                    exit();
                }

                $conn = new \PDO("mysql:host=" . $_POST['dbHost'] . ";port=" . $_POST['dbPort'] . ";dbname=" . $_POST['dbName'],
                $_POST['dbUser'],
                $_POST['dbPassword'],
                    [\PDO::ATTR_ERRMODE => \PDO::ERRMODE_WARNING]
                );

                $logo = $_FILES['WEBSITELOGO'] ?? null;
                $logoPath = "";
                if ($logo) {
                    $target_file = str_replace(' ', '', bin2hex(random_bytes(20))."-".$logo['name']);
                    if (move_uploaded_file($logo['tmp_name'], 'assets/img/logo/'.$target_file)) {
                        $logoPath = $target_file;
                    }
                }
                $env = json_encode([
                    "DBUSER" => $_POST['dbUser'],
                    "DBPWD" => $_POST['dbPassword'],
                    "DBHOST" => $_POST['dbHost'],
                    "DBNAME" => $_POST['dbName'],
                    "DBPORT" => $_POST['dbPort'],
                    "DBDRIVER" => $_POST['dbDriver'],
                    "DBPREFIXE" => $_POST['dbPrefixe'],
                    "FIRSTNAME" => $_POST['emailFirstname'],
                    "LASTNAME" => $_POST['emailLastname'],
                    "WEBSITENAME" => $_POST['websiteName'],
                    "WEBSITEURL" => $_POST['websiteUrl'],
                    "MAILUSERNAME" => $_POST['emailUsername'],
                    "MAILPASSWORD" => $_POST['emailPassword'],
                    "LOGOPATH" => $logoPath,
                    "KEY_SECRET_RECAPTCHA" => "6LcEYYEfAAAAAPA4UDMLnwqWtND8cppT0hlW06gX",
                    "KEY_SITE_RECAPTCHA" => "6LcEYYEfAAAAAPjm6tOrK_27AYOQE0VEnCZfnqAX"
                ]);

                $init = file_get_contents("init.sql");
                $init = str_replace('CUSTOM_PREFIX_',  $_POST['dbPrefixe'], $init);
                
                $conn->exec($init);
                $req = $conn->prepare("INSERT INTO ".$_POST['dbPrefixe']."user (firstname, lastname, email, password, mailToken, isVerified, status)  VALUES( 'Admin', 'Admin', ?, ?, '',  '1', 'admin')");
                $req->execute([$_POST['rootUser'], password_hash($_POST['rootPassword'], PASSWORD_DEFAULT)]);

                file_put_contents("conf.inc.json", $env);

                header("Location: /list");
            } catch(PDOException $ex) {
                $errors[] = "Cannot connect to database";
                $view = new View("setup", "setup");
                $view->assign("form", $this->getSetupForm($_POST));
                $view->assign("errors",  $errors);

            }
            

            

            exit();
            
        }

        $view = new View("setup", "setup");
        $view->assign("form", $this->getSetupForm($_POST));
    }

    public function update(): void 
    {
        $errors = [];
        
        $update_params = array_filter($_POST, function($value, $key) {
            if ($value == "") return false;
            $default_env = get_defined_constants();
            return $value != $default_env[$key];
        },  ARRAY_FILTER_USE_BOTH);

        $default_env = json_decode(file_get_contents("conf.inc.json"), true);
        foreach ($update_params as $key => $value) {
            $default_env[$key] = $value;
        }

        if ($default_env['DBPORT'] && !is_numeric($default_env['DBPORT'])) $errors[] = "Wrong Port Number";

        if ($default_env['DBDRIVER'] && !in_array($default_env['DBDRIVER'], ["mysql", "pgsql"])) $errors[] = "Unknown DB Driver";
        
        if ($default_env['WEBSITEURL'] && !filter_var($default_env['WEBSITEURL'], FILTER_VALIDATE_URL)) $errors[] = "Wrong URL Format";

        $logo = $_FILES['WEBSITELOGO'] ?? null;
        if ($logo) {
            $target_file = str_replace(' ', '', bin2hex(random_bytes(20))."-".$logo['name']);
            if (move_uploaded_file($logo['tmp_name'], 'assets/img/logo/'.$target_file)) {
                $default_env["LOGOPATH"] = $target_file;
            }
        }
        

        if (count($errors) == 0) {
            file_put_contents("conf.inc.json", json_encode($default_env));
            header("Location: /settings");
        }


        $view = new View("settings", "back");
        $view->assign("errors",  $errors);
        $view->assign("form", $this->getSetupFormUpdate());
    }

    public function getSetupForm(array $defaultValues = []): array
    {
        return [
            "config" => [
                "method" => "POST",
                "action" => "/setup",
                "enctype" => "multipart/form-data",
                "submit" => "Enregistrer",
            ],
            "inputs" => [
                "dbDriver" => [
                    "type" => "text",
                    "placeholder" => "Database Driver ('mysql' or 'pgsql')",
                    "label" => "Database Driver",
                    "class" => "input input-search",
                    "value" => $defaultValues["dbDriver"] ?? ""
                ],
                "dbName" => [
                    "type" => "text",
                    "placeholder" => "Database Name",
                    "required" => true,
                    "label" => "Database Name",
                    "class" => "input input-search",
                    "value" => $defaultValues["dbName"] ?? ""
                ],
                "dbUser" => [
                    "type" => "text",
                    "placeholder" => "Database Username",
                    "required" => true,
                    "label" => "Database Username",
                    "class" => "input input-search",
                    "value" => $defaultValues["dbUser"] ?? ""
                ],
                "dbPassword" => [
                    "type" => "password",
                    "placeholder" => "Database Password",
                    "required" => true,
                    "label" => "Database Password",
                    "class" => "input input-search",
                    "error" => "Password not valid",
                    "value" => $defaultValues["dbPassword"] ?? ""

                ],
                "dbHost" => [
                    "type" => "text",
                    "placeholder" => "Database Hostname",
                    "required" => true,
                    "label" => "Database Hostname",
                    "class" => "input input-search",
                    "value" => $defaultValues["dbHost"] ?? ""

                ],
                "dbPort" => [
                    "type" => "text",
                    "placeholder" => "Database Port",
                    "required" => true,
                    "label" => "Database Port",
                    "class" => "input input-search",
                    "value" => $defaultValues["dbPort"] ?? ""
                ],
                "dbPrefixe" => [
                    "type" => "text",
                    "placeholder" => "Database Prefixe",
                    "required" => true,
                    "label" => "Database Prefixe",
                    "class" => "input input-search",
                    "value" => $defaultValues["dbPrefixe"] ?? ""
                ],
                "emailFirstname" => [
                    "type" => "text",
                    "placeholder" => "Email Firstname",
                    "required" => true,
                    "label" => "Email Firstname",
                    "class" => "input input-search",
                    "value" => $defaultValues["emailFirstname"] ?? ""

                ],
                "emailLastname" => [
                    "type" => "text",
                    "placeholder" => "Email Lastname",
                    "required" => true,
                    "label" => "Email Lastname",
                    "class" => "input input-search",
                    "value" => $defaultValues["emailLastname"] ?? ""
                ],
                "emailUsername" => [
                    "type" => "email",
                    "placeholder" => "your.email@gmail.com",
                    "required" => true,
                    "label" => "Your email",
                    "class" => "input input-search",
                    "value" => $defaultValues["emailUsername"] ?? ""
                ],
                "emailPassword" => [
                    "type" => "password",
                    "placeholder" => "Your email's password",
                    "required" => true,
                    "label" => "Email Password",
                    "class" => "input input-search",                    
                    "error" => "Password not valid",

                    "value" => $defaultValues["emailPassword"] ?? ""
                ],
                "websiteName" => [
                    "type" => "text",
                    "placeholder" => "Your website's Name",
                    "required" => true,
                    "label" => "Website's Name",
                    "class" => "input input-search",
                    "value" => $defaultValues["websiteName"] ?? ""
                ],
                "websiteUrl" => [
                    "type" => "text",
                    "placeholder" => "Your website's URL",
                    "required" => true,
                    "label" => "Website's URL",
                    "class" => "input input-search",
                    "value" => $defaultValues["websiteUrl"] ?? ""
                ],
                "rootUser" => [
                    "type" => "text",
                    "placeholder" => "Admin's email",
                    "required" => true,
                    "label" => "Admin's email",
                    "class" => "input input-search",
                    "value" => $defaultValues["rootUser"] ?? ""
                ],
                "rootPassword" => [
                    "type" => "password",
                    "placeholder" => "Admin password",
                    "required" => true,
                    "label" => "Admin password",
                    "class" => "input input-search",
                    "error" => "Password not valid",
                    "value" => $defaultValues["rootPassword"] ?? ""
                ],
                "WEBSITELOGO" => [
                    "type" => "file",
                    "placeholder" => "Website Logo",
                    "label" => "Logo du website",
                    "class" => "input input-search"
                ],

                
            ]
        ];
    }

    public function getSetupFormUpdate(): array
    {



        return [
            "config" => [
                "method" => "POST",
                "action" => "/update",
                "enctype" => "multipart/form-data",
                "submit" => "Mettre à Jour",
                "class" => "update-form",
                "container-inputs" => "input-wrapper"
            ],
            "inputs" => [
                "DBDRIVER" => [
                    "type" => "text",
                    "placeholder" => "Database Driver ('mysql' or 'pgsql')",
                    "label" => "Database Driver",
                    "class" => "input input-search",
                    "value" => DBDRIVER
                ],
                "DBNAME" => [
                    "type" => "text",
                    "placeholder" => "Database Name",
                    "label" => "Database Name",
                    "class" => "input input-search",
                    "value" => DBNAME
                ],
                "DBUSER" => [
                    "type" => "text",
                    "placeholder" => "Database Username",
                    "label" => "Database Username",
                    "class" => "input input-search",
                    "value" => DBUSER
                ],
                "DBPASSWORD" => [
                    "type" => "password",
                    "placeholder" => "Database Mot de Passe",
                    "label" => "Database Mot de Passe",
                    "class" => "input input-search"
                ],
                "DBHOST" => [
                    "type" => "text",
                    "placeholder" => "Database Hostname",
                    "label" => "Database Hostname",
                    "class" => "input input-search",
                    "value" => DBHOST
                ],
                "DBPORT" => [
                    "type" => "text",
                    "placeholder" => "Database Port",
                    "label" => "Database Port",
                    "class" => "input input-search",
                    "value" => DBPORT
                ],
                "DBPREFIXE" => [
                    "type" => "text",
                    "placeholder" => "Database Prefixe",
                    "label" => "Database Prefixe",
                    "class" => "input input-search",
                    "value" => DBPREFIXE
                ],
                "FIRSTNAME" => [
                    "type" => "text",
                    "placeholder" => "Prénom de l'email",
                    "label" => "Prénom de l'email",
                    "class" => "input input-search",
                    "value" => FIRSTNAME
                ],
                "LASTNAME" => [
                    "type" => "text",
                    "placeholder" => "Nom de l'email",
                    "label" => "Nom de l'email",
                    "class" => "input input-search",
                    "value" => LASTNAME
                ],
                "MAILUSERNAME" => [
                    "type" => "email",
                    "placeholder" => "your.email@gmail.com",
                    "label" => "Your email",
                    "class" => "input input-search",
                    "value" => MAILUSERNAME
                ],
                "MAILPASSWORD" => [
                    "type" => "password",
                    "placeholder" => "Your email's password",
                    "label" => "Email Password",
                    "class" => "input input-search"
                ],
                "WEBSITENAME" => [
                    "type" => "text",
                    "placeholder" => "Nom du site",
                    "label" => "Nom du site",
                    "class" => "input input-search",
                    "value" => WEBSITENAME
                ],
                "WEBSITEURL" => [
                    "type" => "text",
                    "placeholder" => "URL du site",
                    "label" => "URL du site",
                    "class" => "input input-search",
                    "value" => WEBSITEURL
                ],
                "WEBSITELOGO" => [
                    "type" => "file",
                    "placeholder" => "Website Logo",
                    "label" => "Logo du website",
                    "class" => "input input-search"
                ],
            ]
        ];
    }

}