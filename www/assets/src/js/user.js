const statusUser = {
    user: "Utilisateur",
    admin: "Administrateur",
    chief: "Cuisinier"
}

// CALL AJAX
const getUsers = (tab) => {
    fetch('/get-users', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'GET',
    }).then((r) => {
        return r.json();
    }).then((data) => {
        setTableUser(data, tab);     
    }).catch((error) => {
        console.log('Erreur : ' + error);
    });
}

const getUserById = (userId) => {
    const form = Object.assign({}, {
        id: userId
    })
    fetch('/get-user', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(form),
    }).then((r) => {
        return r.json();
    }).then((data) => {
        setAsideUserInfo(data);
    }).catch((error) => {
        console.log('Erreur : ' + error);
    });
}

const deleteUserById = (id) => {
    fetch( `/delete-user?id=${id}`, {
        method: 'DELETE',
    }).then(r => {
        tab = $('#list-table').DataTable();
        $('.aside-info').removeClass("show");
        getList(tab);
    });
}

const updateActiveUser = (id) => {
    fetch( `/active-user`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({id: id}),
    })
    .then((r) => r.json())
    .then(data => {
        setAsideUserInfo(data);
    }).catch((error) => {
        console.log('Erreur : ' + error);
    });
}

const updateStatusUser = (status, id) => {
    fetch( `/status-user`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({id: id, status: status}),
    })
    .then((r) => r.json())
    .then(data => {
        setAsideUserInfo(data);
    }).catch((error) => {
        console.log('Erreur : ' + error);
    });
}


// HTML update and display data

const setTableUser = (data, tab) => {  
    tab.clear();
    for(const row of data) {
        let cols = []
        for(const col in row) {        
            if(col != 'id') {
                cols.push(row[col])
            }
        }
        let rowNode = tab
        .row.add( cols )
        .draw()
        .node();
        $(rowNode).click(function() {
            getUserById(row['id'])
        });
    }
}

const setAsideUserInfo = (data) => {
    $('.aside-info').removeClass("show");
    let info = $('#infos');
    info.html("");
    info.append( `<p>${data.lastname}</p>` );
    info.append( `<p>${data.firstname}</p>` );
    info.append( `<p>${data.email}</p>` );
    info.append( `<p>${statusUser[data.status] }</p>` );
    info.append( `<p>${data.isVerified == 1 ? '<strong class="c-success"> Activé </strong>' : '<strong class="c-error"> Désactivé </strong>'}</p>` );

    let figure = $('#img-user')
    figure.html("")
    if(data.profilePicture != null) {
        figure.append( `<img src="${data.profilePicture}" alt="" height="72" width="72">`)
    }else {
        figure.append( `<img src="assets/img/users/default_user.jpg" alt="" height="72" width="72">`)
    }

    let btns = $('#btns');
    btns.html("");
    
    btns.append(`<button class='btn btn-pink little'
    onclick='displayPopUpStatus(${data.id})'
    > Changer status </button>`);
    btns.append(`<button class='btn ${data.isVerified == 1 ? 'btn-danger' : 'btn-success'} little'
         onclick='displayPopUp("updateActiveUser", ${data.id}, activePopUp(${data.isVerified == 0}))'
         > ${data.isVerified == 1 ? 'Désactiver' : 'Activer'} </button>`
    );
    btns.append(`<button class='btn btn-danger little' onclick='displayPopUp("deleteUserById", ${data.id}, deletePopUp())'> Supprimer </button>`);
    
    $('.aside-info').addClass("show");
}


