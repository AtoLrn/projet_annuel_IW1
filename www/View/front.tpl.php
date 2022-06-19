<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <title> <?= WEBSITENAME ?> </title>
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
                <li><a href="/recettes" class="link-black">Nos Recettes</a></li>
                <li><a href="/cuisiniers" class="link-black">Nos Cuisiniers</a></li>
                <?php if($userStatus === "admin"): ?>
                    <li><a href="/dashboard" class="link-black">Backoffice</a></li>
                <?php else: ?>
                    <li><a href="#" class="link-black">Vos Abonnements <?= $userStatus ?></a></li>
                <?php endif; ?>
            </ul>
            <section>     
            <?php           
            if(!is_null($userSession)): ?>
                <a class="link" href=<?= "/profile?userId=" . $userSession->getUserId() ?>> <?php include "assets/img/logo/users.php"; ?>Mon Profil </a>
                <a class="link" href="/logout"> <?php include "assets/img/logo/logout.php"; ?>Se deconnecter</a>
            <?php else: ?>
                <a class="link" href="/register-login?form=login"> <?php include "assets/img/logo/users.php"; ?>Se Connecter</a>
                <a class="link" href="/register-login?form=register"> <?php include "assets/img/logo/users-outline.php"; ?> S'inscrire</a>
            <?php endif; ?>
            </section>
        </nav>
        <ul class="col a-start mobile">
        <li><a href="/recettes">Nos Recettes</a></li>
        <li><a href="/cuisiniers">Les Cuisiniers</a></li>
        <?php if($userStatus === "admin"): ?>
            <li><a href="/dashboard" class="link-black">Backoffice</a></li>
        <?php else: ?>
            <li><a href="#" class="link-black">Vos Abonnements <?= $userStatus ?></a></li>
        <?php endif; ?>
        </ul>
    </header>
    <?php include "assets/img/logo/burger-menu.php"; ?>
    <?php include "View/" . $this->view . ".view.php"; ?>
</body>

<style>
     <?php
     use App\Model\Theme;
        $theme = new Theme();
        $theme = $theme->select2('theme', ['*'])
            ->where('selected', 1)
            ->fetch();
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

</style>

</html>