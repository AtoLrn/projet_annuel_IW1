<?php 
    $id = $data["id"] ?? uniqid();
?>


<div id="<?= $id."-editor" ?>" class="<?= isset($data['class']) ? $data['class'] : 'wysiwyg' ?>">
</div>
<input style="display:none" id="<?= $id ?>" name="<?= $data["name"] ?>" />

<script>
$("#<?= $id ?>").val(<?= isset($data['data']) ? $data["data"] : "{}" ?>)
const editor = new EditorJS({
    holder: '<?= $id."-editor" ?>',
    tools: {
        header: {
            class: Header,
            inlineToolbar: true
        },
        list: {
            class: NestedList,
            inlineToolbar: true
        },
        image: SimpleImage,
        quote: {
            class: Quote,
            inlineToolbar: true,
            shortcut: 'CMD+SHIFT+O',
            config: {
                quotePlaceholder: 'Enter a quote',
                captionPlaceholder: 'Quote\'s author',
            },
        },
        delimiter: Delimiter,
        // ...
    },
    readOnly: <?= isset($data['readOnly']) ? $data['readOnly'] : (isset($data['data']) ? "true" : "false") ?>,
    data: <?= isset($data['data']) ? $data["data"] : "{}" ?>,  
    onChange: async () => {
        $("#<?= $id ?>").val(JSON.stringify(await editor.save()));
    }
    // $("#<?= $id ?>").val(JSON.stringify(<?= isset($data['data']) ? $data["data"] : "{}" ?>));
})
</script>