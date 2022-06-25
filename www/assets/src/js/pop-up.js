const closePopUp = () => {
    $('#pop-up').remove();
}

const displayPopUp = (fonctionName, id, data) => {

    const html = `<div id="pop-up" class="cont-popup grid show">
                <section class="pop-up card grid p-6 col g-10">
                    <p class="h2">${data.title}</p>
                    <p class="c-light-gray"> ${data.subTitle} </p>
                    <div class="row j-bet g-6">
                        <button id="delete" class="btn btn-danger col-lg-4"> ${data.action} </button>
                        <button id="cancel" class="btn btn-outline-pink col-lg-4"> Annuler </button>         
                    </div>
                </section>
            </div>`;
    $('body').prepend(html);

    $('#delete').click( function() {
        closePopUp();
        window[fonctionName](id)
    });
    $('#cancel').click(closePopUp)
}

const displayPopUpStatus = (id) => {

    const html = `<div id="pop-up" class="cont-popup grid show">
                    <section class="pop-up card grid p-6 col g-10">
                        <p class="h2">Selectionner un nouveau statut</p>
                        <div class="row j-bet g-7">
                            <button id="val-user" class="btn btn-pink col-lg-5"> Utilisateur </button>
                            <button id="val-chief" class="btn btn-pink col-lg-5"> Cuisinier </button>
                            <button id="val-admin" class="btn btn-pink col-lg-5"> Administrateur </button>
                            <button id="cancel" class="btn btn-outline-pink col-lg-5"> Annuler </button>         
                        </div>
                    </section>
                </div>`;
    $('body').prepend(html);

    $('#val-user').click( function() {
        closePopUp();
        updateStatusUser('user', id);
    });
    $('#val-chief').click( function() {
        closePopUp();
        updateStatusUser('chief', id);
    });
    $('#val-admin').click( function() {
        closePopUp();
        updateStatusUser('admin', id);
    });
    $('#cancel').click(closePopUp)
}

const deletePopUp = () => ({
    title: "Confirmer-vous la suppression&nbsp;?",
    subTitle: "Si vous confirmez l'element sera supprimé définitivement",
    action: "Supprimer"
})

const activePopUp = (val) => ({
    title: `Confirmer-vous ${val ? 'l\'activation' : 'la désactivation'} de l'utilisateur ?`,
    subTitle: "Vous pourrez toujour le changer à nouveau plus tard",
    action: val ? 'Activer' : 'Désactiver'
})