let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/assets/js/index.js', 'public/js/mall/')
    .sass('resources/assets/sass/mall.scss', 'public/css')
    .options({
        postCss: [
            require('postcss-css-variables')()
        ]
    })
    .copy('resources/assets/js/external', 'public/js/external')
    .copy('resources/assets/css', 'public/css')
    // .copy('resources/assets/images', 'public/images')
