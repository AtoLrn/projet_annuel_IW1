<?php

require_once __DIR__ . "/Page.php";


class Index extends Page
{
    public function render()
    {
        $this->pageContent = "
        <section>
            <article>
                <h1>Croc Miam CMS</h1>
                <h2>Bienvenue sur le Site du CMS croc miam</h2>
            </article>
        </section>
        <section>
            <article>
                <h1>Open Source</h1>
                <h2>Ce CMS est open source et libre d'utilisation et modifications</h2>
            </article>
        </section>
        ";
        parent::render();
    }
}