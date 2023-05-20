const   fs      = require('fs'),
        path    = require('path'),
        paths   = require('../paths');

module.exports = () => {
    let data = {};

    try {
        fs.readdirSync(paths.src.jsonDir).forEach(json => {
            const name = path.basename(json).replace(path.extname(json), '')
            data[name] = JSON.parse(fs.readFileSync(paths.src.jsonDir + json))
        })
    } catch (e) {
        console.log(e)
    }

    return data
}