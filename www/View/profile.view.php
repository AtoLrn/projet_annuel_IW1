<section class="pt-20 grid container">
    <h1 class="big-h1 py-8">Profile</h1>

    <section class="grid row nw">
<!--        <div>
            <img class="editable-profile-picture" src="<?/*= is_null($userInfos['user_profilePicture']) || $userInfos['user_profilePicture'] === "" ? "assets/img/users/default_user.jpg" : $userInfos['user_profilePicture'] */?>" alt="profilePicture">
        </div>-->

        <div style="width: 165px">
            <div class="profile-pic">
                <?php if ($isMyProfile) : ?>
                    <label class="-label" for="file">
                        <span>Change Image</span>
                    </label>
                    <input id="file" type="file"/>
                <?php endif; ?>
                <img src="<?= is_null($userInfos['user_profilePicture']) || $userInfos['user_profilePicture'] === "" ? "assets/img/users/default_user.jpg" : $userInfos['user_profilePicture'] ?>" id="output" width="200" />
            </div>
        </div>

        <div class="grid card mb-12 ml-4">
            <p>Firstname: <?= $userInfos['user_firstname'] ?></p>
            <p>Lastname: <?= $userInfos['user_lastname'] ?></p>
            <p>Email: <?= $userInfos['user_email'] ?></p>
            <p>Status: <?= $userInfos['user_status'] ?></p>
            <p>Member since: <?= $userInfos['user_createdAt'] ?></p>
        </div>

    </section>

    <section class="grid mb-12">
        <h1 class="h2 pb-6">Nos dernières recettes</h1>
        <div class="list-articles">

            <?php foreach($userArticles as $article): ?>
                <a class="w-per-20" href=<?= "/recette?id=" . $article['article_id'] ?>>
                    <article class="card card-article hover-up br-6 ">
                        <div class="img-article" style="background-image: url(<?= $article['image_path'] ?? "" ?>)"></div>
                        <div class="p-6">
                            <h1 class="h3"> <?= $article['article_title'] ?> </h1>
                            <p> <?= $article['article_description'] ?> </p>
                        </div>
                    </article>
                </a>
            <?php endforeach; ?>
        </div>
    </section>
</section>