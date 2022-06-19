<?php

namespace App\Controller;

use App\Core\View;
use App\Core\Verificator;
use App\Model\User as UserModel;
use App\Model\Article as ArticleModel;
use App\Model\Certification as CertificationModel;
use App\Model\Ingredient as IngredientModel;

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

        $totalUser = $user->select([
            "user" => [
                "args" => ["COUNT(*)"],
                "params" => [
                    "status" => "user",
                    "isVerified" => "1"
                ]
            ]
        ]);

        $totalChief = $user->select([
            "user" => [
                "args" => ["COUNT(*)"],
                "params" => [
                    "status" => "chief",
                    "isVerified" => "1"
                ]
            ]
        ]);

        $totalArticle = $article->select([
            "article" => [
                "args" => ["COUNT(*)"],
            ]
        ]);

        $totalCertificationDemand = $certification->select([
            "certification" => [
                "args" => ["COUNT(*)"],
            ]
        ]);

        $totalIngredientDemand = $ingredient->select([
            "ingredient" => [
                "args" => ["COUNT(*)"],
                "params" => [
                    "status" => "inDemand"
                ]
            ]
        ]);

        $totalUser = $totalUser[0]['COUNT(*)'];
        $totalChief = $totalChief[0]['COUNT(*)'];
        $totalArticle = $totalArticle[0]['COUNT(*)'];
        $totalCertificationDemand = $totalCertificationDemand[0]['COUNT(*)'];
        $totalIngredientDemand = $totalIngredientDemand[0]['COUNT(*)'];

        $lastWeekDate = date('Y-m-d H:i:s', mktime(0,0,0,date('m'),date('d')-7,date('Y')));

        $usersBeforeThisWeek = $user->select([
            "user" => [
                "args" => ["COUNT(*)"],
                "params" => [
                    "status" => "user",
                    "isVerified" => "1",
                    "createdAt" => ["value" => $lastWeekDate, "operator" => "<"]
                ]
            ]
        ]);

        $chiefsBeforeThisWeek = $user->select([
            "user" => [
                "args" => ["COUNT(*)"],
                "params" => [
                    "status" => "chief",
                    "isVerified" => "1",
                    "createdAt" => ["value" => $lastWeekDate, "operator" => "<"]
                ]
            ]
        ]);

        $articlesBeforeThisWeek = $article->select([
            "article" => [
                "args" => ["COUNT(*)"],
                "params" => [
                    "createdAt" => ["value" => $lastWeekDate, "operator" => "<"]
                ]
            ]
        ]);

        $usersBeforeThisWeek = $usersBeforeThisWeek[0]['COUNT(*)'];
        $chiefsBeforeThisWeek = $chiefsBeforeThisWeek[0]['COUNT(*)'];
        $articlesBeforeThisWeek = $articlesBeforeThisWeek[0]['COUNT(*)'];

        $ratioNewOldUsers = $this->ratioBeforeAfter($usersBeforeThisWeek, $totalUser);
        $ratioNewOldChiefs = $this->ratioBeforeAfter($chiefsBeforeThisWeek, $totalChief);
        $ratioNewOldArticles = $this->ratioBeforeAfter($articlesBeforeThisWeek, $totalArticle);

        $view = new View("dashboard", "back");
        $view->assign("totalUser", $totalUser);
        $view->assign("totalChief", $totalChief);
        $view->assign("totalArticle", $totalArticle);
        $view->assign("totalCertificationDemand", $totalCertificationDemand);
        $view->assign("totalIngredientDemand", $totalIngredientDemand);
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
    }

    public function setup(): void 
    {
        if (file_exists("conf.inc.json")) header("Location: /list");

        if ($_SERVER['REQUEST_METHOD'] == "POST") {
            Verificator::checkForm($this->getSetupForm(), $_POST);

            try {
                $conn = new \PDO("mysql:host=" . $_POST['dbHost'] . ";port=" . $_POST['dbPort'] . ";dbname=" . $_POST['dbName'],
                $_POST['dbUser'],
                $_POST['dbPassword'],
                    [\PDO::ATTR_ERRMODE => \PDO::ERRMODE_WARNING]
                );

                $env = json_encode([
                    "DBUSER" => $_POST['dbUser'],
                    "DBPWD" => $_POST['dbPassword'],
                    "DBHOST" => $_POST['dbHost'],
                    "DBNAME" => $_POST['dbName'],
                    "DBPORT" => $_POST['dbPort'],
                    "DBDRIVER" => "mysql",
                    "DBPREFIXE" => $_POST['dbPrefixe'],
                    "FIRSTNAME" => $_POST['emailFirstname'],
                    "LASTNAME" => $_POST['emailLastname'],
                    "WEBSITENAME" => $_POST['websiteName'],
                    "WEBSITEURL" => $_POST['websiteUrl'],
                    "MAILUSERNAME" => $_POST['emailUsername'],
                    "MAILPASSWORD" => $_POST['emailPassword'],
                    "KEY_SECRET_RECAPTCHA" => "6LcEYYEfAAAAAPA4UDMLnwqWtND8cppT0hlW06gX",
                    "KEY_SITE_RECAPTCHA" => "6LcEYYEfAAAAAPjm6tOrK_27AYOQE0VEnCZfnqAX"
                ]);

                $init = file_get_contents("init.sql");
                $init = str_replace('CUSTOM_PREFIX_',  $_POST['dbPrefixe'], $init);
                
                $conn->exec($init);

                file_put_contents("conf.inc.json", $env);

                header("Location: /list");
            } catch(PDOException $ex) {
                print_r("Cannot connect");
            }
            

            

            exit();
            
        }

        $view = new View("setup", "setup");
        $view->assign("form", $this->getSetupForm());
    }

    public function getSetupForm(): array
    {
        return [
            "config" => [
                "method" => "POST",
                "action" => "/setup",
                "enctype" => "multipart/form-data",
                "submit" => "Enregistrer"
            ],
            "inputs" => [
                "dbName" => [
                    "type" => "text",
                    "placeholder" => "Database Name",
                    "required" => true,
                    "label" => "Database Name"
                ],
                "dbUser" => [
                    "type" => "text",
                    "placeholder" => "Database Username",
                    "required" => true,
                    "label" => "Database Username"
                ],
                "dbPassword" => [
                    "type" => "text",
                    "placeholder" => "Database Password",
                    "required" => true,
                    "label" => "Database Password"
                ],
                "dbHost" => [
                    "type" => "text",
                    "placeholder" => "Database Hostname",
                    "required" => true,
                    "label" => "Database Hostname"
                ],
                "dbPort" => [
                    "type" => "text",
                    "placeholder" => "Database Port",
                    "required" => true,
                    "label" => "Database Port"
                ],
                "dbPrefixe" => [
                    "type" => "text",
                    "placeholder" => "Database Prefixe",
                    "required" => true,
                    "label" => "Database Prefixe"
                ],
                "emailFirstname" => [
                    "type" => "text",
                    "placeholder" => "Email Firstname",
                    "required" => true,
                    "label" => "Email Firstname"
                ],
                "emailLastname" => [
                    "type" => "text",
                    "placeholder" => "Email Lastname",
                    "required" => true,
                    "label" => "Email Lastname"
                ],
                "emailUsername" => [
                    "type" => "email",
                    "placeholder" => "your.email@gmail.com",
                    "required" => true,
                    "label" => "Your email"
                ],
                "emailPassword" => [
                    "type" => "text",
                    "placeholder" => "Your email's password",
                    "required" => true,
                    "label" => "Email Password"
                ],
                "websiteName" => [
                    "type" => "text",
                    "placeholder" => "Your website's Name",
                    "required" => true,
                    "label" => "Website's Name"
                ],
                "websiteUrl" => [
                    "type" => "text",
                    "placeholder" => "Your website's URL",
                    "required" => true,
                    "label" => "Website's URL"
                ],

                
            ]
        ];
    }

}