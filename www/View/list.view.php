<section class="p-12 grid h-per-20 list">
    <h1 class="h1 mb-12 xs-ml-6">  <?= $listTpl['title'] ?> </h1> 
    <?php if(count($list) > 0): ?>
    <div class="mb-7 xs-ml-6">
        <p class="mb-2" >Rechercher :</p>
        <input id="search" type="text" class="input input-search" placeholder="rechercher ...">
    </div>
    <section class="table-container">
        <div class="table card p-6">     
            <table id="list-table" class="m-0 w-per-20" data-page-length="20">
                    <thead>
                        <tr>
                            <?php
                            $count = 0;
                            foreach($list[0] as $key => $values):
                                $count++;
                                $name = explode("_", $key);
                                $name = end($name); 
                                if($key != $table."_id"): ?>
                                    <td class="<?= $count > 3 ? "desktop" : "" ?>"> <?= $name ?> </td>
                                <?php endif;
                            endforeach;  ?>           
                        </tr>
                    </thead>
                    <tbody>
                        <?php foreach($list as $key => $values): ?>
                            <tr id="<?= $key ?>" class="bd-t-1 bd-light-gray" onclick="getUserById(<?= $values[ $table.'_id' ] ?>)">
                            <?php
                             $count = 0;
                             foreach($values as $key => $value): 
                                $count++;
                                if($key != $table."_id"): ?>
                                    <td class="bd-t-1 bd-light-gray <?= $count > 3 ? " desktop" : "" ?>"><?= $value ?></td>
                                <?php endif;
                            endforeach;  ?>
                            </tr>
                        <?php endforeach;  ?>                      
                    </tbody>
            </table>          
        </div>
        <aside class="aside-info col-lg-3 grid">
            <div class="col g-12 h-per-20">
                <article class="row-lg-6 card grid py-6 px-8 g-6 bg-white">
                    <div class="row j-end grid" onclick="closeMenu()"> 
                        <p class="link"> X </p>
                    </div>
                    <div class="row j-bet grid a-start">
                        <div id="infos" class="col h-per-20 g-3">
                            <p>nom</p>
                            <p>prénom</p>
                            <p>email</p>
                            <p>status</p>
                        </div>
                        <img src="assets/img/users/antoine.svg" alt="" height="72" width="72">
                    </div>
                    <div class="bd-t-1 bd-light-gray"></div>
                    <div>
                        <button>supprimer</button>
                    </div>
                </article>
                

                <article class="row-lg-6 card bg-white">
                    <h1>oui c"est moi</h1>
                </article>
            </div>
        </aside>
    </section>
    <?php else: ?>
            <p>il n'y a pas encore de données</p>
    <?php endif; ?>

</section>