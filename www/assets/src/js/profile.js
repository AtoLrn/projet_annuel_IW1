$(document).ready(() => {

    let inputFile = $('#file')
    let image = $('#output')
    inputFile.on("change", function (event) {
        let file_data = event.target.files[0]
        let form_data = new FormData();
        form_data.append('file', file_data);
        let filePath
        $.ajax({
            url: 'http://localhost/modify-profile-picture',
            dataType: 'text',
            cache: false,
            contentType: false,
            processData: false,
            data: form_data,
            type: 'post',
           /* success: function(php_script_response){
                image.src = php_script_response

            }*/
        }).then((r) => {
            location.reload();
            })
    })
})