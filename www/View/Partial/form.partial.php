<form id="<?= $data["config"]["id"]??"" ?>" class="<?= $data["config"]["class"]??"" ?>" method="<?= $data["config"]["method"]??"POST" ?>"  action="<?= $data["config"]["action"]??"" ?>" enctype="<?= $data["config"]["enctype"] ?? "" ?>">

    <?php foreach ($data["inputs"] as $name=>$input) :?>

    <div class="<?= $data["config"]["container-inputs"]??"grid" ?> <?= $input['type'] == "hidden" ? "hidden" : "" ?>">   
        <div class="<?= $data["config"]["classContInputs"] ?? "col j-bet g-2 w-per-20" ?>">

            <?php if(isset($input['label'])): ?>
                <label class="<?= $data["config"]["labels"]??"" ?>" for="<?= $input["id"] ?? "" ?>"><?= $input["label"]?></label>
            <?php endif; ?>
            <?php if ($input["type"] === "wysiwyg") { ?>
                <?php $this->partialInclude("wysiwyg", 
                [
                    "class" => $input["class"] ?? "", 
                    "name" => $name,
                    "id" => $input["id"] ?? "",
                    "data" => $input["value"],
                    "readOnly" => $input["readOnly"]
                ]) ?>
            <?php } elseif ($input["type"] === "select") { ?>
                <?php $this->partialInclude("select", 
                [
                    "class" => $input["class"] ?? "", 
                    "name" => $name,
                    "placeholder" =>  $input["placeholder"] ?? "",
                    "options" =>  $input["options"],
                    "id" => $input["id"] ?? "",
                    "value" => $input["value"] ?? ""
                ]) ?>
            <?php } elseif ($input["type"] === "file") { ?>
                <?php $this->partialInclude("fileinput", 
                [
                    "class" => $input["class"] ?? "", 
                    "name" => $name,
                    "placeholder" =>  $input["placeholder"] ?? "",
                    "id" => $input["id"] ?? "",
                    "accept" => $input["accept"] ?? "",
                    "selectable" => $input["selectable"] ?? "false",
                    "multiple" => empty($input["multiple"])?"":'multiple="multiple"',
                    "required" => empty($input["required"])?"":'required="required"'
                ]) ?>
            <?php } elseif ($input["type"] === "textarea") { ?>
                <textarea
                        name="<?= $name ?>"
                        placeholder="<?= $input["placeholder"]??"" ?>"
                        id="<?= $input["id"]??"" ?>"
                        class="<?= $input["class"]??"" ?>"
                        
                    <?= empty($input["required"])?"":'required="required"' ?>
                    <?= empty($input["rows"])?"":'rows="' . $input["rows"] . '"' ?>
                    <?= empty($input["cols"])?"":'cols="' . $input["cols"] . '"' ?>
                    <?= empty($input["maxLength"]) ? "" : 'maxLength="' . $input['maxLength'] . '"' ?>
                ></textarea>
            <?php } else { ?>

                <input
                        type="<?= $input["type"]??"text" ?>"
                        name="<?= $name ?>"
                        placeholder="<?= $input["placeholder"]??"" ?>"
                        id="<?= $input["id"]??"" ?>"
                        class="<?= $input["class"]??"" ?>"
                        value="<?= $input["value"] ?? "" ?>"
                        
                    <?= empty($input["required"])?"":'required="required"' ?>
                    <?= empty($input["multiple"])?"":'multiple="multiple"' ?>
                    <?= empty($input["rows"])?"":'rows="' . $input["rows"] . '"' ?>
                    <?= empty($input["cols"])?"":'cols="' . $input["cols"] . '"' ?>
                    <?= empty($input["maxLength"]) ? "" : 'maxLength="' . $input['maxLength'] . '"' ?>
                />
            <?php } ?>

        </div>
        <?php if(isset($data['error'][$name])): ?>
            <span class="small c-error"> <?= implode( ", ", $data['error'][$name]) ?> </span>
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