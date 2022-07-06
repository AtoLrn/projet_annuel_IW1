<?php

namespace App\Controller;

use App\Core\Mail;
use App\Core\Server;
use App\Core\View;
use App\Model\Certification as CertificationModel;
use App\Model\Session;
use App\Model\User as UserModel;

use App\Core\Logger;
class Certification
{
    private function sendCertificationRequest($certificationDemand, $user)
    {
        $uploadsDir = 'assets/documents/certification-request/';
        foreach ($_FILES as $key => $file) {
            if ($file['error'] === UPLOAD_ERR_OK) {
                $type = explode('.', basename($file['name']));
                $type = end($type);
                $fileName = $key . "_" . $user->getId() . '.' . $type;
                move_uploaded_file($file['tmp_name'], $uploadsDir . $fileName);
                if ($key === 'idDocument') {
                    $certificationDemand->setIdDocumentPath($uploadsDir . $fileName);
                } else if($key === 'officialDocument') {
                    $certificationDemand->setOfficialDocumentPath($uploadsDir . $fileName);
                }
            } else {
                die('Error with uploaded files');
            }
        }
        $certificationDemand->setDescription($_POST['description']);
        $certificationDemand->setUserId($user->getId());
        return $certificationDemand->save();

    }

    public function certificationRequest()
    {
        $user = new UserModel();
        $view = new View("certification-request", "front");
        $demandAlreadyExist = 0;
        $isRequestCreated = 0;
        $session = Session::getByToken();
        if (!is_null($session)){
            $view->assign("connectedUser", true);
            $user = $user->setId($session->getUserId());
            $certificationDemand = new CertificationModel();
            $isDemandExist = $certificationDemand->select([
                "certification" => [
                    "args" => ["id"],
                    "params" => [
                        "userId" => $user->getId(),
                        "status" => 'inDemand'
                    ]
                ]
            ]);
            if (empty($isDemandExist)) {
                $demandAlreadyExist = 1;
                $view->assign("demandAlreadyExist", $demandAlreadyExist);
                if (!empty($_POST)) {
                    $isRequestCreated = $this->sendCertificationRequest($certificationDemand, $user);
                }
                $view->assign("isRequestCreated", $isRequestCreated);
                $view->assign("certification", $certificationDemand);
                return;
            }
            $view->assign("demandAlreadyExist", $demandAlreadyExist);
            return;
        }
        
    }

    // -------------- API calls ------------- //

    public function getCertifications()
    {
        Server::ensureHttpMethod('GET');
        $certifications = New CertificationModel();
        $result = $certifications->select([
            "user" => [
                "args" => ["email"],
                "ij" => ["certification"]
                ],
            "certification" => [
                "args" => ["id", "status", "createdAt"],
            ]
        ]);
        if($result) {
            http_response_code(200);
        }else {
            Logger::writeErrorLog("Error while fetching certifications.");
            http_response_code(500);
        }

        header('Content-Type: application/json; charset=utf-8');
        echo json_encode($result);
    }

    public function getCertificationById()
    {
        $content = file_get_contents('php://input');
        $_POST = json_decode($content, true);
        Server::ensureHttpMethod('POST');

        $id = $_POST['id'] ?? null;
        $certification = new CertificationModel();
        $result = $certification->select(
            [
                "user" => [
                    "args" => ["id", "email", "firstname", "lastname"],
                    "ij" => ["certification"]
                ],
                "certification" => [
                    "args" => ["id", "description", "idDocumentPath", "officialDocumentPath", "status", "createdAt"],
                    "params" => ["id" => $id]
                ]
            ]
        );
        if($result) {
            http_response_code(200);
            header('Content-Type: application/json; charset=utf-8');
            echo json_encode($result);
        }else {
            Logger::writeErrorLog("Error while fetching certifications id: $id.");
            http_response_code(500);
        }
    }

    public function modifyCertificationStatus() {
        $content = file_get_contents('php://input');
        $_POST = json_decode($content, true);
        Server::ensureHttpMethod('PUT');

        $certificationId = $_POST['certification_id'] ?? null;
        $certificationStatus = $_POST['certification_status'] ?? null;
        $userId = $_POST['user_id'] ?? null;
        if (is_null($certificationId) && is_null($certificationStatus) && is_null($userId)){
            http_response_code(406);
            die();
        }

        $certification = new CertificationModel();
        try {
            $certification = $certification->setId($certificationId);
            $certification->setStatus($certificationStatus);
            $certification->save();
            $user = new UserModel();
            $user = $user->setId($userId);
            if ($certificationStatus === 'approved') {
                $user->setStatus('chief');
                $user->save();
            }
            $mail = Mail::getInstance();
            $mail->certificationValidation($user->getEmail(), $user->getFirstname(), $user->getLastname(), $certificationStatus);
            http_response_code(200);
        }catch (\Exception $e) {
            Logger::writeErrorLog("Error while updating status of user with id: $userId.");
            http_response_code(500);
        }
    }
}