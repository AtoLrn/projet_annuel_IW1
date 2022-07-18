const statusComment = {
    inDemand: "En cours de traitement",
    approved: "Approuvé",
    refused: "Refusé"
}

const getComments = (tab) => {
    fetch('/get-comments', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'GET',
    }).then((r) => {
        return r.json();
    }).then((data) => {
        setTableComment(data, tab)
    }).catch((error) => {
        console.log('Erreur : ' + error);
    });
}

const setTableComment = (data, tab) => {
    tab.clear();
    for(const row of data) {
        let cols = [row.email, row.status, row.createdAt]
        let rowNode = tab
            .row.add( cols )
            .draw()
            .node();
        $(rowNode).click(function() {
            getCommentById(row['id'])
        });
    }
}

const getCommentById = (commentId) => {
    const form = Object.assign({}, {
        id: commentId
    })
    fetch('/get-comment', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(form),
    }).then((r) => {
        return r.json();
    }).then((data) => {
        setAsideCommentInfo(data);
    }).catch((error) => {
        console.log('Erreur : ' + error);
    });
}

const setAsideCommentInfo = (data) => {
    $('.aside-info').removeClass("show");
    let info = $('#infos');
    info.html("");
    info.append(`<p>${data.lastname}</p>`);
    info.append(`<p>${data.firstname}</p>`);
    info.append(`<p>${data.email}</p>`);
    info.append(`<p>${statusComment[data.status]}</p>`);

    let btns = $('#btns');
    btns.html("");
    if (data.status === 'inDemand') {
        btns.append(`<button class='btn btn-pink little' onclick='modifyCommentStatus(${data.id}, "approved")'> Aprouver </button>`);
        btns.append(`<button class='btn btn-danger little' onclick='modifyCommentStatus(${data.id}, "refused")'> Refuser </button>`);
    } else if (data.status === 'approved') {
        btns.append(`<button class='btn btn-pink little' onclick='modifyCommentStatus(${data.id}, "refused")'> Désactiver </button>`)
    } else if (data.status === 'refused') {
        btns.append(`<button class='btn btn-pink little' onclick='modifyCommentStatus(${data.id}, "approved")'> Activer </button>`)
    }

    let commentContentArea = $('#commentContentArea');
    commentContentArea.html("")
    commentContentArea.append(`${data.content}`)

    $('.aside-info').addClass("show");
}

const modifyCommentStatus = (commentId, commentStatus) => {
    const form = Object.assign({}, {
        comment_id: commentId,
        comment_status: commentStatus,
    })
    fetch( `/modify-comment-status`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'PUT',
        body: JSON.stringify(form)
    }).then(r => {
        tab = $('#list-table').DataTable();
        getList(tab);
        getCommentById(commentId);
    }).catch((error) => {
        console.log('Erreur : ' + error);
    });
}