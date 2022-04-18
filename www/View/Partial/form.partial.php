<form id="<?= $data["config"]["id"]??"" ?>" class="<?= $data["config"]["class"]??"" ?>" method="<?= $data["config"]["method"]??"POST" ?>"  action="<?= $data["config"]["action"]??"" ?>" enctype="<?= $data["config"]["enctype"] ?? "" ?>">

    <?php foreach ($data["inputs"] as $name=>$input) :?>

    <div class="grid">   
        <div class="<?= $data["config"]["classContInputs"] ?? "col j-bet g-2 w-per-20" ?>">

            <?php if(isset($input['label'])): ?>
                <label for="<?= $input["id"] ?? "" ?>"><?= $input["label"]?></label>
            <?php endif; ?>
            <?php if ($input["type"] === "wysiwyg") { ?>
                <?php $this->partialInclude("wysiwyg", 
                [
                    "class" => $input["class"] ?? "", 
                    "name" => $name,
                    "id" => $input["id"] ?? ""
                ]) ?>
            <?php } elseif ($input["type"] === "select") { ?>
                <span>Not implemented</span>
            <?php } else { ?>

                <input
                        type="<?= $input["type"]??"text" ?>"
                        name="<?= $name?>"
                        placeholder="<?= $input["placeholder"]??"" ?>"
                        id="<?= $input["id"]??"" ?>"
                        class="<?= $input["class"]??"" ?>"
                        value="<?= $input["value"] ?? "" ?>"
                    <?= empty($input["required"])?"":'required="required"' ?>
                    <?= empty($input["multiple"])?"":'multiple="multiple"' ?>
                    <?= empty($input["maxLength"]) ? "" : 'maxLength="' . $input['maxLength'] . '"' ?>
                />
            <?php } ?>

        </div>
        <?php if(isset($data['error'][$name])): ?>
            <span class="small c-light-pink"> <?= implode( ", ", $data['error'][$name]) ?> </span>
        <?php endif; ?>
    </div>
    <?php endforeach;?>
    
    <input type="hidden" name="recaptcha" id="recaptcha">
    <input 
        class="<?= $data['config']['classSubmit'] ?? 'btn btn-pink my-4 w-per-16' ?>" 
        type="submit" value="<?= $data["config"]["submit"]??"Valider" ?>">
</form>
<script>
    grecaptcha.ready(() => {
        grecaptcha.execute( <?= KEY_SITE_RECAPTCHA ?>, { action: 'register-login' }).then(token => {
            document.querySelector('#recaptcha').value = token;
        });
    });
</script>