<form id="<?= $data["config"]["id"] ?? "" ?>" class="<?= $data["config"]["class"] ?? "" ?>" method="<?= $data["config"]["method"] ?? "POST" ?>"  action="<?= $data["config"]["action"] ?? "" ?>">

    <?php foreach ($data["inputs"] as $name=>$input) :?>

        <div class="<?= $data["config"]["classContInputs"] ?? "col my-4 mx-8 j-bet g-2 w-per-20" ?>">
            <?php if(isset($input['label'])): ?>
                <label for="<?= $input["id"] ?? "" ?>"><?= $input["label"]?></label>
            <?php endif; ?>
            <input
                    type="<?= $input["type"] ?? "text" ?>"
                    name="<?= $name?>"
                    placeholder="<?= $input["placeholder"] ?? "" ?>"
                    id="<?= $input["id"] ?? "" ?>"
                    class="<?= $input["class"] ?? "" ?>"
                    value="<?= $input["value"] ?? "" ?>"
                <?= empty($input["required"]) ? "" : 'required="required"' ?>
            >
        </div>

    <?php endforeach;?>

    <input class="<?= $data['config']['classSubmit'] ?? 'btn btn-pink my-4 w-per-16' ?>" type="submit" value="<?= $data["config"]["submit"]??"Valider" ?>">
</form>