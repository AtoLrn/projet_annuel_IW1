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

    let displayFormNameButton = $('#displayFormNameButton')
    let lastnameAndFirstname = $('#lastnameAndFirstname')
    let newFirstnameAndLastnameForm = $('#newFirstnameAndLastnameForm')
    displayFormNameButton.click(function () {
        lastnameAndFirstname.toggleClass('hidden')
        newFirstnameAndLastnameForm.toggleClass('hidden')
    })

    let modifyNameButton = $('#modifyNameButton')
    modifyNameButton.click(function () {
        let newFirstnameInput = $('#newFirstname')
        let newLastnameInput = $('#newLastname')

        let newFirstname = newFirstnameInput.val()
        let newLastname = newLastnameInput.val()

        let form_data = new FormData();
        form_data.append('firstname', newFirstname);
        form_data.append('lastname', newLastname);

        $.ajax({
            url: 'http://localhost/modify-firstname-lastname',
            dataType: 'text',
            cache: false,
            contentType: false,
            processData: false,
            data: form_data,
            type: 'post',
        }).then((r) => {
            location.reload();
        }).catch((err) => {
            console.log('error', err)
        })
    })


    let displayFormEmailButton = $('#displayFormEmailButton')
    let email = $('#email')
    let newEmailForm = $('#newEmailForm')
    displayFormEmailButton.click(function () {
        email.toggleClass('hidden')
        newEmailForm.toggleClass('hidden')
    })

    let modifyEmailButton = $('#modifyEmailButton')
    modifyEmailButton.click(function () {
        let newEmailInput = $('#newEmail')

        let newEmail = newEmailInput.val()

        let form_data = new FormData();
        form_data.append('email', newEmail);

        $.ajax({
            url: 'http://localhost/modify-email',
            dataType: 'text',
            cache: false,
            contentType: false,
            processData: false,
            data: form_data,
            type: 'post',
        }).then((r) => {
            location.reload();
        }).catch((err) => {
            console.log('error', err)
        })
    })
})