<h1>Homepage</h1>

<?php if (key_exists('firstname', $this->data)):?>

    <h2>Bienvenu <?php echo $this->data['firstname'] ?></h2>

<?php endif; ?>
