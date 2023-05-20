const   {src, dest} = require('gulp'),
        imagemin    = require('gulp-imagemin'),
        imgCompress = require('imagemin-jpeg-recompress'),
        fs          = require('fs'),
        config      = JSON.parse(fs.readFileSync('config.json', {encoding: 'utf-8'})),
        patchs      = require('../paths');

        console.log('imgc: ' + config.imgCompress)

module.exports = function img() {
    return src(patchs.src.img, {allowEmpty: true})
        .pipe(imagemin([
            imgCompress(config.imgCompress),
            imagemin.gifsicle(),
            imagemin.optipng(),
            imagemin.svgo()
        ]))
        .pipe(dest(patchs.build.img));
}