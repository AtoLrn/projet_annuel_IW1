<div class="grid p-10 xs-p-6 col a-start apparition">
    <h1 class="h1 mb-9">Mes Thèmes</h1>

    <section class="grid row g-9">     
        <?php  foreach($themes as $key => $theme): ?>
            <article class="grid col card p-6 g-3 w-em-5 xs-w-per-20">
                <div class="row j-bet a-center">
                    <h1 class="h2 mb-2"><?= $theme->getName() ?></h1>
                    <a href="/theme?id=<?= $theme->getId() ?>">
                    <?php include "assets/img/logo/edit.php"; ?>
                    </a>
                </div>

                <div>
                    <p><strong>Police :</strong><span class="ml-2"><?= $theme->getFontFamily() ?></span></p>
                </div>
                <div class="grid">
                    <strong >Couleur de fond :</strong> <br>
                    <div class="row g-3 a-center mt-1">
                        <div class="h-px-6 w-px-6 bd-1" style="background-color: <?= $theme->getBgColor() ?>"></div>
                        <?= $theme->getBgColor() ?>
                    </div>
                </div>
                <div class="grid">
                    <strong >Couleur des placeholders :</strong> <br>
                    <div class="row g-3 a-center mt-1">
                        <div class="h-px-6 w-px-6 bd-1" style="background-color: <?= $theme->getPhColor() ?>"></div>
                        <?= $theme->getPhColor() ?>
                    </div>
                </div>
                <div class="grid">
                    <strong >Couleur du texte :</strong> <br>
                    <div class="row g-3 a-center mt-1">
                        <div class="h-px-6 w-px-6 bd-1" style="background-color: <?= $theme->getTextColor() ?>"></div>
                        <?= $theme->getTextColor() ?>
                    </div>
                </div>
                <div class="grid">
                    <strong >Couleur vive (boutons) :</strong> <br>
                    <div class="row g-3 a-center mt-1">
                        <div class="h-px-6 w-px-6 bd-1" style="background-color: <?= $theme->getBtnColor() ?>"></div>
                        <?= $theme->getBtnColor() ?>
                    </div>
                </div>
                <div class="grid">
                    <strong >Couleur allégé (boutons) :</strong> <br>
                    <div class="row g-3 a-center mt-1">
                        <div class="h-px-6 w-px-6 bd-1" style="background-color: <?= $theme->getBtnColorLight() ?>"></div>
                        <?= $theme->getBtnColorLight() ?>
                    </div>
                </div>
                <div class="grid">
                    <strong >Couleur des ombres :</strong> <br>
                    <div class="row g-3 a-center mt-1">
                        <div class="h-px-6 w-px-6 bd-1" style="background-color: <?= $theme->getShadowColor() ?>"></div>
                        <?= $theme->getShadowColor() ?>
                    </div>
                </div>

                <?php if($theme->getSelected() == false): ?>
                
                <form class="col" action="/list-themes" method="POST">
                    <input type="hidden" name="csrf_token" value="<?= $_SESSION['csrf_token'] ?>">
                    <input type="hidden" name="idTheme" value="<?= $theme->getId() ?>">
                    <input class="btn btn-pink p-2 a-self-end"  type="submit" value="Selectionner">
                </form> 

                <?php else:?>
                
                <div class="mt-5 c-pink row j-end g-3" >
                    <p class="c-pink">Selectionné</p>
                </div>
                
                <?php endif; ?>
            </article>
        <?php endforeach; ?>    
    </section>

    <a href="/theme" class="btn btn-pink mt-9 xs-w-per-20">Ajouter un nouveau theme</a>

    <?php if(isset($_GET['success'])): ?>
        <div class="success-msg mt-10"><?= $_GET['success'] == "add" ? "Thème mis à jour avec succès." : "Thème supprimé avec succès." ?></div>
    <?php elseif(isset($_GET['error'])): ?>
        <div class="error-msg mt-10"> <?= $_GET['error'] == 'add' ? "Une erreur est survenu lors de l'ajout du thème." : "Une erreur est survenu lors de la suppression du thème." ?></div>
    <?php endif; ?>
    
</div>