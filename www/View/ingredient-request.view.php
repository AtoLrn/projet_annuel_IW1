<main class="grid col login-register-bg min-h-20 a-center j-center">
    <h1 class="mb-10 h2 xs-px-6">Demande de nouvel ingrédient</h1>

    <div class="col card bg-white w-mobile a-center">
        <?php if(!isset($demandAlreadyExist)): ?>
                <div class="g-5 col a-center p-8">
                    <?php $this->partialInclude("form", $ingredient->getIngredientRequestForm()) ?>
                </div>
        <?php else: ?>
            <div class="g-5 row a-center p-8 j-center">Une demande est déjà en cours de traitement <?php include "assets/img/logo/settings.php" ?> </div>
        <?php endif; ?>
    </div>
    <?php if(isset($isRequestCreated)): ?>
        <div class="success-msg mt-10">
            Votre demande a bien été envoyée !
        </div>
    <?php endif; ?>
</main>
