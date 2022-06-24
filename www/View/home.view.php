<section class="pt-20 grid container apparition">
    <h1 class="big-h1 py-8">Accueil</h1>


    <section class="grid mb-12">
        <h1 class="h2 pb-6">Nos dernières recettes</h1>
        <div class="list-articles">
            <?php foreach($lastArticles as $lastArticle) {
                $this->partialInclude("article-card", $lastArticle);
            } ?>  
        </div>
    </section>

    <section class="grid mb-12">
        <h1 class="h2 pb-6">Nos catégories</h1>
        <div class="row g-6"> 
            <a href="/recettes" class="btn btn-outline-pink br-12"> Tout voir </a>       
            <?php
            foreach($categories as $category): ?>
            <a href="/recettes?category=<?= $category->getName(); ?>" class="btn btn-outline-pink br-12"> <?= $category->getName() ?> </a>         
            <?php endforeach; ?>          
        </div>
    </section>

    <section class="grid pb-12">
        <h1 class="h2 pb-6">Nos recettes les plus aimés</h1>
        <div class="list-articles">
            <?php foreach($bestArticles as $bestArticle) {
                $this->partialInclude("article-card", $bestArticle);
            } ?>         
        </div>
    </section>

</section>
