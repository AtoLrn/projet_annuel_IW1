<section class="pt-20 grid container apparition">
    <h1 class="my-8"><?= $page->getTitle() ?></h1>
    <?php $this->partialInclude("wysiwyg",
        [
            "class" => "p-8 card",
            "data" => $page->getContent(),
            "readOnly" => "true"
        ]) ?>
</section>
