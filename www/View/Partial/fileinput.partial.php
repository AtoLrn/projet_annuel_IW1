
<?php 
    $id = $data["id"] ?? uniqid();
?>
<div id="<?= $id ?>-container" class="flex" style="width:100%; display: flex;gap: 1em">
</div>

<input
    type="file"
    accept="<?= $data["accept"]??"" ?>"
    name="<?= $data["name"] ?>"
    placeholder="<?= $data["placeholder"]??"" ?>"
    id="<?= $id ?>"
    class="<?= $data["class"]??"" ?>"
    value="<?= $data["value"] ?? "" ?>"
                    <?= empty($data["required"])?"":'required="required"' ?>
                    <?= empty($data["multiple"])?"":'multiple="multiple"' ?>
                    <?= empty($data["maxLength"]) ? "" : 'maxLength="' . $data['maxLength'] . '"' ?>
                />

<input type="hidden" id="<?= $id ?>-selected" name="<?= $data["name"] ?>-selected"/>
<script>
    $('#<?= $id ?>').on('change', (elem) => {
        const files = $('#<?= $id ?>').prop('files');
        $('#<?= $id ?>-container > img').remove();
        [...files].forEach((file, i) => {
            const newImg = $("<img alt='' style='width: 10vw;border-radius: 10px; cursor: pointer' />")
            newImg.attr('src', URL.createObjectURL(file)) 
            if (<?= $data["selectable"] ?? "false" ?>) {
                newImg.on("click", () => {
                    $('#<?= $id ?>-container > img').each((_i, elem) => {
                        $(elem).css("border", "none")
                    })
                    newImg.css("border", "2px solid black")

                    console.log(i)
                    $('#<?= $id ?>-selected').val(i)
                })
            }
            $('#<?= $id ?>-container').append(newImg)
        })
    })
</script>