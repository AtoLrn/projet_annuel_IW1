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

        getList(tab);
    }
    
})

const closeMenu = () => {
    $('.aside-info').removeClass("show")
}

const getList = (tab) => {
    for(const i of ['user', 'article', 'comment']){
        if($('#list-table').hasClass(i)) {
            window["get" + i[0].toUpperCase() + i.substring(1) + "s"](tab);
        }
    }

}

const displayPopUp = (id) => {
    console.log(id);
    $('#pop-up').addClass('show');
    $('#cancel').click(closePopUp);
    $('#delete').click(closePopUp)
}

const closePopUp = () => {
    $('#pop-up').removeClass('show');
}
