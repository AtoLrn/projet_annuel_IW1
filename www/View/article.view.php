<main class="main-article pt-20">
    <div class="grid" >
        <div class="row">
            <div class="col-lg-4 g-0">
                <h1 class="h1" style="font-size: 56px"><?= $article->getTitle() ?></h1>
                <span class="c-light-pink pb-5" style="font-size: 24px"><?= $article->getDescription() ?></span>
                <div class="row mt-4">
                    <div class="col-lg-1">
                        <img height="32px" src="/assets/img/users/antoine.svg" alt="">
                    </div>
                    <div class="col-lg-11">
                        <span class="c-light-gray" ><?= $chief->getFirstname() . " " . $chief->getLastname() ?></span>
                    </div>
                </div>
                <div class="row mt-4">
                    <span>Notes: </span>
                        <?php if($score['AVG(score)'] == ""): ?>
                            <span class="c-pink" style="font-size: 18px"> pas encore noté  </span>
                        <?php else: ?>
                            <span class="c-pink" style="font-size: 18px"><?= number_format($score['AVG(score)'], 1, ',', "") . " / 5 sur " . $score['COUNT(*)'] . " " . ($score['COUNT(*)'] == 1 ? "note" : "notes"); ?>   </span>
                        <?php endif; ?>
                </div>
                
                <div class="row mt-4">
                    <?php for($i = 1; $i <= 5; $i++): ?>
                        <form action="/set-score" method="POST">
                            <input type="hidden" name="score" value="<?= $i ?>">
                            <input type="hidden" name="articleId" value="<?= $article->getId() ?>">
                            <input type="hidden" name="csrf_token" value="<?= $_SESSION['csrf_token'] ?>">
                            <button class="link">
                                <svg id="star_<?= $i ?>" colorValue="<?= $i <= $score['AVG(score)'] ? '#FFC300' : '#feff98' ?>" class="stars" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="cursor: pointer">
                                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" style="fill: <?= $i <= $score['AVG(score)'] ? '#FFC300' : '#feff98' ?>"/>
                                </svg>
                            </button>
                        </form>
                    <?php endfor; ?>
                </div>
                <?php if ($isUserOrAdmin) { ?>
                     <a href="/recette/edit?id=<?= $article->getId() ?>"><button id="delete" class="btn btn-danger col-lg-4">Modifier</button></a>  
                <?php } ?>
            </div>
            <aside class="col-lg-8">
                <article id="recette-container" class="pl-5 recette-container" data-index="0">
                    <?php foreach ($images as $image) {?>
                        <div class="recette-img shadow selected"><img height="32px" src="/<?php echo $image["image_path"] ?>" alt=""></div>
                    <?php } ?>
                </article>
                <div class="controller"><img id="left"  height="32px" src="assets/img/logo/left-arrow.svg" alt=""><img id="right" height="32px" src="assets/img/logo/right-arrow.svg" alt=""></div>
            </aside>
        </div>
    </div>

    <div class="grid">
        <div class="row mt-10 a-start">
            <div class="col-lg-6 p-8 card">
                <?php $this->partialInclude("wysiwyg", ["data" => $article->getContent()]) ?>
            </div>
            <div class="col-lg-6 pl-5">
                <h2 style="font-size: 36px">Ingredients</h2>
                <article class="row">
                <?php foreach ($ingredients as $ingredient) {?>
                        <div class="ingredient-img shadow selected"><img height="32px" src="/<?= $ingredient->getPath() ?>" alt="<?= $ingredient->getName() ?>"></div>
                    <?php } ?>
                    <!-- <div class="ingredient-img shadow"><img height="32px" src="/assets/img/public/noodle.jpg" alt=""></div>
                    <div class="ingredient-img shadow"><img height="32px" src="/assets/img/public/egg.jpg" alt=""></div>
                    <div class="ingredient-img shadow"><img height="32px" src="/assets/img/public/porc.jpg" alt=""></div>
                    <div class="ingredient-img shadow"><img height="32px" src="/assets/img/public/cebette.jpg" alt=""></div>
                    <div class="ingredient-img shadow"><img height="32px" src="/assets/img/public/bouillon.jpeg" alt=""></div> -->
                </article>
            </div>
        </div>
    </div>

    <div class="grid">
        <div class="col mt-10 a-center">
            <div class="w-per-10">
                <?php $this->partialInclude("form", $comment->getCommentCreationForm()) ?>
            </div>

            <div class="w-per-10 py-4 px-8">
                <?php foreach ($comments as $comment) : ?>
                    <?php if ($comment->getStatus() === 'approved') : ?>
                    <div class="card p-4 mb-6 grid col a-start g-3">
                        <a class="grid row a-center g-0" href="/profile?userId=<?= $comment->getUserId() ?>"><img height="32px" src="<?= $comment->profilePicture ?>" alt=""><?= $comment->firstname ?></a>
                        <p class="ml-11"><?= $comment->getContent() ?></p>
                        <?php $date = new DateTime($comment->createdAt); ?>
                        <p class="a-self-end"><?= $date->format('d / m / Y H:m') ?></p>
                    </div>
                    <?php endif; ?>
                <?php endforeach; ?>
            </div>
        </div>
    </div>
</main>



