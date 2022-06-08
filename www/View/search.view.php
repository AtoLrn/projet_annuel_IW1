<section class="pt-20 grid container apparition">
    <h1 class="big-h1 py-8">Nos recettes</h1>
    <form class="row xs-ml-0" method="GET" action="/rechercher" >
        <input type="text" name="q" class="input input-search xs-w-per-20" placeholder="rechercher ...">
        <?php if(!is_null($categoryName)): ?>
        <input type="hidden" name="category" value="<?= $categoryName ?>" >
        <?php endif; ?>
        <select name="order" id="" class="input col-lg-2" style="max-width: 150px">
            <option value="date_desc" <?= $order == 'date_desc' ? 'selected': '' ?>> plus récent </option>
            <option value="date_asc" <?= $order == 'date_asc' ? 'selected': '' ?>> moins récent </option>
            <option value="like_desc" <?= $order == 'like_desc' ? 'selected': '' ?>> plus aimé </option>
            <option value="like_asc" <?= $order == 'like_asc' ? 'selected': '' ?>> moins aimé </option>
        </select>
        <input type="submit" value="Rechercher" class="btn btn-pink a-self-end p-3">
    </form>
    <div class="row g-6 py-9">   
        <a href="/rechercher" class="btn btn-outline-pink br-12"> Tout voir </a>    
        <?php
        foreach($categories as $category): ?>
        <a href="/rechercher?category=<?= $category; ?>" class="btn btn-outline-pink br-12"> <?= $category ?> </a>         
        <?php endforeach; ?>          
    </div>

    <p class="mb-7 h3"><?= !is_null($categoryName) ? ucfirst($categoryName) : "Toutes les recettes"  ?> <?= !is_null($q) ? "─ Recherche: " . $q : ""  ?></p>

    <section class="grid mb-12">
        <?php if(count($articles)): ?>
            <div class="list-articles">
            <?php foreach($articles as $article) {
                $this->partialInclude("article-card", $article);
            } ?>     
            </div>
        <?php else:?>
            <div>
                Aucune recette trouvé 
            </div>
        
        <?php endif; ?>
    </section>


</section>


