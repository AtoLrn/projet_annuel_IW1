<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Template BACK</title>
    <meta name="description" content="Description de ma page">
    <link rel="stylesheet" href="../assets/css/dist/main.css">
</head>
<body>
    <div class="grid">
        <div class="row">
            <header class="navbar p-6 grid">
                <div class="col g-5">
                    <a href=""><img src="../assets/img/logo/croc-miam.svg" alt=""> </a>
                    <div class="bd-t-1 bd-light-gray mb-11"></div>
                    <nav class="grid">
                        <ul class="col g-9">
                            <li> <img src="" alt=""> <a href="#" class="link-black">Utilisateurs</a> </li>
                            <li> <img src="" alt=""> <a href="#" class="link-black">Articles</a> </li>
                            <li> <img src="" alt=""> <a href="#" class="link-black">Commentaires</a> </li>
                        </ul>
                    </nav>
                </div>
            </header >
            <main class="col-lg-4"> 
                <?php include "View/".$this->view.".view.php"; ?>
            </main>
        </div>
    </div>
</body>
</html>