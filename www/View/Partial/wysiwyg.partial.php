<?php 
    $randomId = uniqid();
?>

<div id="<?= $randomId ?>" class="wysiwyg">
</div>

<script>
const editor = new EditorJS({
    holder: '<?= $randomId ?>',
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
    readOnly: <?= $data['data'] ? "true" : "false" ?>,
    data:  <?= "\"" . $data['data'] . "\""  ?? "{}" ?>,
    onChange: async () => {
        localStorage.setItem('editorjs', JSON.stringify(await editor.save()));
    }
})
</script>