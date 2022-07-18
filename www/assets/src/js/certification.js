const statusCertification = {
    inDemand: "En cours de traitement",
    approved: "Approuvé",
    refused: "Refusé"
}

const getCertifications = (tab) => {
    fetch('/get-certifications', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'GET',
    }).then((r) => {
        return r.json();
    }).then((data) => {
        setTableCertification(data, tab)
    }).catch((error) => {
        console.log('Erreur : ' + error);
    });
}

const setTableCertification = (data, tab) => {
    tab.clear();
    for(const row of data) {
        let cols = [row.email, row.status, row.createdAt]
        let rowNode = tab
            .row.add( cols )
            .draw()
            .node();
        $(rowNode).click(function() {
            getCertificationById(row['id'])
        });
    }
}

const getCertificationById = (certificationId) => {
    const form = Object.assign({}, {
        id: certificationId
    })
    fetch('/get-certification', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(form),
    }).then((r) => {
        return r.json();
    }).then((data) => {
        setAsideCertificationInfo(data);
    }).catch((error) => {
        console.log('Erreur : ' + error);
    });
}

const setAsideCertificationInfo = (data) => {
    $('.aside-info').removeClass("show");
    let info = $('#infos');
    info.html("");
    info.append( `<p>${data.lastname}</p>` );
    info.append( `<p>${data.firstname}</p>` );
    info.append( `<p>${data.email}</p>` );
    info.append( `<p>${statusCertification[data.status] }</p>` );

    let btns = $('#btns');
    btns.html("");
    if (data.status === 'inDemand') {
        btns.append( `<button class='btn btn-pink little' onclick='modifyCertificationStatus(${data.id}, "approved", ${data.userId})'> Aprouver </button>` );
        btns.append( `<button class='btn btn-danger little' onclick='modifyCertificationStatus(${data.id}, "refused", ${data.userId})'> Refuser </button>` );
    }

    let descriptionArea = $('#descriptionArea')
    descriptionArea.html("");
    descriptionArea.append(`${data.description}`)

    let idDocumentBtn = $('#idDocument')
    let officialDocumentBtn = $('#officialDocument')
    idDocumentBtn.attr('href', data.idDocumentPath)
    idDocumentBtn.attr('download', `${data.lastname}_${data.firstname}_idDocument`)
    officialDocumentBtn.attr('href', data.officialDocumentPath)
    officialDocumentBtn.attr('download', `${data.lastname}_${data.firstname}_officialDocument`)

    $('.aside-info').addClass("show");
}

const modifyCertificationStatus = (certificationId, certificationStatus, userId) => {
    const form = Object.assign({}, {
        certification_id: certificationId,
        certification_status: certificationStatus,
        user_id: userId
    })
    fetch( `/modify-certification-status`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'PUT',
        body: JSON.stringify(form)
    }).then(r => {
        tab = $('#list-table').DataTable();
        getList(tab);
        getCertificationById(certificationId);
    }).catch((error) => {
        console.log('Erreur : ' + error);
    });
}