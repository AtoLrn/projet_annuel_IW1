$(document).ready(() => {
    let registerButton = $('#registerButton')
    let registerForm = $('#register-form')
    let loginButton = $('#loginButton')
    let loginForm = $('#login-form')
    let params = (new URL(document.location)).searchParams
    let formType = params.get('form')

    if (formType === 'register') {
        registerButton.addClass('selected')
        loginForm.addClass('hidden')
        registerForm.addClass('smooth-div')
    } else {
        loginButton.addClass('selected')
        registerForm.addClass('hidden')
        loginForm.addClass('smooth-div')
    }

    registerButton.click(function () {
        displayForm(registerButton, registerForm, loginButton, loginForm)
    })
    loginButton.click(function () {
        displayForm(registerButton, registerForm, loginButton, loginForm)
    })})

const displayForm = (registerButton, registerForm, loginButton, loginForm) => {
    loginForm.toggleClass('hidden')
    loginButton.toggleClass('selected')
    registerForm.toggleClass('hidden')
    registerButton.toggleClass('selected')
    loginForm.toggleClass('smooth-div')
    registerForm.toggleClass('smooth-div')
}