<section class="mt-20 pt-20 grid container">
    <?php if ($isSent): ?>
        <h2>Un lien de réinitialisation a été envoyé dans votre boîte mail</h2>
    <?php else: ?>
        <div class="grid col a-center j-center">
            <div class="col card w-mobile a-center" style="width: 400px">
                <?php $this->partialInclude("form", $user->getPwdForgetForm()); ?>
                <?php if ($error): ?>
                    <p><?= $error ?></p>
                <?php endif; ?>
            </div>
        </div>
    <?php endif; ?>
</section>
