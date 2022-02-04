<h1>S'inscrire</h1>


<?php if ($isCreated): ?>

<h1>Votre compte à bien été créé!</h1>
<h2>Un mail vous a été envoyé afin de confirmer votre adresse</h2>

<?php
    else:
    $this->partialInclude("form", $user->getRegisterForm());
    endIf
?>