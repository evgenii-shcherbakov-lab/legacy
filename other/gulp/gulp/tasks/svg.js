const   {src, dest} = require('gulp'),
        patchs      = require('../paths');

module.exports = async function svg() {
    return src(patchs.src.svg, {allowEmpty: true}).pipe(dest(patchs.build.svg));
} 