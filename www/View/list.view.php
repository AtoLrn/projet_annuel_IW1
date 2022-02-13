<section class="p-12 grid h-per-20">
   <h1 class="h1 mb-12">  <?= $listTpl['title'] ?> </h1> 
   <?php if(count($list) > 0): ?>
   <section class="row grid g-12 a-start">
        <div class="col-lg-8 card p-6">
           
            <table id="list-table" class="m-0 w-per-20" data-page-length="20">
                    <thead>
                        <tr>
                            <?php
                            foreach($list[0] as $key => $values):
                                $name = explode("_", $key);
                                $name = end($name); 
                                if($key != $table."_id"): ?>
                                    <td> <?= $name ?> </td>
                                <?php endif;
                            endforeach;  ?>           
                        </tr>
                    </thead>
                    <tbody>
                        <?php foreach($list as $key => $values): ?>
                            <tr id="<?= $key ?>" class="bd-t-1 bd-light-gray" onclick="getUsersById(<?= $values[ $table.'_id' ] ?>)">
                            <?php foreach($values as $key => $value): 
                                if($key != $table."_id"): ?>
                                    <td class="bd-t-1 bd-light-gray"><?= $value ?></td>
                                <?php endif;
                            endforeach;  ?>
                            </tr>
                        <?php endforeach;  ?>                      
                    </tbody>
            </table>
            
        </div>
        <aside class="col-lg-3 grid">
            <div class="col g-12 h-per-20">
                <article class="row-lg-6 card grid py-6 px-8 g-6">
                    <div class="row j-bet grid a-start">
                        <div class="col h-per-20 g-3">
                            <p>noé pigeau</p>
                            <p>lerin@antoine.be</p>
                            <p>admin</p>
                        </div>
                        <img src="assets/img/users/antoine.svg" alt="" height="72" width="72">
                    </div>
                    <div class="bd-t-1 bd-light-gray"></div>
                    <div>
                        <button>supprimer</button>
                    </div>
                </article>
                

                <article class="row-lg-6 card">
                    <h1>oui c"est moi</h1>
                </article>
            </div>
        </aside>
    </section>
    <?php else: ?>
            <p>il n'y a pas encore de données</p>
    <?php endif; ?>

</section>