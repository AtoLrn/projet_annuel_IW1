<div>
    
    <?php 
     
    foreach($categories as $key => $category): ?>
        <article>
            <h1> <?= $category['category_name'] ?> </h1>
        </article>
    <?php endforeach; ?>
</div>