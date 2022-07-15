<div class="setup-div">
<h1 >Setup</h1>
<?php if (!empty($errors)) {
    foreach($errors as $error) {?>
        <span class="error-msg" style="margin-bottom: 1em;"><?= $error ?></span>
    <?php } 
}?>
<?php $this->partialInclude("form", $form) ?>
</div>

