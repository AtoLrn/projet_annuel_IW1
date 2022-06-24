<?php

namespace App\Controller;

use App\Core\View;
use App\Model\Category;
use App\Model\User as UserModel;
use App\Model\Article as ArticleModel;
use App\Model\Certification as CertificationModel;
use App\Model\Ingredient as IngredientModel;

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

}