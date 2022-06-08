<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <title> Crom Miam </title>
    <meta name="description" content="Description de ma page">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="../assets/dist/main.css">
    <script type="text/javascript" src="../assets/dist/main.js"></script>
    <script src="https://cdn.amcharts.com/lib/5/index.js"></script>
    <script src="https://cdn.amcharts.com/lib/5/xy.js"></script>
    <script src="https://cdn.amcharts.com/lib/5/themes/Animated.js"></script>
</head>

<body class="grid">
    <header class="navbar-front grid h-px-20 mb-5">
        <nav class="row j-bet">
            <a href="/" class="link"><img height="52px" src="assets/img/logo/croc-miam.svg" alt="logo"></a>         
            <ul>
                <li><a href="/rechercher">Nos Recettes</a></li>
                <li><a href="#">Les Cuisiniers</a></li>
                <li><a href="#">Vos Abonnements</a></li>
            </ul>
            <section>
            <?php
            use App\Model\Session;
            $session = null;
            if (isset($_SESSION['token'])) {
                $session = Session::getByToken();
            }
                        
            if(!is_null($session)): ?>
                <a class="link" href="/profile"> <?php include "assets/img/logo/users.php"; ?>Mon Profil </a>
                <a class="link" href="/logout"> <?php include "assets/img/logo/logout.php"; ?>Se deconnecter</a>
            <?php else: ?>
                <a class="link" href="/register-login?form=login"> <?php include "assets/img/logo/users.php"; ?>Se Connecter</a>
                <a class="link" href="/register-login?form=register"> <?php include "assets/img/logo/users-outline.php"; ?> S'inscrire</a>
            <?php endif; ?>
            </section>
        </nav>
        <ul class="col a-start mobile">
        <li><a href="#">Nos Recettes</a></li>
        <li><a href="#">Les Cuisiniers</a></li>
        <li><a href="#">Vos Abonnements</a></li>
        </ul>
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
        --shadow-color-hover: <?= $theme->getShadowColor() . "40"; ?>;
        --btn-color: <?= $theme->getBtnColor(); ?>;
        --btn-outline: <?= $theme->getBtnColor() . "40"; ?>;
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

    .card.hover-up:hover {
        box-shadow: 2px 4px 16px 3px var(--shadow-color-hover);
    }

    .btn-pink {
        border: 1px solid var(--btn-color);
        background-color: var(--btn-color) !important;
        color: var(--bg-color);

    }
    .btn-pink:hover {
        background-color: var(--bg-color) !important; 
        color: var(--btn-color); 
    }

    .btn-outline-pink {
        border: 1px solid var(--btn-color);
        background-color: var(--background-color) !important;
        color: var(--btn-color);
    }
    .btn-outline-pink:hover {
        background: var(--btn-outline) !important;
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