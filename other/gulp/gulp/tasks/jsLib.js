const   {src, dest} = require('gulp'),
        uglify      = require('gulp-uglify-es').default,
        babel       = require('gulp-babel'),
        concat      = require('gulp-concat'),
        patchs      = require('../paths');

module.exports = function jsLib() {
    return src([
            patchs.src.jsLib, 
            '!' + patchs.src.modules
        ],{
            allowEmpty: true
        })
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(uglify())
        .pipe(concat('lib.min.js'))
        .pipe(dest(patchs.build.js));
}