const   {src, dest} = require('gulp'),
        inject      = require('gulp-inject'),
        fs          = require('fs'),
        config      = JSON.parse(fs.readFileSync('config.json', {encoding: 'utf-8'})),
        patchs      = require('../paths');

module.exports = function injectLinks() {
    return src(patchs.inject.html)
        .pipe(inject(src(
                [
                    patchs.inject.css,
                    patchs.inject.js
                ], 
                {read: false}
            ), config.inject
        ))
        .pipe(dest(patchs.build.html))
}