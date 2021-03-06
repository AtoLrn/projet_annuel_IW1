<section class="p-12 xs-p-6 grid h-per-20 list apparition">
    <h1 class="h1 mb-12 xs-ml-6">  <?= $listTpl['title'] ?> </h1> 
    <div class="mb-7 xs-ml-0 row j-bet w-per-15">
        <div>
            <p class="mb-2" > <?= $listTpl['search'] ?> </p>
            <input id="search" type="text" class="input input-search" placeholder="rechercher ...">
        </div>
        <?php
            if (isset($_GET['q']) && $_GET['q'] === 'page')
            {
                echo "<a href='/create-page' class='btn btn-pink xs-ml-0'>Créer une page</a>";
            }
        ?>
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
                        <div id="infos" class="col h-per-20 g-3 col-lg-5">
                        </div>
                        
                        <?php if( !isset($_GET['q']) || $_GET['q'] == "user"): ?>
                        <figure id="img-user" class="col-lg-1">
                            <img src="assets/img/users/default_user.jpg" alt="" height="72" width="72">
                        </figure>     
                        <?php endif; ?>
      
                    </div>
                    <div class="bd-t-1 bd-light-gray"></div>
                    <div id="btns" class="row j-end">
                    </div>
                </article>

                <?php
                if (key_exists('q', $_GET)) {
                    if ($_GET['q'] === 'certification') {
                        $this->partialInclude("certification-infos", []);
                    } elseif ($_GET['q'] === 'ingredient') {
                        $this->partialInclude("ingredient-infos", []);
                    } elseif ($_GET['q'] === 'article') {
                        
                    } elseif ($_GET['q'] === 'comment') {
                        $this->partialInclude("comment-infos", []);
                    } 
                }
                ?>
            </div>
        </aside>
    </section>

</section>
