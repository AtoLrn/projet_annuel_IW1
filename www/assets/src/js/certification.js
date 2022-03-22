const statusCertification = {
    inDemand: "En cours de traitement",
    approved: "Approuvé",
    refused: "Refusé"
}

const getCertifications = (tab) => {
    fetch('http://localhost/get-certifications', {
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
        let cols = []
        for(const col in row) {

            if(col != 'certification_id') {
                cols.push(row[col])
            }
        }
        let rowNode = tab
            .row.add( cols )
            .draw()
            .node();
        $(rowNode).click(function() {
            getCertificationById(row['certification_id'])
        });
    }
}

const getCertificationById = (certificationId) => {
    const form = Object.assign({}, {
        id: certificationId
    })
    fetch('http://localhost/get-certification', {
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
        setAsideCertificationInfo(data);
    }).catch((error) => {
        console.log('Erreur : ' + error);
    });
}

const setAsideCertificationInfo = (data) => {
    $('.aside-info').removeClass("show");
    let info = $('#infos');
    info.html("");
    info.append( `<p>${data.user_lastname}</p>` );
    info.append( `<p>${data.user_firstname}</p>` );
    info.append( `<p>${data.user_email}</p>` );
    info.append( `<p>${statusCertification[data.certification_status] }</p>` );

    let btns = $('#btns');
    btns.html("");
    if (data.certification_status === 'inDemand') {
        btns.append( `<button class='btn btn-pink little' onclick='modifyCertificationStatus(${data.certification_id}, "approved", ${data.user_id})'> Aprouver </button>` );
        btns.append( `<button class='btn btn-danger little' onclick='modifyCertificationStatus(${data.certification_id}, "refused", ${data.user_id})'> Refuser </button>` );
    }


    $('.aside-info').addClass("show");
}

const modifyCertificationStatus = (certificationId, certificationStatus, userId) => {
    const form = Object.assign({}, {
        certification_id: certificationId,
        certification_status: certificationStatus,
        user_id: userId
    })
    console.log(form)
    fetch( `http://localhost/modify-certification-status`, {
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