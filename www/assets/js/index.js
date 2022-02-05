$(document).ready(() => {
    $('.burger-menu').click(() => {
        $('.navbar').toggleClass('open')
    })
    if($('#list-table')[0]) {
        $('#list-table').DataTable();
    }
    
})




const getUsersById = (userId) => {
    console.log(userId);
    const form = Object.assign({}, {
        id: userId
    })
    console.log(form);
    fetch('http://localhost/get-user', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(form),
    }).then((r) => {
        return r.json();
    }).then((data) => {
       console.log(data);
    }).catch((error) => {
        console.log('Erreur : ' + error);
    });
}
