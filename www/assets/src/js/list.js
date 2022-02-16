$(document).ready(() => {
    $('.burger-menu').click(() => {
        $('.navbar').toggleClass('open')
    })
    if($('#list-table')[0]) {

        //init datatables
        tab = $('#list-table').DataTable({
            responsive: true,
            autoWidth: false,
            lengthChange: false,         
            bInfo : false,
            language: {
                'paginate': {
                    'previous': '<img src="assets/img/logo/arrow-list.svg">',
                    'next': '<img src="assets/img/logo/arrow-list.svg">'
                }
            },

        });

        // search custom input
        $('#search').keyup(function(){
            console.log("ok")
            tab.search( this.value ).draw();
        })
    }
    
})

const closeMenu = () => {
    $('.aside-info').removeClass("show")
}
