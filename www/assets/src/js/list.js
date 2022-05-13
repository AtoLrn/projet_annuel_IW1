$(document).ready(() => {
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
                },
                "lengthMenu": "Display -- records per page",
                "zeroRecords": "Aucun éléments trouvés",
                "infoEmpty": "No records available"
            },
        
        });

        // search custom input
        $('#search').keyup(function(){
            tab.search( this.value ).draw();
        })

        getList(tab);
    }
    
})

const closeMenu = () => {
    $('.aside-info').removeClass("show")
}

const getList = (tab) => {
    for(const i of ['user', 'article', 'comment', 'certification', 'ingredient']){
        if($('#list-table').hasClass(i)) {
            window["get" + i[0].toUpperCase() + i.substring(1) + "s"](tab);
        }
    }

}

const displayPopUp = (id) => {
    $('#pop-up').addClass('show');
    $('#delete').click( function() {
        closePopUp();
        deleteUserById(id);        
    });
    $('#cancel').click(closePopUp)
}

const closePopUp = () => {
    $('#pop-up').removeClass('show');
}
