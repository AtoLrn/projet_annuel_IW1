<?php

$status = [
    'user' => 'utilisateur',
    'chief' => 'cuisinier',
    'admin' => 'Administrateur'
];
?>

<section class="pt-20 grid container">
    <h1 class="big-h1 py-8">Profile</h1>

    <section class="grid row nw card p-8 mb-12 g-12">

        <div style="width: 165px">
            <div class="profile-pic">
                <?php if ($isMyProfile) : ?>
                    <label class="label-img" for="file">
                        <span>Modifier image</span>
                    </label>
                    <input id="file" type="file"/>
                <?php endif; ?>
                <img id="img-user"  src="<?= is_null($userInfos->getProfilePicture()) || $userInfos->getProfilePicture() === "" ? "assets/img/users/default_user.jpg" : $userInfos->getProfilePicture() ?>" id="output" width="200" />
            </div>
        </div>
       
        <div class="grid col g-2">

            <p class="h2"><?= $userInfos->getFirstname() ?> <?= $userInfos->getLastname() ?></p>
            <p class="h3"><?= $userInfos->getEmail() ?></p>
            <p class="h3 row a-center g-2">Statut: <?= $status[$userInfos->getStatus()] ?> <?php $userInfos->getStatus() == 'chief' ? include 'assets/img/logo/certifications.php' : ''?> </p>
            <?php $date = new DateTime($userInfos->createdAt); ?>
            <p class="h3">Utilisateur depuis le: <?= $date->format('d / m / Y') ?></p>
        </div>

    </section>
    <?php if($userInfos->getStatus() == 'user' && $isMyProfile): ?>
    <section class="grid pb-12">
        <p> Vous désirez vous aussi être cuisinier sur notre site ? cliquez : <a class="link c-pink" href="/certification-request">ici</a> </p>
    </section>
    <?php endif; ?>

    <?php if($userInfos->getStatus() == 'chief'): ?>
    <section class="grid pb-12">
        <h1 class="h2 pb-6">Ces dernières recettes</h1>
        <div class="list-articles">
        <?php foreach($articles as $article){
                $this->partialInclude("article-card", $article);
            }
            ?>        
        </div>
        <?php if(count($articles) == 0): ?>
            <div>
                Aucune recette trouvée
            </div>
        <?php endif; ?>
    </section>
    <?php endif; ?>
</section>