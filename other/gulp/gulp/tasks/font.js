const   {src, dest} = require('gulp'),
        patchs      = require('../paths');

module.exports = async function font() {
    return src(patchs.src.font, {allowEmpty: true}).pipe(dest(patchs.build.font));
} 