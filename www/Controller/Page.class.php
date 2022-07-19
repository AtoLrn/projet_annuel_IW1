<?php

namespace App\Controller;

use App\Core\CleanWords;
use App\Core\Server;
use App\Core\SiteMapGenerator;
use App\Core\View;
use App\Model\Page as PageModel;
use App\Model\Session;
use App\Model\User as UserModel;

use App\Core\Logger;
use App\Core\Middleware\Security;

class Page
{
    public function getBySlug(string $slug)
    {
        $page = new PageModel();
        $page = $page->select('page', ['id','userId', 'title', 'content', 'path', 'enable'])
            ->where('path', $slug)
            ->fetch();

        if (!$page->getEnabled()) header("Location: /not-found");
        

        $view = new View("dynamic-page", "front");
        $view->assign("page", $page);
    }

    public function createPage()
    {
        $page = new PageModel();
        if (!empty($_POST)) {
            Security::csrf();
            if (!empty($_SESSION["token"])) {
                $session = Session::getByToken();
                if ($session !== null){


                    $user = new UserModel();
                    $user = $user->setId($session->getUserId());

                    $path = CleanWords::formatePath($_POST['title']);

                    $existingPage = $page->select('page', ['path'])->where('path', $path)->count();

                    if ($existingPage != 0) {
                        $path = $path."-".bin2hex(random_bytes(8));
                    }

                    $page->setTitle($_POST['title']);
                    $page->setContent($_POST['content']);
                    $page->setUserId($user->getId());
                    $page->setPath($path);
                    $page->setEnabled(isset($_POST["enable"]));
                    $page->setDisplayOnFooter(isset($_POST["footer"]));

                    $page->save();

                    SiteMapGenerator::generateSiteMap();

                    header('location: /page/edit?id=' . $id);
                }
            }
            
        }

        $view = new View("page-creation", "back");
        $view->assign("page", $page);
    }

    public function editPage()
    {
        if (empty($_GET['id']) || !is_numeric($_GET['id'])) {
            header("Location: /not-found");
            exit();
        }

        $page = new PageModel();
        $page = $page->setId($_GET['id']);

        if (!$page) {
            header("Location: /404");
            exit();
        }

        if ($_SERVER['REQUEST_METHOD'] == "GET") {

            $view = new View("page-creation", "back");
            $view->assign("page", $page);
            $view->assign("edit", true);

            return;
        }

        if (!empty($_POST)) {
            Security::csrf();
            $path = CleanWords::formatePath($_POST['slug'] != "" ? $_POST['slug'] : $_POST['title']);
            $page->setTitle($_POST['title']);
            $page->setContent($_POST['content']);
            $page->setPath($path);
            $page->setEnabled(isset($_POST["enable"]));
            $page->setDisplayOnFooter(isset($_POST["footer"]));

            $page->save();

            SiteMapGenerator::generateSiteMap();
        }

        header("Location: /".$page->getPath());
    }

    // -------------- API calls ------------- //

    public function getPages()
    {
        Server::ensureHttpMethod('GET');
        $pages = New PageModel();

        $result = $pages->select('page', ['page.id AS id', 'title', 'path', 'email', 'page.createdAt AS createdAt'])
            ->leftJoin('user', 'page.userId', 'user.id')
            ->fetchAll();

        if($result) {
            http_response_code(200);
        }else {
            Logger::writeErrorLog("Error while fetching Pages.");
            http_response_code(500);
        }

        header('Content-Type: application/json; charset=utf-8');
        echo json_encode($result);
    }

    public function getPageById()
    {
        $content = file_get_contents('php://input');
        $_POST = json_decode($content, true);
        Server::ensureHttpMethod('POST');

        $id = $_POST['id'] ?? null;
        $page = new PageModel();
        $page = $page->select('page', ["id", "title", "path", "createdAt"])
            ->where('id', $id)
            ->fetch();

        if($page) {
            http_response_code(200);
            header('Content-Type: application/json; charset=utf-8');
            echo json_encode($page);
        }else {
            Logger::writeErrorLog("Error while retrieving page with id $id.");
            http_response_code(500);
        }
    }

    public function deletePageById()
    {
        Server::ensureHttpMethod('DELETE');

        $id = isset($_GET['id']) && is_numeric($_GET['id']) ? $_GET['id'] : null;
        if($id === null) {
            http_response_code(400);
            die();
        }

        $page = new PageModel();
        $page = $page->setId($id);
        if($page === null) {
            http_response_code(404);
            die();
        }
        $result = $page->delete();
        SiteMapGenerator::generateSiteMap();
        if($result) {
            http_response_code(200);
        }else {
            Logger::writeErrorLog("Error while deleting pages with id: $id.");
            http_response_code(500);
        }
    }
}
