<?php

namespace App\Controller;

use App\Core\View;
use App\Model\Theme as ThemeModel;
use App\Core\Verificator;


class Theme
{
    public function settings()
    {
        $theme = new ThemeModel();  
        $view = new View("settings", "back");
        if(isset($_GET['id']) && is_numeric($_GET['id'])) {
            $tmp = $theme->setId($_GET['id']);
            if(!is_null($tmp)) {
                $theme = $tmp;
                $view->assign("id", $_GET['id']);    
            }         
        }
        $view->assign("theme", $theme);
    
        if(!empty($_POST)) {
            $msg = $this->saveTheme($theme);
        } 
        $view->assign('msg', $msg);        
    }

    private function saveTheme($theme): void
    {      
        $result = Verificator::checkForm($theme->getThemeForm(), $_POST);
        if(empty($result)){
            $theme->setName($_POST['name']);
            $theme->setFontFamily($_POST['fontFamily']);
            $theme->setBgColor($_POST['bgColor']);
            $theme->setTextColor($_POST['textColor']);
            $theme->setPhColor($_POST['phColor']);
            $theme->setBtnColor($_POST['btnColor']);
            $theme->setBtnColorLight($_POST['btnColorLight']);
            $theme->setShadowColor($_POST['shadowColor']);
            return $theme->save();         
        }  
        return $result;                
    }

}