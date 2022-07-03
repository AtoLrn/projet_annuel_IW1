<?php

namespace App\Controller;

use App\Core\Server;
use App\Model\Comment as CommentModel;
use App\Model\Session;
use App\Model\User as UserModel;

use App\Core\Logger;
class Comment {

    public function createComment()
    {
        $user = new UserModel();
        $comment = new CommentModel();
        if (!empty($_SESSION["token"])) {
            $session = Session::getByToken($_SESSION["token"]);
            if ($session !== null) {
                $user = $user->setId($session->getUserId());
                if (!empty($_POST)) {
                    $comment->setContent($_POST['description']);
                    $comment->setArticleId($_POST['articleId']);
                    $comment->setUserId($user->getId());
                    $comment->save();
                }
            }
        }
        header('Location: ' . $_SERVER['HTTP_REFERER']);
    }

    // -------------- API calls ------------- //

    public function getComments()
    {
        Server::ensureHttpMethod('GET');
        $comment = New CommentModel();
        $result = $comment->select([
            "user" => [
                "args" => ["email"],
                "params" => [],
                "ij" => ["comment"]
            ],
            "comment" => [
                "args" => ["id", "status", "createdAt"],
                "params" => []
            ]
        ]);
        if($result) {
            http_response_code(200);
        }else {
            Logger::writeErrorLog("Error while fetching comments.");
            http_response_code(500);
        }

        header('Content-Type: application/json; charset=utf-8');
        echo json_encode($result);
    }

    public function getCommentById()
    {
        $content = file_get_contents('php://input');
        $_POST = json_decode($content, true);
        Server::ensureHttpMethod('POST');

        $id = $_POST['id'] ?? null;
        $comment = new CommentModel();
        $result = $comment->select(
            [
                "user" => [
                    "args" => ["id", "email", "firstname", "lastname"],
                    "params" => [],
                    "ij" => ["comment"]
                ],
                "comment" => [
                    "args" => ["id", "content", "status", "createdAt"],
                    "params" => ["id" => $id]
                ]
            ]
        );
        if($result) {
            http_response_code(200);
            header('Content-Type: application/json; charset=utf-8');
            echo json_encode($result);
        }else {
            Logger::writeErrorLog("Error while fetching comment with id: $id.");
            http_response_code(500);
        }
    }

    public function modifyCommentStatus()
    {
        $content = file_get_contents('php://input');
        $_POST = json_decode($content, true);
        Server::ensureHttpMethod('PUT');

        $commentId = $_POST['comment_id'] ?? null;
        $commentStatus = $_POST['comment_status'] ?? null;
        if (is_null($commentId) && is_null($commentStatus)) {
            http_response_code(406);
            die();
        }

        $comment = new CommentModel();

        try {
            $comment = $comment->setId($commentId);
            $comment->setStatus($commentStatus);
            $comment->save();
            http_response_code(200);
        } catch (\Exception $e) {
            Logger::writeErrorLog("Error while updating comment status.");
            http_response_code(500);
        }
    }
}
