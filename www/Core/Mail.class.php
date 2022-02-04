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

}