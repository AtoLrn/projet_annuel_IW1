<main class="grid col login-register-bg min-h-20 a-center j-center">
    <h1>Demande de certification</h1>

    <div class="col card bg-white w-mobile a-center">
        <?php if($this->data["connectedUser"]): ?>
            <?php if($demandAlreadyExist): ?>
                <?php if($isRequestCreated): ?>
                    <p>Votre demande à bien été envoyé</p>
                <?php else: ?>
                     <div class="g-5 col a-center">
                         <?php $this->partialInclude("form", $certification->getCertificationRequestForm()) ?>
                     </div>
                <?php endif; ?>
            <?php else: ?>
                <p>Une demande est déjà en cours de traitement</p>
            <?php endif; ?>
        <?php else: ?>
            <p>Vous devez être connecté pour faire une demande de certification</p>
        <?php endif; ?>
    </div>
</main>
