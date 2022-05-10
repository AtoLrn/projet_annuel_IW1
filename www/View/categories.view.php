<div class="grid p-12 xs-p-6">
    <h1 class="h1 mb-10">Les Catégories</h1>

    <div class="w-em-5 xs-w-per-20 mb-10">
    <?php 
        $this->partialInclude("form", $categories->getForm()) 
    ?>
    </div>
    
    <section class="grid row">
    <?php foreach($categoriesList as $key => $category): ?>
        <article class="row w-auto p-3 bd-1 bd-pink br-2 xs-w-per-20">
            <h1 class="h3 c-pink"> <?= $category['category_name'] ?> </h1>
            <div>
                <a href="/category?id=<?= $category['category_id'] ?>">
                <?php include "assets/img/logo/edit.php"; ?>
                </a>
                <a href="/delete-category?id=<?= $category['category_id'] ?>">
                <?php include "assets/img/logo/bin.php"; ?>
                </a>
            </div>
            
        </article>
    <?php endforeach; ?>
    </section>
    
</div>