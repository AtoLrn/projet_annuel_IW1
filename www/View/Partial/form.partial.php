<form id="<?= $data["config"]["id"]??"" ?>" class="<?= $data["config"]["class"]??"" ?>" method="<?= $data["config"]["method"]??"POST" ?>"  action="<?= $data["config"]["action"]??"" ?>" enctype="<?= $data["config"]["enctype"] ?? "" ?>">

    <?php foreach ($data["inputs"] as $name=>$input) :?>

    <div class="<?= $data["config"]["container-inputs"]??"grid" ?>">   
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
                <?php $this->partialInclude("select", 
                [
                    "class" => $input["class"] ?? "", 
                    "name" => $name,
                    "placeholder" =>  $input["placeholder"] ?? "",
                    "options" =>  $input["options"],
                    "id" => $input["id"] ?? ""
                ]) ?>
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

    <input 
        class="<?= $data['config']['classSubmit'] ?? 'btn btn-pink my-4 w-per-16' ?>" 
        type="submit" value="<?= $data["config"]["submit"]??"Valider" ?>">
</form>

<?php if(isset($data['config']['recaptcha'])): ?>
<script src="https://www.google.com/recaptcha/api.js?render=<?= KEY_SITE_RECAPTCHA ?>"></script>
<script>
    grecaptcha.ready(() => {
        grecaptcha.execute( <?= json_encode(KEY_SITE_RECAPTCHA) ?>, { action: 'user' }).then(token => {
            document.querySelector('#recaptcha-<?= $data["config"]["id"] ?>').value = token;
        });
    });
</script>

<?php endif; ?>