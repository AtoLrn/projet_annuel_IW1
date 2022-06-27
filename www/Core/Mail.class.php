<?php

namespace App\Core;

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'Libs/PHPMailer-master/src/Exception.php';
require 'Libs/PHPMailer-master/src/PHPMailer.php';
require 'Libs/PHPMailer-master/src/SMTP.php';

class Mail
{
    protected $mail;
    private static $_instance;

    public function __construct()
    {
        try {
            $confMail = new PHPMailer(true);
            $confMail->isSMTP();
            $confMail->Port = 587;
            $confMail->Host = 'smtp.gmail.com';
            $confMail->SMTPAuth = true;
            $confMail->SMTPSecure = 'tls';

            $confMail->Username = MAILUSERNAME;
            $confMail->Password = MAILPASSWORD;

            $confMail->setFrom(MAILUSERNAME, FIRSTNAME . ' ' . LASTNAME);

            $this->mail = $confMail;
        }catch (Exception $error){
            echo $error;
        }
    }

    public static function getInstance(): Mail
    {
        if(is_null(self::$_instance)){
            self::$_instance = new Mail();
        }
        return self::$_instance;
    }

    /**
     * @throws Exception
     */
    public function mailValidation(string $userMail, string $firstName, string $lastName, string $token)
    {
        try {
            $this->mail->addAddress($userMail, $firstName . ' ' . $lastName);
            $this->mail->isHTML(true);                                  //Set email format to HTML
            $this->mail->Subject = 'Welcome on ' . WEBSITENAME . ' ' . $firstName;
            $this->mail->Body = '<div style="display: flex; flex-direction: column; justify-content: center">
                                    <h1>Merci pour votre inscription!</h1>
                                    <p>Afin de confirmer votre inscription, veuillez cliquer sur le lien ci-dessous</p>
                                    <a href="' . WEBSITEURL . '/mail-validation?token=' . $token . '">ICI</a>
                                    <span>Si vous n\'êtes pas à l\'origine de cette inscription veuillez ignorer ce mail</span>
                                </div>';
            $this->mail->send();
        }catch (Exception $error){
            echo $error;
        }
    }

    public function certificationValidation(string $userMail, string $firstName, string $lastName, string $certificationStatus) {
        try {
            $this->mail->addAddress($userMail, $firstName . ' ' . $lastName);
            $this->mail->isHTML(true);
            $this->mail->Subject = 'Résultat de la demande de certification';
            if ($certificationStatus === 'approved') {
                $this->mail->Body = '<p>Suite à votre demande de certification sur notre plateforme, nous avons le plaisir de vous annoncer que cette dernière a été accepté. 
                                        Vous avez désormais la possibilité de créer des idées de recettes dans le thème de notre plateforme afin de le partager à notre communauté. </p>
                                     <br>
                                     <br>
                                     <p>Merci pour la contribution que vous apportez</p>
                                     <br>
                                     <br>
                                     <p>Cordialement,</p>
                                     <br>
                                     <p>L\'équipe' . WEBSITENAME . '</p>';
            } else if ($certificationStatus === 'refused') {
                $this->mail->Body = '<p>Suite à votre demande de certification sur notre plateforme, nous avons le regret de vous annoncer que cette dernière a été refusé, car il a été jugé
                                        que vos compétences ne correspondent pas aux attentes pour créer du contenu sur notre site.</p>
                                     <br>
                                     <br>
                                     <p>Cordialement,</p>
                                     <br>
                                     <p>L\'équipe' . WEBSITENAME . '</p>';
            }
            $this->mail->send();
        }catch (Exception $error){
            echo $error;
        }
    }

    /**
     * @throws Exception
     */
    public function passwordForget(string $userMail, string $firstName, string $lastName, string $token)
    {
        try {
            $this->mail->addAddress($userMail, $firstName . ' ' . $lastName);
            $this->mail->isHTML(true);                                  //Set email format to HTML
            $this->mail->Subject = 'Demande de changement de mot de passe sur ' . WEBSITENAME;
            $this->mail->Body = '<div style="display: flex; flex-direction: column; justify-content: center">
                                    <p>Afin de modifier votre mot de passe, veuillez cliquer sur le lien ci-dessous</p>
                                    <a href="' . WEBSITEURL . '/modify-password?token=' . $token . '">ICI</a>
                                    <span>Si vous n\'êtes pas à l\'origine de cette demande veuillez ignorer ce mail</span>
                                </div>';
            $this->mail->send();
        }catch (Exception $error){
            echo $error;
        }
    }

}