<?php

namespace App\Core;

use PHPMailer\PHPMailer\PHPMailer;
use App\Model\User;
use App\Model\Article;
use PHPMailer\PHPMailer\Exception;
use App\Core\Logger;


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
            Logger::writeErrorLog("Error Email: $error.");
        }
    }

    public static function getInstance(): Mail
    {
        if(is_null(self::$_instance)){
            self::$_instance = new Mail();
        }
        return self::$_instance;
    }

    public function createHtmlBody(string $body): string
    {
        return '<!DOCTYPE html>
        <html lang="fr">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Mail ' .WEBSITENAME. '</title>
            <style type="text/css">
                @import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap");

                * {
                    font-family: Open Sans;
                }
                h1 {
                    font-size: 32px;
                    font-weight: 600;
                }
                p {
                    font-size: 16px;
                }

                h3 {
                    font-size: 18px;
                    font-weight: 400;
                }
                span {
                    color: #ff5e84;
                    font-weight: bold;
                }
                a {
                    text-decoration: none;
                }
            </style>
        </head>
        <body>
            '.$body.'
        </body>
        </html>';
    }


    /**
     * @throws Exception
     */
    public function mailValidation(string $userMail, string $firstName, string $lastName, string $token)
    {
        try {
            $this->mail->addAddress($userMail, $firstName . ' ' . $lastName);
            $this->mail->isHTML(true);  
            $this->mail->CharSet = "UTF-8"; 
            $this->mail->Encoding = 'base64';                                //Set email format to HTML
            $this->mail->Subject = 'Bienvenue sur ' . WEBSITENAME;
            $body = '<section>
                        <h1>Bonjour ' . $firstName . ' !</h1>
                        <h3>Merci pour votre inscription sur <span>' . WEBSITENAME . '</span></h3>
                        <h3>Afin de confirmer votre inscription, veuillez cliquer: <a href="' . WEBSITEURL . '/mail-validation?token=' . $token . '"><span>ici</span></h3>
                        <p>Si vous n\'êtes pas à l\'origine de cette inscription veuillez ignorer ce mail</p>
                        <p>Cordialement,</p>
                        <p>L\'équipe <span>' . WEBSITENAME . '</span></p>
                    </section>';
            $this->mail->Body = $this->createHtmlBody($body);
            $this->mail->send();
        }catch (Exception $error){
            Logger::writeErrorLog("Error Email: $error.");
        }
    }

    public function certificationValidation(string $userMail, string $firstName, string $lastName, string $certificationStatus) {
        try {
            $this->mail->addAddress($userMail, $firstName . ' ' . $lastName);
            $this->mail->isHTML(true);
            $this->mail->CharSet = "UTF-8"; 
            $this->mail->Encoding = 'base64';                                //Set email format to HTML
            $this->mail->Subject = 'Résultat de la demande de certification';
            $body = "";
            if ($certificationStatus === 'approved') {
                $body = '<section>
                            <h1>Bonjour ' . $firstName . ' !</h1>
                            <h3>Suite à votre demande de certification sur notre plateforme, nous avons le plaisir de vous annoncer que cette dernière a été accepté. 
                            Vous avez désormais la possibilité de créer des idées de recettes dans le thème de notre plateforme afin de le partager à notre communauté. </h3>
                            <p>Merci pour la contribution que vous apportez</p>
                            <p>Cordialement,</p>
                            <p>L\'équipe <span>' . WEBSITENAME . '</span></p>
                        </section>';
            } else if ($certificationStatus === 'refused') {
                $body = '<section>
                            <h1>Bonjour ' . $firstName . ' !</h1>
                            <h3>Suite à votre demande de certification sur notre plateforme, nous avons le regret de vous annoncer que cette dernière a été refusé, car il a été jugé
                            que vos compétences ne correspondent pas aux attentes pour créer du contenu sur notre site.</p>
                            <p>Cordialement,</p>
                            <p>L\'équipe <span>' . WEBSITENAME . '</span></p>
                        </section>';
            }
            $this->mail->Body = $this->createHtmlBody($body);
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
            $this->mail->isHTML(true);  
            $this->mail->CharSet = "UTF-8"; 
            $this->mail->Encoding = 'base64';  
            $this->mail->Subject = 'Demande de changement de mot de passe sur ' . WEBSITENAME;
            $body = '<section>
                        <h1>Bonjour ' . $firstName . ' !</h1>
                        <h3>Vous avez fait une demande de réinitialisation de votre mot de passe</h3>
                        <h3>Afin de le modifier, veuillez cliquer: <a href="' . WEBSITEURL . '/modify-password?token=' . $token . '"><span>ici</span></a></h3>
                        <p>Si vous n\'êtes pas à l\'origine de cette demande veuillez ignorer ce mail</p>
                        <p>Cordialement,</p>
                        <p>L\'équipe <span>' . WEBSITENAME . '</span></p>
                    </section>';
            $this->mail->Body = $this->createHtmlBody($body);
            $this->mail->send();
        }catch (Exception $error){
            Logger::writeErrorLog("Error Email: $error.");
        }
    }

    /**
     * @throws Exception
     */
    public function newMailValidation(string $userMail, string $firstName, string $lastName, string $token)
    {
        try {
            $this->mail->addAddress($userMail, $firstName . ' ' . $lastName);
            $this->mail->isHTML(true);
            $this->mail->CharSet = "UTF-8"; 
            $this->mail->Encoding = 'base64';                                    
            $this->mail->Subject = 'Confirmation de modification de votre adresse mail sur ' . WEBSITENAME;
            $body = '<section>
                        <h1>Bonjour ' . $firstName . ' !</h1>
                        <h3>Vous avez fait une demande pour changer votre email</h3>
                        <h3> Afin de valider votre nouvel email, veuillez cliquer: <a href="' . WEBSITEURL . '/new-mail-validation?token=' . $token . '"><span>ici</span></a></h3>
                        <p>Si vous n\'êtes pas à l\'origine de cette demande veuillez ignorer ce mail</p>
                        <p>Cordialement,</p>
                        <p>L\'équipe <span>' . WEBSITENAME . '</span></p>
                    </section>';
            $this->mail->Body = $this->createHtmlBody($body);
            $this->mail->send();
        }catch (Exception $error){
            Logger::writeErrorLog("Error Email: $error.");
        }
    }

    /**
     * @throws Exception
     */
    public function notification(Article $article, User $chief, User $user)
    {
        try {
            $this->mail->addAddress($user->getEmail(), $user->getFirstname() . " " . $user->getLastname());
            $this->mail->isHTML(true);     
            $this->mail->CharSet = "UTF-8"; 
            $this->mail->Encoding = 'base64';                           
            $this->mail->Subject = WEBSITENAME . ' - Une nouvelle recette a été publié';
            $body = '<section>
                        <h1>Bonjour ' . $user->getFirstname() . ' !</h1>
                        <h3>' . $chief->getFirstname() . ' ' .$chief->getLastname() . ' a publié une nouvelle recette intitulé: </h3>
                        <h3>' . $article->getTitle() . '</h3>
                        <p> description: ' . $article->getDescription() . '</p>
                        <p>L\'équipe <span>' . WEBSITENAME . '</span></p>
                    </section>';
            $this->mail->Body = $this->createHtmlBody($body);
            $this->mail->send();
        }catch (Exception $error){
            Logger::writeErrorLog("Error Email: $error.");
        }
    }

}