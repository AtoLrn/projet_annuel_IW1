<?php

namespace App\Controller;

use App\Core\View;
use App\Model\Article as ArticleModel;
use App\Model\Category as CategoryModel;
use App\Model\User as UserModel;
use App\Model\Session;

class Main
{

    public function home(): void
    {
        $view = new View('home', 'front');
        $articles = new ArticleModel();
        $lastArticles = $articles->select2('article', ['article.id AS idArticle', 'title', 'description', 'path', 'AVG(score) AS note'])
            ->leftJoin('image', 'article.id', 'image.articleId')
            ->leftJoin('star', 'article.id', 'star.articleId')
            ->where('main', 1)
            ->groupBy(['idArticle', 'title', 'description', 'path', 'createdAt'])
            ->orderBy('createdAt', "DESC")
            ->limit(0, 6)
            ->fetchAll();
        
        $bestArticles = $articles->select2('article', ['article.id AS idArticle', 'title', 'description', 'path', 'AVG(score) AS note'])
            ->leftJoin('image', 'article.id', 'image.articleId')
            ->leftJoin('star', 'article.id', 'star.articleId')
            ->where('main', 1)
            ->groupBy(['idArticle', 'title', 'description', 'path'])
            ->orderBy('note', "DESC")
            ->limit(0, 6)
            ->fetchAll();
        
        $categories = new CategoryModel();
        $categories = $categories
            ->select2('category', ['name'])
            ->orderBy('name')
            ->fetchAll();
        
        $view->assign("lastArticles", $lastArticles);
        $view->assign("bestArticles", $bestArticles);
        $view->assign("categories", $categories);
        
    }

    public function searchArticles(): void 
    {
        $categories = new CategoryModel();
        $categories = array_map(
            function ($cat) { return $cat->getName(); } ,
            $categories
            ->select2('category', ['id', 'name'])
            ->fetchAll()
        );

        // query GET
        $category = isset($_GET['category']) && in_array($_GET['category'], $categories) ? $_GET['category'] : null;
        $q = !empty($_GET['q']) ? htmlspecialchars($_GET['q']) : null;
        $order = !empty($_GET['order']) ? htmlspecialchars($_GET['order']) : "date_desc";
        $page = isset($_GET['page']) && is_numeric($_GET['page']) && $_GET['page'] >= 0 ? $_GET['page'] : 0;
        
        $article = new ArticleModel();
        
        // get count articles for pagination
        $count = $article->select2('article', ['COUNT(*) AS total'])
            ->innerJoin('category', 'article.categoryId', 'category.id')
            ->where('name', $category)
            ->where('title', "%" . $q . "%", " LIKE ")
            ->fetch();

        $articlePerPage = 6;  
        if( $count->total / $articlePerPage < $page && $count->total / $articlePerPage >= 0) {
            header('location: /recettes');
            die();
        }        
        // search articles
        $orderBy = $article->getOrderType($order);
        $articles = $article->select2('article', ['article.id AS idArticle', 'title', 'description', 'path', 'name', 'AVG(score) AS note'])
            ->leftJoin('image', 'article.id', 'image.articleId')
            ->leftJoin('star', 'article.id', 'star.articleId')
            ->innerJoin('category', 'article.categoryId', 'category.id')
            ->where('main', 1)
            ->where('name', $category)
            ->where('title', "%" . $q . "%", " LIKE ")
            ->groupBy(['idArticle', 'title', 'description', 'path', 'createdAt', 'name'])
            ->orderBy($orderBy['val'], $orderBy['order'])
            ->limit($page * $articlePerPage, $articlePerPage)
            ->fetchAll();

        
        //view data
        $view = new View('search-articles');
        $view->assign("articles", $articles);
        $view->assign("categories", $categories);
        $view->assign("categoryName", $category);
        $view->assign("order", $order);
        $view->assign("q", $q);

        $view->assign("pagination", [
            "nbPages" => $count->total / $articlePerPage,
            "query"=> $_GET,
            "currentPage" => $page,
            "redirect" => "/recettes"
        ]);
    }

    public function searchChiefs(): void 
    {     
        // query GET
        $q = !empty($_GET['q']) ? htmlspecialchars($_GET['q']) : null;
        $order = !empty($_GET['order']) ? htmlspecialchars($_GET['order']) : "date_desc";
        $page = isset($_GET['page']) && is_numeric($_GET['page']) && $_GET['page'] >= 0 ? $_GET['page'] : 0;
     
        $chiefs = new UserModel();

        $idUser = null;

        if(isset($_GET['sub'])) {
            echo "oui";
            $session = Session::getByToken();
            if(!is_null($session)) {
                $idUser = $session->getUserId();
            }
        }
        
        // get count chiefs for pagination
        $count = $chiefs->select2('user', ['user.id AS id'])
            ->leftJoin('follow', 'user.id', 'follow.isFollowed')
            ->where('follower', $idUser)
            ->where('status', 'chief')
            ->whereOr('firstname', "%" . $q . "%", " LIKE ")
            ->whereOr('lastname', "%" . $q . "%", " LIKE ")
            ->count();
         

        $articlePerPage = 6;  
        if( $count / $articlePerPage < $page && $count / $articlePerPage >= 0) {
            header('location: /cuisiniers');
            die();
        }        
        // search chiefs
        $orderBy = $chiefs->getOrderType($order);
        $chiefs = $chiefs->select2('user', ['user.id AS id', 'firstname', 'lastname', 'profilePicture'])
            ->leftJoin('follow', 'user.id', 'follow.isFollowed')
            ->where('follower', $idUser)
            ->where('status', 'chief')
            ->whereOr('firstname', "%" . $q . "%", " LIKE ")
            ->whereOr('lastname', "%" . $q . "%", " LIKE ")
            ->orderBy($orderBy['val'], $orderBy['order'])
            ->limit($page * $articlePerPage, $articlePerPage)
            ->fetchAll();
        
        // view data
        $view = new View('search-chiefs');
        $view->assign("chiefs", $chiefs);
        $view->assign("q", $q);
        $view->assign("order", $order);
        $view->assign("sub", $idUser);

        $view->assign("pagination", [
            "nbPages" => $count / $articlePerPage,
            "query"=> $_GET,
            "currentPage" => $page,
            "redirect" => "/chiefs"
        ]);
    }

    public function notFound()
    {
        $view = new View("not-found");
    }
}