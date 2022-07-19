<?php if($data['nbPages'] > 1): ?>
    <section class="row j-center pb-12">
        <?php 
        if($data['currentPage'] != 0):
            $data['query']['page'] = $data['currentPage'] - 1; ?>
            <a class="py-1 px-2 btn btn-outline-pink" href="<?= $data["redirect"]?><?= !empty($data['query']) ? '?' . http_build_query($data['query']) : '' ?>" > précedent</a>
        <?php 
        endif;
        for($i = 0 ; $i < $data['nbPages'] ; $i++):
            $data['query']['page'] = $i;
         ?>
            <a class="py-1 px-3 btn btn-outline-pink <?= $i == $data['currentPage'] ? '' : 'bd-0' ?>" href="<?= $data["redirect"]?><?= !empty($data['query']) ? '?' . http_build_query($data['query']) : '' ?>">
                <?= $i + 1; ?>
            </a>
        <?php endfor; ?>
        <?php  
        if($data['currentPage'] < $data['nbPages'] - 1):
            $data['query']['page'] = $data['currentPage'] + 1; ?>
            <a class="py-1 px-2 btn btn-outline-pink" href=" <?= $data['redirect'] . (!empty($data['query']) ? '?' . http_build_query($data['query']) : '') ?>" > suivant </a>
        <?php endif; ?>
    </section>
<?php endif; ?>

