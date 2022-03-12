<main class="main-article pt-20">
    <div class="grid" >
        <div class="row">
            <div class="col-lg-4 g-0">
                <h1 class="h1" style="font-size: 56px"><?= $title ?></h1>
                <span class="c-light-pink pb-5" style="font-size: 24px"><?= $description ?></span>
                <div class="row mt-4">
                    <div class="col-lg-1">
                        <img height="32px" src="assets/img/users/antoine.svg" alt="">
                    </div>
                    <div class="col-lg-11">
                        <span class="c-light-gray" >Philipe Etchbest</span>
                    </div>
                </div>
                <div class="row mt-4">
                    <span>Notes: </span>
                        <span class="c-pink" style="font-size: 18px">4.8/5</span>
                </div>
            </div>
            <aside class="col-lg-8">
                <article id="recette-container" class="pl-5 recette-container" data-index="0">
                    <div class="recette-img shadow selected"><img height="32px" src="assets/img/public/ramen.jpg" alt=""></div>
                    <div class="recette-img shadow"><img height="32px" src="assets/img/public/ramen2.jpg" alt=""></div>
                    <div class="recette-img shadow"><img height="32px" src="assets/img/public/ramen3.jpeg" alt=""></div>
                </article>
                <div class="controller"><img id="left"  height="32px" src="assets/img/logo/left-arrow.svg" alt=""><img id="right" height="32px" src="assets/img/logo/right-arrow.svg" alt=""></div>
            </aside>
        </div>
    </div>

    <div class="grid">
        <div class="row mt-10 a-start reverse">
            <div class="col-lg-6 p-8 card">
                <?php $this->partialInclude("wysiwyg", null) ?>
            </div>
            <div class="col-lg-6 pl-5">
                <h2 style="font-size: 36px">Ingredients</h2>
                <article class="row">
                    <div class="ingredient-img shadow"><img height="32px" src="assets/img/public/noodle.jpg" alt=""></div>
                    <div class="ingredient-img shadow"><img height="32px" src="assets/img/public/egg.jpg" alt=""></div>
                    <div class="ingredient-img shadow"><img height="32px" src="assets/img/public/porc.jpg" alt=""></div>
                    <div class="ingredient-img shadow"><img height="32px" src="assets/img/public/cebette.jpg" alt=""></div>
                    <div class="ingredient-img shadow"><img height="32px" src="assets/img/public/bouillon.jpeg" alt=""></div>
                </article>
            </div>
        </div>
    </div>
</main>



