<div id="homeContainer" class="grid mt-18 mx-12">
    <h1 class="h1">Dashboard</h1>
    <div id="numberInfo" class="card row j-arr mt-8">
        <section class="col a-center my-7">
            <img src="../assets/img/logo/users.svg" alt="" width="16">
            <p class="fs-4">Total Users</p>
            <p class="fs-12 fc-pink mt-2 fw-b"><?= $totalUser ?></p>
            <div class=" row fs-4 g-0"><p class="fw-b"><?= $ratioNewOldUsers >= 0 ? "+" : "-" ?><?= round($ratioNewOldUsers,2) ?></p><p class="fst-i">% from the last week</p></div>
        </section>
        <section class="col a-center my-7">
            <img src="../assets/img/logo/users.svg" alt="" width="16">
            <p class="fs-4">Total Chiefs</p>
            <p class="fs-12 fc-pink mt-2 fw-b"><?= $totalChief ?></p>
            <div class=" row fs-4 g-0"><p class="fw-b"><?= $ratioNewOldChiefs >= 0 ? "+" : "-" ?><?= round($ratioNewOldChiefs, 2) ?></p><p class="fst-i">% from the last week</p></div>
        </section>
        <section class="col a-center my-7">
            <img src="../assets/img/logo/users.svg" alt="" width="16">
            <p class="fs-4">Total Articles</p>
            <p class="fs-12 fc-pink mt-2 fw-b"><?= $totalArticle ?></p>
            <div class=" row fs-4 g-0"><p class="fw-b"><?= $ratioNewOldArticles >= 0 ? "+" : "-" ?><?= round($ratioNewOldArticles, 2) ?></p><p class="fst-i">% from the last week</p></div>
        </section>
    </div>
    <div id="UserChartAndTab" class="row mt-8 j-bet">
        <section class="col w-per-20">
            <div class="table card">
                <div class="row g-0">
                    <button id="userChartButton" class="col-lg-2 selector-button left selected">Évolution utilisateur</button>
                    <button id="articleChartButton" class="col-lg-2 selector-button right">Évolution Article</button>
                </div>
                <div class="px-6 pb-6">
                    <div id="userChart" class="smooth-div"></div>
                    <div id="articleChart" class="hidden"></div>
                </div>
            </div>
        </section>
    </div>
    <div class="row mt-8 j-arr card">
        <section class="col a-center my-7 ">
            <p class="fs-4">Demande de certification</p>
            <p class="fs-12 fc-pink mt-2 fw-b"><?= $totalCertificationDemand ?></p>
        </section>
        <section class="col a-center my-7 ">
            <p class="fs-4">Demande ingredient</p>
            <p class="fs-12 fc-pink mt-2 fw-b"><?= $totalIngredientDemand ?></p>
        </section>
    </div>
</div>