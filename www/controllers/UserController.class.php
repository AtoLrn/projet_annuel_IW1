<?php

require_once __DIR__ . "./../vue/Page.php";

Class UserController extends Page
{
    public function login()
    {
        $this->pageContent = "
        <section>
            <input type='text' placeholder='Votre pseudo'>
            <input type='password' placeholder='Mot de passe'>
            <input type='submit' value='Se connecter'>
        </section>
       
        ";
        parent::render();
    }

    public function logout()
    {
        $this->pageContent = "
        <section>
            <p>Tu es partis :(</p>
        </section>
       
        ";
        parent::render();
    }
}