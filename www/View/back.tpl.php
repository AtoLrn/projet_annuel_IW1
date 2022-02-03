<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Template BACK</title>
    <meta name="description" content="Description de ma page">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="../assets/css/dist/main.css">
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script type="text/javascript" src="../assets/js/index.js"></script>
    <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.11.4/css/jquery.dataTables.css">
    <script type="text/javascript" charset="utf8" src="https://cdn.datatables.net/1.11.4/js/jquery.dataTables.js"></script>
</head>
<body>
    <div class="grid">
        <header class="navbar p-6 grid">
            <div class="col g-5">
                <a href=""><img src="../assets/img/logo/croc-miam.svg" alt=""> </a>
                <div class="bd-t-1 bd-light-gray mb-11"></div>
                <nav class="grid">
                    <ul class="col g-9 grid">
                        <li class="row g-3"> <img src="../assets/img/logo/users.svg" alt=""> <a href="#" class="link-black">Utilisateurs</a> </li>
                        <li class="row g-3"> <img src="../assets/img/logo/articles.svg" alt=""> <a href="#" class="link-black">Articles</a> </li>
                        <li class="row g-3"> <img src="../assets/img/logo/comments.svg" alt=""> <a href="#" class="link-black">Commentaires</a> </li>
                    </ul>
                </nav>
                <img class="burger-menu" src="../assets/img/logo/burger-menu.svg" alt="">
            </div>
        </header >
        <main class="grid main"> 
            <?php include "View/".$this->view.".view.php"; ?>
        </main>
    </div>
</body>
</html>