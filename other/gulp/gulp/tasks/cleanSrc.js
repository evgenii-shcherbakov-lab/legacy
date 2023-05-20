const   del     = require('del'),
        patchs  = require('../paths');

module.exports = async function cleanSrc() {
    return del(patchs.src.dir);
}