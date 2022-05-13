
<?php 
    $id = $data["id"] ?? uniqid();
?>
<div id="<?= $id ?>" class="col j-bet g-2 w-per-20" style="position: relative">
</div>

<script>
    new Select("<?= $data["name"] ?>", "#<?= $id ?>", "<?= $data["placeholder"] ?>", <?= $data["options"] ?>)
</script>