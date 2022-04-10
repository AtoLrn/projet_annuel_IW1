<div class="grid p-9 xs-p-6 col a-center g-8">
    <h1 class="h1"><?= isset($id) ? "Modifier le thème : " . $theme->getName() : "Ajouter un nouveau thème"; ?></h1>

    <?php 
        $form = $theme->getThemeForm($id ?? null);
        $form['error'] = $error??[];
        $this->partialInclude("form", $form) 
    ?>
    <button class="link link-danger" onclick="displayPopUp(0)">Supprimer</button>  
<div>

<div id="pop-up" class="cont-popup grid">
    <section class="pop-up card grid p-6 col g-10">
        <p class="h2">Confirmer-vous la suppression ?</p>
        <p class="c-light-gray"> Si vous confirmez l'element sera supprimez définitivement</p>
        <div class="row j-bet g-6">
            <a class="btn btn-danger col-lg-4" href="/delete-theme?id=<?= $theme->getId(); ?>"> Supprimer </a>
            <button id="cancel" class="btn btn-outline-pink col-lg-4" onclick="closePopUp()"> Annuler </button>         
        </div>
    </section>
</div>

