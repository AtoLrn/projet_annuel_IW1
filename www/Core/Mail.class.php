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

    /**
     * @throws Exception
     */
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

    /**
     * @throws Exception
     */
    public function mailConfirm(string $userMail, string $firstName, string $lastName)
    {
        try {
            $this->mail->addAddress($userMail, $firstName . ' ' . $lastName);
            $this->mail->isHTML(true);                                  //Set email format to HTML
            $this->mail->Subject = 'Welcome on ' . WEBSITENAME . ' ' . $firstName;
            $this->mail->Body = '<h1> ÉNORME TEST</h1>';
            $this->mail->send();
        }catch (Exception $error){
            echo $error;
        }
    }

}