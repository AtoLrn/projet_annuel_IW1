<section class="pt-20 grid container apparition">
    <h1 class="my-10 pl-10"><?= $page->getTitle() ?></h1>
    <?php $this->partialInclude("wysiwyg",
        [
            "class" => "",
            "data" => $page->getContent(),
            "readOnly" => "true"
        ]) ?>
</section>
