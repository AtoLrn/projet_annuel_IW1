const status = {
    user: "Utilisateur",
    admin: "Adminnistrateur",
    chief: "Cuisinier"
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
        data = data[0]
        setAsideInfo(data);
        

        
    }).catch((error) => {
        console.log('Erreur : ' + error);
    });
}

const setAsideInfo = (data) => {
    let info = $('#infos');
    info.html("");
    info.append( `<p>${data.user_lastname}</p>` );
    info.append( `<p>${data.user_firstname}</p>` );
    info.append( `<p>${data.user_email}</p>` );
    info.append( `<p>${status[data.user_status] || "Utilisateur" }</p>` );
    $('.aside-info').addClass("show")
}
