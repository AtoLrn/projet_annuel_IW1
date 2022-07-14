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
        let cols = []
        for(const col in row) {

            if(col != 'ingredient_id') {
                cols.push(row[col])
            }
        }
        let rowNode = tab
            .row.add( cols )
            .draw()
            .node();
        $(rowNode).click(function() {
            getIngredientById(row['ingredient_id'])
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
        data = data[0]
        setAsideIngredientInfo(data);
    }).catch((error) => {
        console.log('Erreur : ' + error);
    });
}

const setAsideIngredientInfo = (data) => {
    $('.aside-info').removeClass("show");
    let info = $('#infos');
    info.html("");
    info.append( `<p>${data.ingredient_name}</p>` );
    info.append( `<p>${data.user_email}</p>` );
    info.append( `<p>${statusIngredient[data.ingredient_status] }</p>` );

    let btns = $('#btns');
    btns.html("");
    if (data.ingredient_status === 'inDemand') {
        btns.append( `<button class='btn btn-pink little' onclick='modifyIngredientStatus(${data.ingredient_id}, "enabled")'> Aprouver </button>` );
        btns.append( `<button class='btn btn-danger little' onclick='modifyIngredientStatus(${data.ingredient_id}, "refused")'> Refuser </button>` );
    } else if (data.ingredient_status === 'enabled') {
        btns.append( `<button class='btn btn-pink little' onclick='modifyIngredientStatus(${data.ingredient_id}, "disabled")'> Désactiver </button>` );
    } else if (data.ingredient_status === 'disabled') {
        btns.append( `<button class='btn btn-pink little' onclick='modifyIngredientStatus(${data.ingredient_id}, "enabled")'> Activer </button>` );
    }

    let ingredientImageDiv = $('#ingredientImage')
    ingredientImageDiv.attr('src', data.ingredient_path)

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