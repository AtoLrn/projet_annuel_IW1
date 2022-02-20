<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <title>Template FRONT</title>
    <meta name="description" content="Description de ma page">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="../assets/dist/main.css">
    <script src="https://cdn.jsdelivr.net/npm/@editorjs/editorjs@latest"></script>
</head>

<body>
    <header class="navbar-front grid h-px-20 px-20 mb-5">
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
    <?php include "View/" . $this->view . ".view.php"; ?>
</body>

</html>