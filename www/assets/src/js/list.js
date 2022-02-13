$(document).ready(() => {
    $('.burger-menu').click(() => {
        $('.navbar').toggleClass('open')
    })
    if($('#list-table')[0]) {
        $('#list-table').DataTable({
            responsive: true,
            autoWidth: false,
            lengthChange: false,
            searching: false,
            bInfo : false,
            language: {
                'paginate': {
                    'previous': '<span class="prev-icon"> < </span>',
                    'next': '<span class="next-icon"> > </span>'
                }
            }
        });
    }
    
})

const closeMenu = () => {
    $('.aside-info').removeClass("show")
}
