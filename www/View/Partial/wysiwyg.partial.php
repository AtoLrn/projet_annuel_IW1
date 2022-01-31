<?php 
    $randomId = uniqid();
?>

<div id="<?php echo $randomId ?>" class="wysiwyg">

</div>

<script>
const editor = new EditorJS({

    holder: '<?php echo $randomId ?>',
    tools: {
        header: {
            class: Header,
            inlineToolbar: true
        },
        list: {
            class: NestedList,
            inlineToolbar: true
        },
        image: {
            class: ImageTool,
            inlineToolbar: true
        },
        // ...
    },
    data: {}


})
</script>