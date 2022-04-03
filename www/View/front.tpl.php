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
            <a class="link" href="/login"><img src="../assets/img/logo/users.svg" alt="" width="24px">Se Connecter</a>
            <a class="link" href="/register"><img src="../assets/img/logo/users.svg" alt="" width="24px">S'inscrire</a>
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
        --shadow-color: <?= $theme->getShadowColor(); ?>;
        --btn-color: <?= $theme->getBtnColor(); ?>;
        --btn-color-light: <?= $theme->getBtnColorLight(); ?>;
        --font-family: <?= $theme->getFontFamily(); ?>;
    }
    
    *:not(div), .navbar-front {
        background-color: var(--bg-color);
    }

    * {
        color: var(--text-color);
    }

    svg circle {
        fill: var(--btn-color);
    }

    .card {
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