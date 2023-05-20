const   {src, dest} = require('gulp'),
        patchs      = require('../paths');

module.exports = function html() {
    return src(patchs.src.html, {allowEmpty: true}).pipe(dest(patchs.build.html));
}