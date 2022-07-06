<section class="mt-20 pt-20 grid container">
        <div class="grid col a-center j-center">
            <div class="col card w-mobile a-center" style="width: 400px">
                <?php $this->partialInclude("form", $user->getPwdForgetForm()); ?>
            </div>
        </div>
        <?php if (isset($error)): ?>
            <div class="error-msg mt-10"><?= $error['password'][0] ?></div>
        <?php elseif($isSent): ?>
            <div class="success-msg mt-10"> Un lien de réinitialisation a été envoyé dans votre boîte mail </div>
        <?php endif; ?>
    
</section>
