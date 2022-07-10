const statusComment = {
    inDemand: "En cours de traitement",
    approved: "Approuvé",
    refused: "Refusé"
}

const getComments = (tab) => {
    fetch('http://localhost/get-comments', {
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
        let cols = []
        for(const col in row) {

            if(col !== 'comment_id') {
                cols.push(row[col])
            }
        }
        let rowNode = tab
            .row.add( cols )
            .draw()
            .node();
        $(rowNode).click(function() {
            getCommentById(row['comment_id'])
        });
    }
}

const getCommentById = (commentId) => {
    const form = Object.assign({}, {
        id: commentId
    })
    fetch('http://localhost/get-comment', {
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
        setAsideCommentInfo(data);
    }).catch((error) => {
        console.log('Erreur : ' + error);
    });
}

const setAsideCommentInfo = (data) => {
    $('.aside-info').removeClass("show");
    let info = $('#infos');
    info.html("");
    info.append(`<p>${data.user_lastname}</p>`);
    info.append(`<p>${data.user_firstname}</p>`);
    info.append(`<p>${data.user_email}</p>`);
    info.append(`<p>${statusComment[data.comment_status]}</p>`);

    let btns = $('#btns');
    btns.html("");
    if (data.comment_status === 'inDemand') {
        btns.append(`<button class='btn btn-pink little' onclick='modifyCommentStatus(${data.comment_id}, "approved")'> Aprouver </button>`);
        btns.append(`<button class='btn btn-danger little' onclick='modifyCommentStatus(${data.comment_id}, "refused")'> Refuser </button>`);
    } else if (data.comment_status === 'approved') {
        btns.append(`<button class='btn btn-pink little' onclick='modifyCommentStatus(${data.comment_id}, "refused")'> Désactiver </button>`)
    } else if (data.comment_status === 'refused') {
        btns.append(`<button class='btn btn-pink little' onclick='modifyCommentStatus(${data.comment_id}, "approved")'> Activer </button>`)
    }

    let commentContentArea = $('#commentContentArea');
    commentContentArea.html("")
    commentContentArea.append(`${data.comment_content}`)

    $('.aside-info').addClass("show");
}

const modifyCommentStatus = (commentId, commentStatus) => {
    const form = Object.assign({}, {
        comment_id: commentId,
        comment_status: commentStatus,
    })
    fetch( `http://localhost/modify-comment-status`, {
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