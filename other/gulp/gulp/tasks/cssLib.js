const   {src, dest} = require('gulp'),
        concat      = require('gulp-concat'),
        cleanCss    = require('gulp-clean-css'),
        patchs      = require('../paths');

module.exports = function cssLib() {
    return src(patchs.src.cssLib)
        .pipe(concat('lib.min.css'))
        .pipe(cleanCss())
        .pipe(dest(patchs.build.css));
}