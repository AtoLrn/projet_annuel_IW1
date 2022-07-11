let mix = require('laravel-mix')

mix.setPublicPath('../dist')

mix.babel([
 '../src/js/jquery-3.6.0.min.js',
 '../src/js/editor-js.js',
 '../src/js/editor-js-header.js',
 '../src/js/editor-js-image.js',
 '../src/js/editor-js-quote.js',
 '../src/js/editor-js-delimiter.js',
 '../src/js/editor-js-list.js',
 '../src/js/user.js',
 '../src/js/pop-up.js',
 '../src/js/list.js',
 '../src/js/select.js',
 '../src/js/register-login.js',
 '../src/js/article.js',
 '../src/js/navbar.js',
 '../src//js/certification.js',
 '../src/js/ingredient.js',
 '../src/js/dashboard.js',
 '../src/js/star.js',
 '../src/js/comment.js',
 '../src/js/profile.js',
 '../src/js/page.js',
 '../src/js/follow.js'
], '../dist/main.js');

//mix.minify('../web/dist/main.js');

mix.sass('../src/scss/main.scss', '../dist/').options({
    processCssUrls: false,
})

module.exports = {
    //...
    watch: true,
    mode: 'production',
}
