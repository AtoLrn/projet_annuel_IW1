<article class="card card-article hover-up br-6" href="">
    <a  href="/recette/<?= urlencode($data->getTitle())?>">
        <div class="img-article" style="background-image: url(<?= $data->path ?>)"></div>
        <div class="p-6">
            <h1 class="h3"> <?= $data->getTitle() ?> </h1>
            <p class="breakword"> <?= $data->getDescription() ?> </p>
            <p class="c-pink"> <?= !empty($data->note) ? number_format($data->note, 1, ",", " ") . " / 5" : "" ?></p>
        </div>
    </a>
</article>    