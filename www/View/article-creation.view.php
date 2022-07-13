<main class="p-6 pt-20 apparition container">
    <h1 class="h1 pl-8 pt-12 pb-8">Publier une recette</h1>
    <?php $this->partialInclude("form", $article->getArticleForm($edit ?? false)) ?>
</main>



