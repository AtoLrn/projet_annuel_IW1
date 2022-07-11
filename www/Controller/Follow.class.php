<?php

namespace App\Controller;

use App\Model\Follow as FollowModel;
use App\Core\Server;
use App\Model\Session;
class Follow
{
    public function getFollows(): void
    {
        Server::ensureHttpMethod('GET');
        $id = (isset($_GET['id']) && is_numeric($_GET['id'])) ? $_GET['id'] : null;
        if(is_null($id)) {
            http_response_code(400);
            die();
        }

        $response = [];
        $follow = new FollowModel();

        $response['count'] = $follow->select2('follow', ['id'])
            ->where('isFollowed', $id)
            ->count();
        
        $session = Session::getByToken();

        if(!is_null($session)) {
            $follow = $follow->select2('follow', ['*'])
                ->where('follower', $session->getUserId())
                ->fetch();
            
            if($follow) {
                $response['follow'] = true;
                $response['notification'] = $follow->getNotification();
            }
        }

        echo json_encode($response);
        
    }

    public function toggleFollow(): void
    {
        Server::ensureHttpMethod('POST');
        $content = file_get_contents('php://input');
        $_POST = json_decode($content, true);
        $id = (isset($_POST['id']) && is_numeric($_POST['id'])) ? $_POST['id'] : null;
        if(is_null($id)) {
            http_response_code(400);
            die();
        }

        $follows = new FollowModel();
        $session = Session::getByToken();
        $follow = $follows->select2('follow', ['*'])
            ->where('isFollowed', $id)
            ->where('follower', $session->getUserId())
            ->fetch();

        if($follow) {
            $follow->delete();
        }else {
            $follows->setIsFollowed($id);
            $follows->setFollower($session->getUserId());
            $follows->save();
        }

    }

    public function toggleNotification(): void
    {
        Server::ensureHttpMethod('POST');
        $content = file_get_contents('php://input');
        $_POST = json_decode($content, true);
        $id = (isset($_POST['id']) && is_numeric($_POST['id'])) ? $_POST['id'] : null;
        if(is_null($id)) {
            http_response_code(400);
            die();
        }

        $follows = new FollowModel();
        $session = Session::getByToken();
        $follow = $follows->select2('follow', ['*'])
            ->where('isFollowed', $id)
            ->where('follower', $session->getUserId())
            ->fetch();

        if($follow) {
            $follow->setNotification($follow->getNotification() == 0 ? 1 : 0 );
            $follow->save();
        }
    }
}