<?php

namespace App\Controller;

use App\Core\View;
use App\Model\Theme as ThemeModel;
use App\Core\Verificator;
use App\Core\Server;


class Theme
{
    public function handleTheme(): void
    {
        $theme = new ThemeModel();  
        $view = new View("handle-theme", "back");
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
            if(is_numeric($msg)) {
                header('Location: /list-themes?success=add');
            }else {
                $view->assign('error', $msg);
            }
        } 
                
    }

    private function saveTheme($theme)
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


    public function listThemes(): void
    {
        $theme = new ThemeModel();
        if(isset($_POST['idTheme'])) {
            $themeSelected = $theme->select([
                "theme" => [
                    "args" => ["id"],
                    "params" => ['selected' => 1] 
                ]
            ]);
          
            if(!empty($themeSelected)) {
                $theme = $theme->setId($themeSelected[0]['theme_id']);
                $theme->setSelected(0);
                $theme->save();
                
            }
            $theme = $theme->setId($_POST['idTheme']);
            $theme->setSelected(1);
            $theme->save();
        }

        $themes = $theme->select([
            "theme" => [
                "args" => [ "id","name", "fontFamily", "bgColor", "textColor", "btnColor", "btnColorLight", "phColor", "shadowColor", "selected"],
            ]
        ]);
        usort($themes, function($a, $b){
            if ($a['theme_selected'] == true) {
                return -1;
            }
            if ($b['theme_selected'] == true) {
                return 1;
            }

            
        });
        $view = new View("list-themes", "back");
        $view->assign("themes", $themes);
        
    }

    public function deleteThemeById(): void 
    {
        if(isset($_GET['id']) && is_numeric($_GET['id'])) {
            $theme = new ThemeModel();
            $theme = $theme->setId($_GET['id']);
            if(!is_null($theme->getId())) {
                $theme->delete();    
            }          
            header('Location: /list-themes?success=delete');
            die();
        }
        header('Location: /list-themes?error=delete');

    }

}