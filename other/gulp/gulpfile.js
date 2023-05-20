/*
ПЕРВОНАЧАЛЬНАЯ НАСТРОЙКА В ТЕРМИНАЛЕ:

npm i --save-dev gulp gulp-sass gulp-stylus gulp-autoprefixer browser-sync del nib gulp-group-css-media-queries require-dir gulp-inject gulp-concat gulp-clean-css gulp-imagemin imagemin-jpeg-recompress gulp-cleancss gulp-rename gulp-pug gulp-babel gulp-uglify-es

ЗАПУСК СЕРВЕРА:

npm i
npm start

ОСТАНОВКА:

CTRL + C
*/

//'use strict';

const   {series, parallel, watch}   = require('gulp'),
        requireDir                  = require('require-dir'),
        browserSync                 = require('browser-sync').create(),
        tasks                       = requireDir('./gulp/tasks', {recurse: true}),
        patchs                      = require('./gulp/paths');

function watcher() {
    browserSync.init({
        server: {
            baseDir: patchs.build
        },
        notify: false
    });
    watch(patchs.src.html).on('change', 
        series(tasks.html, /*tasks.injectLinks,*/ browserSync.reload)
    );
    watch([patchs.src.pug, patchs.src.pugLayout]).on('change', 
        series(tasks.compilePug, browserSync.reload)
    );
    watch(patchs.src.cssLib).on('change', 
        series(tasks.cssLib, browserSync.reload)
    );
    watch(patchs.src.styl).on('change', 
        series(tasks.compileStylus, browserSync.reload)
    );
    watch([patchs.src.sass, patchs.src.scss]).on('change', 
        series(tasks.compileSass, browserSync.reload)
    );
    watch(patchs.src.jsLib).on('change', 
        series(tasks.jsLib, browserSync.reload)
    );
    watch(patchs.src.js).on('change', 
        series(tasks.js, browserSync.reload)
    );
    watch(patchs.src.json).on('change', 
        series(tasks.compilePug, browserSync.reload)
    );
    watch(patchs.src.font).on('change', 
        series(tasks.font, browserSync.reload)
    );
    watch(patchs.src.img).on('change', 
        series(tasks.img, browserSync.reload)
    );
    watch(patchs.src.svg).on('change', 
        series(tasks.svg, browserSync.reload)
    );
}

exports.clean_src = tasks.cleanSrc;
exports.clean_build = tasks.cleanBuild;
exports.clean_all = series(
    tasks.cleanSrc,
    tasks.cleanBuild
)

exports.load = series(
    tasks.cleanSrc,
    tasks.load,
    parallel(
        tasks.html,
        tasks.compilePug,
        tasks.cssLib,
        tasks.compileSass, 
        tasks.compileStylus,
        tasks.jsLib,
        tasks.js,
        tasks.font,
        tasks.img,
        tasks.svg
    ),
    //tasks.injectLinks,
    watcher
)

exports.default = series(
    tasks.cleanBuild,
    parallel(
        tasks.html,
        tasks.compilePug,
        tasks.cssLib,
        tasks.compileSass, 
        tasks.compileStylus,
        tasks.jsLib,
        tasks.js,
        tasks.font,
        tasks.img,
        tasks.svg
    ),
    //tasks.injectLinks,
    watcher
)