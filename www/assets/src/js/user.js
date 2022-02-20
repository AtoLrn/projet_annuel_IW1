const statusUser = {
    user: "Utilisateur",
    admin: "Adminnistrateur",
    chief: "Cuisinier"
}

const getUsers = () => {
    console.log("nice")
    fetch('http://localhost/get-users', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'GET',
    }).then((r) => {
        return r.json();
    }).then((data) => {
        console.log(data)
        setTableUser(data);     
    }).catch((error) => {
        console.log('Erreur : ' + error);
    });
}

const getUserById = (userId) => {
    console.log(userId)
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

const setTableUser = (data) => {
    let content = $('#table-content');
    content.html("");
    for(const row of data) {
        console.log(row)
        let tr = $("<tr></tr>")
        tr.addClass("bd-t-1 bd-light-gray");
        tr.click(function() {
            getUserById(row['user_id'])
        });
        content.append(tr);
        let i = 0
        for(const col in row) {
            
            if(col != 'user_id') {
                let td = $('<td></td>')
                td.addClass("bd-t-1 bd-light-gray")

                if(i > 2)td.addClass("desktop")
                if(col == 'user_status') {
                    td.html(statusUser[row[col]])
                }else {
                    td.html(row[col]);
                }
                tr.append(td);
            }
            i++;
        }

        

    }
}

const setAsideInfo = (data) => {
    let info = $('#infos');
    info.html("");
    info.append( `<p>${data.user_lastname}</p>` );
    info.append( `<p>${data.user_firstname}</p>` );
    info.append( `<p>${data.user_email}</p>` );
    info.append( `<p>${statusUser[data.user_status] }</p>` );
    $('.aside-info').addClass("show");
}


