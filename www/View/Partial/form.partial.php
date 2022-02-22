<form id="<?= $data["config"]["id"]??"" ?>" class="<?= $data["config"]["class"]??"" ?>" method="<?= $data["config"]["method"]??"POST" ?>"  action="<?= $data["config"]["action"]??"" ?>" enctype="<?= $data["config"]["enctype"] ?? "" ?>">

    <?php foreach ($data["inputs"] as $name=>$input) :?>

        <?php if ($input["type"] === "textarea") :?>
            <textarea
                name = "<?= $name ?>"
                rows = "<?= $input["rows"] ?? "10" ?>"
                cols = "<?= $input["cols"] ?? "10" ?> "
                placeholder="<?= $input["placeholder"]??"" ?>"
                class="<?= $input["class"] ?? "" ?>"
                <?= empty($input["required"])?"":'required="required"' ?>
            ></textarea>
        <?php else :?>
            <div class="col my-4 mx-8 j-bet g-2 w-per-20">
                <label for="<?= $input["id"]??"" ?>"><?= $input["label"]?></label>
                <input
                        type="<?= $input["type"]??"text" ?>"
                        name="<?= $name?>"
                        placeholder="<?= $input["placeholder"]??"" ?>"
                        id="<?= $input["id"]??"" ?>"
                        class="<?= $input["class"]??"" ?>"
                    <?= empty($input["required"])?"":'required="required"' ?>
                >
            </div>
        <?php endif; ?>
    <?php endforeach; ?>

    <input class="btn btn-pink my-4 w-per-16" type="submit" value="<?= $data["config"]["submit"]??"Valider" ?>">
</form>