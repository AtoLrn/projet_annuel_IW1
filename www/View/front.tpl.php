<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <title>Template FRONT</title>
    <meta name="description" content="Description de ma page">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="../assets/dist/main.css">
    <script type="text/javascript" src="../assets/dist/main.js"></script>
</head>

<body class="grid">
    <header class="navbar-front grid h-px-20 mb-5">
        <nav class="row j-bet">
            <div><img height="52px" src="assets/img/logo/croc-miam.svg" alt=""></div>
            
            <ul>
                <li>Nos Recettes</li>
                <li>Les Cuisiniers</li>
                <li>Vos Abonnements</li>
            </ul>
            <section>
            <a class="link" href="/register-login?form=login"> <?php include "assets/img/logo/users.php"; ?>Se Connecter</a>
            <a class="link" href="/register-login?form=register"> <?php include "assets/img/logo/users.php"; ?> S'inscrire</a>
            </section>
        </nav>
    </header>
    <?php include "assets/img/logo/burger-menu.php"; ?>
    <?php include "View/" . $this->view . ".view.php"; ?>
    

</body>



<style>
     <?php
        use App\Model\Theme; 
        $theme = new Theme();
        $themeSelected = $theme->select([
            "theme" => [
                "args" => ["id"],
                "params" => ['selected' => 1] 
            ]
        ]);
        $theme = $theme->setId($themeSelected[0]['theme_id']);
    ?>

    html {
        --bg-color: <?= $theme->getBgColor(); ?>;
        --ph-color: <?= $theme->getPhColor(); ?>;
        --text-color: <?= $theme->getTextColor(); ?>;
        --shadow-color: <?= $theme->getShadowColor() . "30"; ?>;
        --btn-color: <?= $theme->getBtnColor(); ?>;
        --btn-color-shadow: <?= $theme->getBtnColor() . "5"; ?>;
        --btn-color-light: <?= $theme->getBtnColorLight(); ?>;
        --font-family: <?= $theme->getFontFamily(); ?>;
    }
    
    *:not(div), .navbar-front {
        background-color: var(--bg-color);
    }

    *, .input {
        color: var(--text-color);
        font-family: var(--font-family),  sans-serif;
    }


    .bulle-1 ellipse, .bulle-3 ellipse{
        fill: var(--btn-color) !important;
    }

    .bulle-2 ellipse, .bulle-4 ellipse {
        fill: var(--btn-color-light) !important;
    }

    .text-color {
        fill: var(--text-color) !important;
    }

    .input-pink:focus {
        border: 1px solid var(--btn-color);
        background-color: var(--btn-color-shadow);
    }

    .card, .navbar-front {
        box-shadow: 0px 4px 16px 2px var(--shadow-color);
    }

    .btn:not(.selector-button) {
        border: 1px solid var(--btn-color);
        background-color: var(--btn-color) !important;
        color: var(--bg-color);

    }
    .btn:not(.selector-button):hover {
        background-color: var(--bg-color) !important; 
        color: var(--btn-color); 
    }

    .selector-button {
        background-color: var(--bg-color);    
        border: 1px solid var(--text-color);
        color: var(--text-color);
    }
    .selector-button.selected {
        background-color: var(--bg-color); 
        border: 1px solid var(--btn-color);
        color: var(--btn-color); 
    } 

   

    

</style>

</html>