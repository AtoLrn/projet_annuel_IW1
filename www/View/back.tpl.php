<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <title>Template BACK</title>
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
        <header class="navbar p-6 grid">
            <div class="col g-5">
                <a href=""><img src="../assets/img/logo/croc-miam.svg" alt=""></a>
                <div class="bd-t-1 bd-light-gray mb-11"></div>
                <nav class="grid">
                    <ul class="col g-9 grid">
                        <li class="row g-3"> 
                            <?php include "assets/img/logo/users.php"; ?> 
                            <a href="/list" class="link-black">Utilisateurs</a> 
                        </li>
                        <li class="row g-3">
                            <?php include "assets/img/logo/articles.php"; ?>
                            <a href="/list?q=articles" class="link-black">Articles</a> 
                        </li>
                        <li class="row g-3"> 
                            <?php include "assets/img/logo/comments.php"; ?>
                            <a href="/list?q=comments" class="link-black">Commentaires</a>
                        </li>
                        <li class="row g-3"> 
                            <?php include "assets/img/logo/themes.php"; ?>
                            <a href="/list-themes" class="link-black">Mon thème</a>
                        </li>
                        <li class="row g-3"> 
                            <?php include "assets/img/logo/settings.php"; ?>
                            <a href="/settings" class="link-black">Paramètres</a>
                        </li>
                    </ul>
                </nav>
                <img class="burger-menu" src="../assets/img/logo/burger-menu.svg" alt="">
            </div>
        </header>
        <main class="grid main">
            <?php include "View/" . $this->view . ".view.php"; ?>
        </main>
</body>

</html>