$(document).ready(() => {
    $('#left').click(() => {
        moveToLeft(
        )

    })  
    $('#right').click(() => {
        moveToRight()
    })
})

const getValue = () => {
    const container = $('#recette-container')
    return parseInt(container.attr("data-index"))
}

const moveToLeft = () => {
    const container = $('#recette-container')
    container.attr("data-index",getValue()-1 > 0? getValue()-1 : 0 )
    hideImage()

}

const moveToRight = () => {
    const container = $('#recette-container')
    container.attr("data-index", getValue()+1 > getAllImg().length - 1 ? getAllImg().length - 1 : getValue()+1)
    hideImage()

}

const getAllImg = () => {
    return $(".recette-img")
}

const hideImage = () => {
    const img = getAllImg()
    const selected = getValue()
    img.each((i,t) => {
        if (i < selected) {
            $(t).addClass('hidden-recipe')
            $(t).css({transform: `translateX(-${100 * (selected - 1)}% + -${(selected - 1) * 5}em) translateY(10%)`})
        }
        else {
            $(t).removeClass('hidden-recipe')
            $(t).css({transform: `translateX(calc(-${100 * selected}% + -${selected * 5}em))`})
        }
    })
}

const getArticles = (tab) => {
    fetch('/get-articles', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'GET',
    }).then((r) => {
        return r.json();
    }).then((data) => {
        setTableArticle(data, tab);     
    }).catch((error) => {
        console.log('Erreur : ' + error);
    });
}

const setTableArticle = (data, tab) => {
    tab.clear();
    for(const row of data) {
        let cols = [row.title, row.description, row.createdAt];
        let rowNode = tab
        .row.add( cols )
        .draw()
        .node();
        $(rowNode).click(function() {
            getArticleById(row.id)
        });
    }
}

const setAsideArticleInfo = (data) => {
    $('.aside-info').removeClass("show");
    let info = $('#infos');
    info.html("");
    info.append( `<p>${data.article.title}</p>` );
    info.append( `<span>${data.article.description}</span>` );
    info.append( `<p>Nombre de Commentaire: ${data.comments}</p>` );
    info.append( `<p>Note: ${data.note}</p>` );

    let btns = $('#btns');
    btns.html("");
    btns.append(`<button class='btn btn-danger little' onclick='displayPopUp("deleteArticleById", ${data.article.id}, deletePopUp())'> Supprimer </button>`);
    btns.append( `<a href="/recette?id=${data.article.id}"> <button class='btn btn-pink little'> Voir</button> </a> ` );
    btns.append( `<a href="/recette?id=${data.article.id}&modify"><button class='btn btn-success little'>  Modifier   </button></a>` );
    

    $('.aside-info').addClass("show");
}

const getArticleById = (articleId) => {
    const form = Object.assign({}, {
        id: articleId
    })
    fetch('/get-article', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(form),
    }).then((r) => {
        return r.json();
    }).then((data) => {
        setAsideArticleInfo(data);
    }).catch((error) => {
        console.log('Erreur : ' + error);
    });
}

const deleteArticleById = (id) => {
    fetch( `/delete-article?id=${id}`, {
        method: 'DELETE',
    }).then(r => {
        tab = $('#list-table').DataTable();
        $('.aside-info').removeClass("show");
        getList(tab);
    });
}

const deleteArticleChief = (id) => {
    fetch( `/delete-article?id=${id}`, {
        method: 'DELETE',
    }).then(r => {
        window.location.href = "/recettes"
    });
}
