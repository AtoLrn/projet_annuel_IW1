const statusIngredient = {
    inDemand: "En cours de traitement",
    enabled: "Activé",
    refused: "Refusé",
    disabled: "Désactivé"
}

const getIngredients = (tab) => {
    fetch('/get-ingredients', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'GET',
    }).then((r) => {
        return r.json();
    }).then((data) => {
        setTableIngredient(data, tab)
    }).catch((error) => {
        console.log('Erreur : ' + error);
    });
}

const setTableIngredient = (data, tab) => {
    tab.clear();
    for(const row of data) {
        let cols = [row.email, row.name, row.status, row.createdAt]
        let rowNode = tab
            .row.add( cols )
            .draw()
            .node();
        $(rowNode).click(function() {
            getIngredientById(row['id'])
        });
    }
}

const getIngredientById = (ingredientId) => {
    const form = Object.assign({}, {
        id: ingredientId
    })
    fetch('/get-ingredient', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(form),
    }).then((r) => {
        return r.json();
    }).then((data) => {
        setAsideIngredientInfo(data);
    }).catch((error) => {
        console.log('Erreur : ' + error);
    });
}

const setAsideIngredientInfo = (data) => {
    $('.aside-info').removeClass("show");
    let info = $('#infos');
    info.html("");
    info.append( `<p>${data.name}</p>` );
    info.append( `<p>${data.email}</p>` );
    info.append( `<p>${statusIngredient[data.status] }</p>` );

    let btns = $('#btns');
    btns.html("");
    if (data.status === 'inDemand') {
        btns.append( `<button class='btn btn-pink little' onclick='modifyIngredientStatus(${data.id}, "enabled")'> Aprouver </button>` );
        btns.append( `<button class='btn btn-danger little' onclick='modifyIngredientStatus(${data.id}, "refused")'> Refuser </button>` );
    } else if (data.status === 'enabled') {
        btns.append( `<button class='btn btn-pink little' onclick='modifyIngredientStatus(${data.id}, "disabled")'> Désactiver </button>` );
    } else if (data.status === 'disabled') {
        btns.append( `<button class='btn btn-pink little' onclick='modifyIngredientStatus(${data.id}, "enabled")'> Activer </button>` );
    }

    let ingredientImageDiv = $('#ingredientImage')
    ingredientImageDiv.attr('src', data.path)

    $('.aside-info').addClass("show");
}

const modifyIngredientStatus = (ingredientId, ingredientStatus) => {
    const form = Object.assign({}, {
        ingredient_id: ingredientId,
        ingredient_status: ingredientStatus,
    })
    fetch( `/modify-ingredient-status`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'PUT',
        body: JSON.stringify(form)
    }).then(r => {
        tab = $('#list-table').DataTable();
        getList(tab);
        getIngredientById(ingredientId);
    }).catch((error) => {
        console.log('Erreur : ' + error);
    });
}