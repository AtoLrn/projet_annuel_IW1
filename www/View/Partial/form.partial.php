<form action="<?= $data["config"]["action"] ?? "" ?>" method="<?= $data["config"]["method"] ?? "POST" ?>">


    <?php

    foreach ($data['inputs'] as $name => $value) {
    ?>
    <input type="<?= $value['type'] ?? "text" ?>" placeholder="<?= $value['placeholder'] ?? "text" ?>"
        class="<?= $value['class'] ?? "" ?>" name="<?= $name ?>" value="<?= $value['value'] ?? "" ?>"
        id="<?= $value['id'] ?? "" ?>"
        <?= (isset($value['required']) && $value['required']) ? "required=required" : "" ?> /><br>
    <?php
    }

    ?>

    <input type="submit" value="<?= $data["config"]["submit"] ?? "Submit" ?>">

</form>