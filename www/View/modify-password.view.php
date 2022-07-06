<section class="mt-20 pt-20 xs-pt-8 grid container xs-px-0">
    <?php if (!$tokenError): ?>
        <div class="grid col a-center j-center">
            <h1 class="mb-10 h2 xs-px-6">Modification de mon mot de passe</h1>
            <div class="col card w-mobile a-center" style="width: 400px">
                <?php $this->partialInclude("form", $user->getModifyPasswordForm($token)); ?>
            </div>
        </div>
        <?php if (isset($error['password'])): ?>
            <div class="error-msg mt-10"><?= $error['password'][0] ?></div>
        <?php elseif(isset($success)): ?>
            <div class="success-msg mt-10">  Votre mot de passe a été modifié avec succès</div>
        <?php endif; ?>
        
    <?php else: ?>
        <h2> Problème de token</h2>
    <?php endif; ?>
</section>
