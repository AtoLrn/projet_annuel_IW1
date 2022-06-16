const getPages = (tab) => {
    fetch('http://localhost/get-pages', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'GET',
    }).then((r) => {
        return r.json();
    }).then((data) => {
        setTablePage(data, tab)
    }).catch((error) => {
        console.log('Erreur : ' + error);
    });
}

const deletePageById = (id) => {
    console.log('here')
    fetch( `http://localhost/delete-page?id=${id}`, {
        method: 'DELETE',
    }).then(r => {
        tab = $('#list-table').DataTable();
        getList(tab);
    });
}

const setTablePage = (data, tab) => {
    tab.clear();
    for(const row of data) {
        let cols = [row['title'], row['path'], row['email']]
        let rowNode = tab
            .row.add( cols )
            .draw()
            .node();
        $(rowNode).click(function() {
            getPageById(row['id'])
        });
    }
}

const getPageById = (pageId) => {
    const form = Object.assign({}, {
        id: pageId
    })
    fetch('http://localhost/get-page', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(form),
    }).then((r) => {
        return r.json();
    }).then((data) => {
        setAsidePageInfo(data);
    }).catch((error) => {
        console.log('Erreur : ' + error);
    });
}

const setAsidePageInfo = (data) => {
    $('.aside-info').removeClass("show");
    let info = $('#infos');
    info.html("");
    info.append( `<p>${data.title}</p>` );
    info.append( `<p>${data.path}</p>` );

    let btns = $('#btns');
    btns.html("");
    const path = `/page/edit?id=${data.id}`
    btns.append( "<a href=" + path + " class='btn btn-pink little'> Éditer </a>" );
    btns.append( `<button class='btn btn-danger little' onclick='displayPopUp("Page", ${data.id})'> Supprimer </button>` );


    $('.aside-info').addClass("show");
}