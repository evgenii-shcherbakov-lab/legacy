const   
    {src, dest}     = require('gulp'),
    stylus          = require('gulp-stylus'),
    gcmq            = require('gulp-group-css-media-queries'),
    autoprefixer    = require('gulp-autoprefixer'),
    nib             = require('nib'),
    cleancss        = require('gulp-cleancss'),
    rename          = require('gulp-rename'),
    fs              = require('fs'),
    config          = JSON.parse(fs.readFileSync('config.json', {encoding: 'utf-8'})),
    patchs          = require('../paths');

    console.log(["last 15 versions", "> 1%", "ie 8", "ie 7"])

module.exports = function compileStylus() {
    return src([
            patchs.src.styl,
            '!' + patchs.src.modules
        ])
        .pipe(stylus({
            use: nib()
        }))
        .pipe(gcmq())
        .pipe(autoprefixer(
            config.autoprefixer.config, 
            config.autoprefixer.options
        ))
        .pipe(cleancss({keepBreaks: false}))
        .pipe(rename({suffix: '.min'}))
        .pipe(dest(patchs.build.css));
}