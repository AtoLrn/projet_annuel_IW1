<section class="p-12 grid h-per-20 list">
    <h1 class="h1 mb-12 xs-ml-6">  <?= $listTpl['title'] ?> </h1> 
    <div class="mb-7 xs-ml-6">
        <p class="mb-2" > <?= $listTpl['search'] ?> </p>
        <input id="search" type="text" class="input input-search" placeholder="rechercher ...">
    </div>
    <section class="table-container">
        <div class="table card p-6">     
            <table id="list-table" class="<?= $table ?> m-0 w-per-20" data-page-length="20">
                    <thead>
                        <tr>
                            <?php
                            $count = 0;
                            foreach($listTpl['columns'] as $key => $name):
                                $count++;?>
                                    <td class="<?= $count > 2 ? "desktop" : "" ?>"> <?= $name ?> </td>
                                <?php
                            endforeach;  ?>           
                        </tr>
                    </thead>
                    <tbody id="table-content">
                          <!-- data is set on load -->
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
</section>
