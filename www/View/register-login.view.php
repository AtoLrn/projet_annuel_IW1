<main class="grid col login-register-bg min-h-20 a-center j-center">
    <?php if (isset($isCreated)): ?>
        <h1>Votre compte à bien été créé!</h1>
        <h2>Un mail vous a été envoyé afin de confirmer votre adresse</h2>
    <?php else: ?>
         <div class="col card w-mobile a-center" style="width: 400px">
            <div class="row j-center g-0">
                <button id="loginButton" class="col-lg-6 btn selector-button left" >Connexion</button>
                <button id="registerButton" class="col-lg-6 btn selector-button right" >S'inscrire</button>
            </div>
            <div class="g-5 col a-center w-per-20">
                <?php $this->partialInclude("form", $user->getLoginForm()); ?>
                <?php 
                $registerForm = $user->getRegisterForm();
                $registerForm['error'] = $errorMessage??[];
                $this->partialInclude("form", $registerForm);
                ?>
            </div>
            <?php if (isset($errorMessage) && (isset($errorMessage['server']) || isset($errorMessage['login']))): ?>
                <p class="c-error pb-4"><?= $errorMessage['login']??$errorMessage['server'] ?></p>
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
