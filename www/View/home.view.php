<section class="pt-20 grid container">
    <h1 class="big-h1 py-8">Accueil</h1>


    <section class="grid mb-12">
        <h1 class="h2 pb-6">Nos dernières recettes</h1>
        <div class="list-articles">

            <?php for($i = 0; $i < 6; $i++): ?>
            <article class="card card-article hover-up br-6 ">
                <div class="img-article" style="background-image: url(assets/img/articles/article-pate.svg)"></div>
                <div class="p-6">
                    <h1 class="h3">nom de l'article</h1>
                    <p>ceci est la description de l'article</p>
                </div>
            </article>         
            <?php endfor; ?>     
        </div>
    </section>

    <section class="grid mb-12">
        <h1 class="h2 pb-6">Nos catégories</h1>
        <div class="row g-6">

                
            <?php
            $categories = ['Français', 'Vietnamien', 'Chinois', 'Japonais', 'algérienne'];
            foreach($categories as $category): ?>
            <a href="#" class="btn btn-outline-pink br-12"> <?= $category ?> </a>         
            <?php endforeach; ?>          
        </div>
    </section>

    <section class="grid pb-12">
        <h1 class="h2 pb-6">Nos recettes les plus aimés</h1>
        <div class="list-articles">

            <?php for($i = 0; $i < 6; $i++): ?>
            <article class="card card-article hover-up br-6 ">
                <div class="img-article" style="background-image: url(assets/img/articles/article-pate.svg)"></div>
                <div class="p-6">
                    <h1 class="h3">nom de l'article</h1>
                    <p>ceci est la description de l'article</p>
                </div>
            </article>
            
            <?php endfor; ?>
            
        </div>
    </section>

</section>
