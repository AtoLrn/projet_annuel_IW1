<?php

namespace App\Core\Middleware;

use App\Model\Session;
use App\Model\User;

class Security
{
    // Check Authorization
    public static function Auth(array $rights)
    {

        $authorized = False;
        if (!empty($rights)) {
            if (isset($_SESSION['token'])) {
                $session = Session::getByToken();
                if (!$session) {
                    $authorized = false;
                } else {
                    $session->generateToken();
                    $session->save();

                    $user = new User();
                    $user = $user->setId($session->getUserId());
                    $status = $user->getStatus();
                    switch ($status) {
                        case 'user':
                            if (in_array("user", $rights)) {
                                $authorized = true;
                            }

                        case 'chief':
                            if (in_array("chief", $rights)) {
                                    $authorized = true;
                            }

                        case 'admin':
                            if (in_array("admin", $rights)) {
                                $authorized = true;
                            }
                            break;
                        default:
                            $authorized = false;
                            break;
                    }
                }
            } else {
                $authorized = false;
            }
        } else {
            $authorized = true;
        }
        if (!$authorized) {
            header("Location: /register-login?url=" . $_SERVER["REQUEST_URI"]);
            exit();
        }
    }
}