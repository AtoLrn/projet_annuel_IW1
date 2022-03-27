<div class="grid p-10 xs-p-6">
    <h1 class="h1 mb-9">Mes Thèmes</h1>

    <section class="grid row g-9">
        
        <?php  foreach($themes as $key => $theme): ?>
            <article class="grid col card p-6 g-3 w-em-4 xs-w-per-20">
                <div class="row j-bet a-center">
                    <h1 class="h2 mb-2"><?= $theme['theme_name'] ?></h1>
                    <a href="/theme?id=<?= $theme['theme_id'] ?>">
                        <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 15.25V19H3.75L14.81 7.94L11.06 4.19L0 15.25ZM17.71 5.04C18.1 4.65 18.1 4.02 17.71 3.63L15.37 1.29C14.98 0.899998 14.35 0.899998 13.96 1.29L12.13 3.12L15.88 6.87L17.71 5.04Z" fill="#000000"/>
                        </svg>
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


                
                   
                
                
            </article>
        <?php endforeach; ?>    
    </section>

    <a href="/theme" class="btn btn-pink mt-9 w-em-4 xs-w-per-20">Ajouter un nouveau theme</a>


</div>