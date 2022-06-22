const statusUser = {
    user: "Utilisateur",
    admin: "Adminnistrateur",
    chief: "Cuisinier"
}


const deleteUserById = (id) => {
    fetch( `http://localhost/delete-user?id=${id}`, {
        method: 'DELETE',
    }).then(r => {
        tab = $('#list-table').DataTable();
        getList(tab);
    });
}


const getUsers = (tab) => {
    fetch('http://localhost/get-users', {
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
        setAsideUserInfo(data);
    }).catch((error) => {
        console.log('Erreur : ' + error);
    });
}

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

    let figure = $('#img-user')
    figure.html("")
    if(data.profilePicture != null) {
        console.log(data);
        figure.append( `<img src="${data.profilePicture}" alt="" height="72" width="72">`)
    }else {
        figure.append( `<img src="assets/img/users/default_user.jpg" alt="" height="72" width="72">`)
    }

    let btns = $('#btns');
    btns.html("");
    btns.append( "<button class='btn btn-pink little'> Changer status </button>" );
    btns.append( `<button class='btn btn-danger little' onclick='displayPopUp(${data.id})'> Supprimer </button>` );
    

    $('.aside-info').addClass("show");
}


