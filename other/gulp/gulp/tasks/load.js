const   {src, dest} = require('gulp'),
        patchs      = require('../paths');

module.exports = async function load() {
    return src(patchs.load).pipe(dest(patchs.src.dir));
}