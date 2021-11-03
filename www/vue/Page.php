<?php

class Page
{
    protected $pageName = "";
    protected $pageContent = "";



    public function render()
    {
        echo "
        <html lang=\"fr\">
            <head>
                <meta charset=\"UTF-8\"/>
                <title>$this->pageName</title>
                <meta name=\"description\" content=\"Super Site\"/>
            </head>
            <body>
            
                $this->pageContent
            </body>
        </html>";
    }
}