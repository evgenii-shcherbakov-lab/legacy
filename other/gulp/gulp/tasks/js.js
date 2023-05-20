const   {src, dest} = require('gulp'),
        uglify      = require('gulp-uglify-es').default,
        babel       = require('gulp-babel'),
        rename      = require('gulp-rename'),
        patchs      = require('../paths');

module.exports = function js() {
    return src([
            patchs.src.js,
            '!' + patchs.src.modules
        ])
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(dest(patchs.build.js));
}