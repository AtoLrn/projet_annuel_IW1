<main class="grid col login-register-bg min-h-20 a-center j-center">
    <?php if ($isCreated): ?>
        <h1>Votre compte à bien été créé!</h1>
        <h2>Un mail vous a été envoyé afin de confirmer votre adresse</h2>
    <?php else: ?>
         <div class="col card bg-white w-mobile a-center">
            <div class="row j-center g-0">
                <button id="loginButton" class="col-lg-6 btn selector-button login" >Connexion</button>
                <button id="registerButton" class="col-lg-6 btn selector-button register" >S'inscrire</button>
            </div>
            <div class="g-5 col a-center">
                <?php $this->partialInclude("form", $user->getLoginForm()) ?>
                <?php $this->partialInclude("form", $user->getRegisterForm()) ?>
            </div>
            <?php if ($errorMessage !== null): ?>
                <p><?= $errorMessage ?></p>
            <?php endif; ?>
        </div>
    <?php endif; ?>
    <svg class="bulle-1" width="337" height="340" viewBox="0 0 337 340" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="168.5" cy="170" rx="168.5" ry="170" style="fill: #FFB1C9"/>
    </svg>
    <svg class="bulle-2" width="337" height="340" viewBox="0 0 337 340" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="168.5" cy="170" rx="168.5" ry="170" style="fill: #FFB1C9"/>
    </svg>
    <svg class="bulle-3" width="337" height="340" viewBox="0 0 337 340" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="168.5" cy="170" rx="168.5" ry="170" style="fill: #FFB1C9"/>
    </svg>
    <svg class="bulle-4" width="337" height="340" viewBox="0 0 337 340" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="168.5" cy="170" rx="168.5" ry="170" style="fill: #FFB1C9"/>
    </svg>
</main>
