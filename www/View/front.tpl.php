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
    <img class="burger-menu" src="../assets/img/logo/burger-menu.svg" alt="">

    <?php include "View/" . $this->view . ".view.php"; ?>

</body>



<style>

    html {
        --bg-color: <?= '#222222' ?>;
        --ph-color: <?= '#AAAAAA' ?>;
        --text-color: <?= '#EEEEEE' ?>;
        --shadow-color: <?= '#FFFFFF26' ?>;
        --btn-color: <?= 'green' ?>;
        --btn-color-light: <?= 'green' ?>;
        --font-family: <?= 'Open Sans' ?>;
    }
    

    /* *:not(div), .navbar-front {
        background-color: var(--bg-color);
    }

    * {
        color: var(--text-color);
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
    } */

   

    

</style>

</html>