<section class="pt-20 grid container apparition">
    <h1 class="big-h1 py-8">Nos cuisiniers</h1>
    <form class="row xs-ml-0" method="GET" action="/cuisiniers" >
        <input type="text" name="q" class="input input-search xs-w-per-20" placeholder="rechercher ...">
        <select name="order" id="" class="input col-lg-2" style="max-width: 150px">
            <option value="date_asc" <?= $order == 'date_asc' ? 'selected': '' ?>> anciens </option>
            <option value="date_desc" <?= $order == 'date_desc' ? 'selected': '' ?>> nouveaux </option>
        </select>
        <?php if(isset($sub)): ?>
        <input type="hidden" name="sub" value="1">
        <?php endif; ?>
        <input type="submit" value="Rechercher" class="btn btn-pink a-self-end p-3">
    </form>

    <p class="mt-4 mb-7 h3"><?= !is_null($q) ? "Recherche: " . $q : ""  ?></p>

    <section class="grid mb-12">
        <?php if(count($chiefs) > 0): ?>
            <div class="list-articles">
            <?php foreach($chiefs as $chief): ?>
                <article class="card card-article hover-up br-6" href="">
                    <a  href="/profile?userId=<?= $chief->getId() ?>">
                        <div class="img-article" style="background-image: url(<?= $chief->getProfilePicture()??"assets/img/users/default_user.jpg" ?>)"></div>
                        <div class="p-6">
                            <h1 class="h3"> <?= $chief->getFirstname() ?> </h1>
                            <p class="breakword"> <?=  $chief->getLastname() ?> </p>
                        </div>
                    </a>
                </article>  
            <?php endforeach; ?>     
            </div>
        <?php else:?>
            <div>
                Aucun cuisinier trouvé
            </div>
        
        <?php endif; ?>
    </section>
    
    
    <?php $this->partialInclude('pagination', $pagination); ?>
</section>


