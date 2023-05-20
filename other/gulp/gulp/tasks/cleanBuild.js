const   del     = require('del'),
        patchs  = require('../paths');

module.exports = async function cleanBuild () {
    return del(patchs.build.dir);
}