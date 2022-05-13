<div class="grid p-10 xs-p-6 col a-start">
    <h1 class="h1 mb-9">Mes Thèmes</h1>

    <section class="grid row g-9">     
        <?php  foreach($themes as $key => $theme): ?>
            <article class="grid col card p-6 g-3 w-em-5 xs-w-per-20">
                <div class="row j-bet a-center">
                    <h1 class="h2 mb-2"><?= $theme['theme_name'] ?></h1>
                    <a href="/theme?id=<?= $theme['theme_id'] ?>">
                    <?php include "assets/img/logo/edit.php"; ?>
                    </a>
                </div>

                <div>
                    <p><strong>Police :</strong><span class="ml-2"><?= $theme['theme_fontFamily'] ?></span></p>
                </div>
                <div class="grid">
                    <strong >Couleur de fond :</strong> <br>
                    <div class="row g-3 a-center mt-1">
                        <div class="h-px-6 w-px-6 bd-1" style="background-color: <?= $theme['theme_bgColor'] ?>"></div>
                        <?= $theme['theme_bgColor'] ?>
                    </div>
                </div>
                <div class="grid">
                    <strong >Couleur des placeholders :</strong> <br>
                    <div class="row g-3 a-center mt-1">
                        <div class="h-px-6 w-px-6 bd-1" style="background-color: <?= $theme['theme_phColor'] ?>"></div>
                        <?= $theme['theme_phColor'] ?>
                    </div>
                </div>
                <div class="grid">
                    <strong >Couleur du texte :</strong> <br>
                    <div class="row g-3 a-center mt-1">
                        <div class="h-px-6 w-px-6 bd-1" style="background-color: <?= $theme['theme_textColor'] ?>"></div>
                        <?= $theme['theme_textColor'] ?>
                    </div>
                </div>
                <div class="grid">
                    <strong >Couleur vive (boutons) :</strong> <br>
                    <div class="row g-3 a-center mt-1">
                        <div class="h-px-6 w-px-6 bd-1" style="background-color: <?= $theme['theme_btnColor'] ?>"></div>
                        <?= $theme['theme_btnColor'] ?>
                    </div>
                </div>
                <div class="grid">
                    <strong >Couleur allégé (boutons) :</strong> <br>
                    <div class="row g-3 a-center mt-1">
                        <div class="h-px-6 w-px-6 bd-1" style="background-color: <?= $theme['theme_bgColorLight'] ?>"></div>
                        <?= $theme['theme_btnColorLight'] ?>
                    </div>
                </div>
                <div class="grid">
                    <strong >Couleur des ombres :</strong> <br>
                    <div class="row g-3 a-center mt-1">
                        <div class="h-px-6 w-px-6 bd-1" style="background-color: <?= $theme['theme_shadowColor'] ?>"></div>
                        <?= $theme['theme_shadowColor'] ?>
                    </div>
                </div>

                <?php if($theme['theme_selected'] == false): ?>
                
                <form class="col" action="/list-themes" method="POST">
                    <input type="hidden" name="idTheme" value="<?= $theme['theme_id'] ?>">
                    <input class="btn btn-pink p-2 a-self-end"  type="submit" value="Selectionner">
                </form> 

                <?php else:?>
                
                <p class="mt-5 c-pink" style="text-align: right;">Selectionné</p>
                
                <?php endif; ?>
            </article>
        <?php endforeach; ?>    
    </section>

    <a href="/theme" class="btn btn-pink mt-9 xs-w-per-20">Ajouter un nouveau theme</a>

    <?php if(isset($_GET['success'])): ?>
    <div class="p-3 mt-9 bd-1 bd-success c-success br-2 xs-w-per-20"> 
        <?= $_GET['success'] == "add" ? "Thème ajouté avec succès." : "Thème supprimé avec succès." ?> 
    </div>
    <?php endif; ?>

    <?php if(isset($_GET['error'])): ?>
    <div class="p-3 mt-9 bd-1 bd-light-pink c-light-pink br-2 xs-w-per-20"> 
        <?= $_GET['error'] == 'add' ? "Une erreur est survenu lors de l'ajout du thème." : "Une erreur est survenu lors de la suppression du thème." ?> 
    </div>
    <?php endif; ?>
</div>