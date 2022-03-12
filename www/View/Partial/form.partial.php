<form id="<?= $data["config"]["id"]??"" ?>" class="<?= $data["config"]["class"]??"" ?>" method="<?= $data["config"]["method"]??"POST" ?>"  action="<?= $data["config"]["action"]??"" ?>" enctype="<?= $data["config"]["enctype"] ?? "" ?>">

    <?php foreach ($data["inputs"] as $name=>$input) :?>

        
        <div class="col my-4 mx-8 j-bet g-2 w-per-20">

            <label for="<?= $input["id"]??"" ?>"><?= $input["label"]?></label>
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
                    <?= empty($input["required"])?"":'required="required"' ?>
                    <?= empty($input["multiple"])?"":'multiple="multiple"' ?>
                />
            <?php } ?>

        </div>
    <?php endforeach;?>

    <input class="btn btn-pink my-4 w-per-16" type="submit" value="<?= $data["config"]["submit"]??"Valider" ?>">
</form>