<div class="grid p-10 xs-p-6 col a-start apparition">
    <h1 class="h1 mb-9">Paramètres</h1>

    <?php if (isset($errors) && $errors) 
        foreach($errors as $error) {
    ?>
        <span style="color: red"><?= $error ?></span>
    <?php } ?>
    <?php $this->partialInclude("form", $form) ?>
    
</div>