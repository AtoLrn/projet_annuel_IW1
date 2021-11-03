<?php

require_once __DIR__ . "./../vue/Page.php";


class ErrorController extends Page
{
    public function error404()
    {
        http_response_code(404);
        $this->pageContent = "
        <section>
            <article>
                <h1>ERROR OUIN</h1>
                <h2>Bienvenue sur le Site du CMS croc miam</h2>
            </article>
        </section>
       
        ";
        parent::render();
    }
}