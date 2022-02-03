$(document).ready(() => {
    $('.burger-menu').click(() => {
        $('.navbar').toggleClass('open')
    })
    if($('#list-table')[0]) {
        $('#list-table').DataTable();
    }
    
})

