const statusUser = {
    user: "Utilisateur",
    admin: "Adminnistrateur",
    chief: "Cuisinier"
}


const getUsers = (tab) => {
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
        setTableUser(data, tab);     
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

const setTableUser = (data, tab) => {

    var rowNode = tab
        .row.add( [ 'Fiona White', 32, 'Edinburgh', 'bonjour' ] )
        .draw()
        .node();
    
    tab.clear();
    for(const row of data) {
        let cols = []
        for(const col in row) {
            
            if(col != 'user_id') {
                cols.push(row[col])
            }
        }
        let rowNode = tab
        .row.add( cols )
        .draw()
        .node();
        $(rowNode).click(function() {
            getUserById(row['user_id'])
        });
    }
}

/*const setTableUser = (data, tab) => {

    var rowNode = tab
        .row.add( [ 'Fiona White', 32, 'Edinburgh', 'bonjour' ] )
        .draw()
        .node();
    
    tab.html("");
    for(const row of data) {
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
}*/


const btns = () => {
    return [
        "<button class='btn btn-pink'> Supprimer </button>",
        "<button class='btn btn-pink'> Changer status </button>",
    ]
} 

const setAsideInfo = (data) => {
    $('.aside-info').removeClass("show");
    let info = $('#infos');
    info.html("");
    info.append( `<p>${data.user_lastname}</p>` );
    info.append( `<p>${data.user_firstname}</p>` );
    info.append( `<p>${data.user_email}</p>` );
    info.append( `<p>${statusUser[data.user_status] }</p>` );

    let btns = $('#btns');
    btns.html("");
    btns.append( "<button class='btn btn-pink little'> Changer status </button>" );
    btns.append( `<button class='btn btn-danger little' onclick='displayPopUp(${data.user_id})'> Supprimer </button>` );
    

    $('.aside-info').addClass("show");
}


