<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <title>Backoffice - <?= WEBSITENAME ?></title>
    <meta name="description" content="Description de ma page">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <link rel="stylesheet" href="../assets/dist/main.css">
    <script type="text/javascript" src="../assets/dist/main.js"></script>
    <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.11.4/css/jquery.dataTables.css">
    <script type="text/javascript" charset="utf8" src="https://cdn.datatables.net/1.11.4/js/jquery.dataTables.js"></script>
    <script src="https://cdn.amcharts.com/lib/5/index.js"></script>
    <script src="https://cdn.amcharts.com/lib/5/xy.js"></script>
    <script src="https://cdn.amcharts.com/lib/5/themes/Animated.js"></script>
</head>

<body>
    <div class="grid" >
        <header class="navbar p-6 grid">
            <div class="col g-5">
                <a href="/dashboard"><img src=<?= $website_logo ?> alt="" width="50px" height="50px"></a>
                <div class="bd-t-1 bd-light-gray mb-11"></div>
                <nav class="grid">
                    <ul class="col g-8 grid">
                        <li class="row g-3"> 
                            <?php include "assets/img/logo/home.php"; ?> 
                            <a href="/" class="link-black">Mon site</a> 
                        </li>
                        <li class="row g-3"> 
                            <?php include "assets/img/logo/users.php"; ?> 
                            <a href="/list" class="link-black">Utilisateurs</a> 
                        </li>
                        <li class="row g-3">
                            <?php include "assets/img/logo/articles.php"; ?>
                            <a href="/list?q=article" class="link-black">Articles</a> 
                        </li>
                        <li class="row g-3">
                            <?php include "assets/img/logo/category.php"; ?>
                            <a href="/categories" class="link-black">Cat??gories</a> 
                        </li>
                        <li class="row g-3">
                            <?php include "assets/img/logo/pages.php"; ?>
                            <a href="/list?q=page" class="link-black">Pages</a> 
                        </li>
                        <li class="row g-3"> 
                            <?php include "assets/img/logo/comments.php"; ?>
                            <a href="/list?q=comment" class="link-black">Commentaires</a>
                        </li>
                        <li class="row g-3"> 
                            <?php include "assets/img/logo/ingredients.php"; ?>
                            <a href="/list?q=ingredient" class="link-black">Ingr??dients</a>
                        </li>
                        <li class="row g-3"> 
                            <?php include "assets/img/logo/certifications.php"; ?>
                            <a href="/list?q=certification" class="link-black">Certifications</a>
                        </li>
                        <li class="row g-3"> 
                            <?php include "assets/img/logo/themes.php"; ?>
                            <a href="/list-themes" class="link-black">Mon th??me</a>
                        </li>
                        <li class="row g-3"> 
                            <?php include "assets/img/logo/settings.php"; ?>
                            <a href="/settings" class="link-black">Param??tres</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <?php include "assets/img/logo/burger-menu.php"; ?>
        </header>
        
        <main class="grid main">
            <?php include "View/" . $this->view . ".view.php"; ?>
        </main>
</body>

</html>