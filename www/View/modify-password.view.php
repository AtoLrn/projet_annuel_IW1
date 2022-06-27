<section class="mt-20 pt-20 grid container">
    <?php if (!$tokenError): ?>
        <div class="grid col a-center j-center">
            <div class="col card w-mobile a-center" style="width: 400px">
                <?php $this->partialInclude("form", $user->getModifyPasswordForm($token)); ?>
                <?php if ($error): ?>
                    <p><?= $error['password'][0] ?></p>
                <?php endif; ?>
            </div>
        </div>
    <?php else: ?>
        <h2> Problème de token</h2>
    <?php endif; ?>
</section>
