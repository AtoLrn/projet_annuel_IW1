<div class="grid p-12 xs-p-6 apparition">
    <h1 class="h1 mb-10">Les Catégories</h1>

    <div class="w-em-5 xs-w-per-20 mb-3">
    <?php if(!is_null($categories->getId())): ?>
        <div class="p pb-1"> Modifier : </div>
    <?php endif; ?>
    <?php 
        $this->partialInclude("form", $categories->getForm($categories->getId())) 
    ?>
    </div>

    <?php if(isset($error)): ?>
        <p class="p c-light-pink"> <?= $error ?> </p>
    <?php endif; ?>
    
    <section class="grid row py-10">
    <?php foreach($categoriesList as $key => $category): ?>
        <article class="row w-auto p-3 bd-1 bd-pink br-2 xs-w-per-20">
            <h1 class="p c-pink"> <?= ucfirst($category->getName()) ?> </h1>
            <div>
                <a href="/categories?edit=<?= $category->getId() ?>">
                <?php include "assets/img/logo/edit.php"; ?>
                </a>
                <a href="/delete-category?id=<?= $category->getId() ?>">
                <?php include "assets/img/logo/bin.php"; ?>
                </a>
            </div>
            
        </article>
    <?php endforeach; ?>
    
    <?php if(count($categoriesList) == 0): ?>
        <p class="p"> Aucune catégorie trouvée </p>
    <?php endif; ?>

    </section>
    
</div>