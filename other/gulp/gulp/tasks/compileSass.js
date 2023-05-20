const   {src, dest}     = require('gulp'),
        sass            = require('gulp-sass'),
        gcmq            = require('gulp-group-css-media-queries'),
        autoprefixer    = require('gulp-autoprefixer'),
        cleancss        = require('gulp-cleancss'),
        rename          = require('gulp-rename'),
        fs              = require('fs'),
        config          = JSON.parse(fs.readFileSync('config.json', {encoding: 'utf-8'})),
        patchs          = require('../paths');

module.exports = function compileSass() {
    return src([
            patchs.src.scss, 
            patchs.src.sass,
            '!' + patchs.src.modules
        ])
        .pipe(sass())
        .pipe(gcmq())
        .pipe(autoprefixer(
            config.autoprefixer.config, 
            config.autoprefixer.options
        ))
        .pipe(cleancss({keepBreaks: false}))
        .pipe(rename({suffix: '.min'}))
        .pipe(dest(patchs.build.css));
}