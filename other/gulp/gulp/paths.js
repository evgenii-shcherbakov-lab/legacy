const 
    fs = require('fs'),
    config  = JSON.parse(fs.readFileSync('config.json', {encoding: 'utf-8'}));

const   
    src = config.input,
    build = config.output,
    load = config.load,

    dir = config.dir,
    file = config.file;

module.exports = {
    src: {
        dir: src,
        jsonDir: src + dir.json,

        html: src + dir.root + file.html,
        pug: src + dir.root + file.pug,
        pugLayout: src + dir.pug + file.pug,
        cssLib: src + dir.cssLib + file.css,
        scss: src + dir.scss + file.scss,
        sass: src + dir.sass + file.sass,
        styl: src + dir.styl + file.styl,
        js: src + dir.js + file.js,
        jsLib: src + dir.jsLib + file.js,
        json: src + dir.json + file.json,
        font: src + dir.font + file.all,
        img: src + dir.img + file.all,
        svg: src + dir.svg + file.all,
        
        modules: src + file.module,
    },
    build: {
        dir: build,

        html: build + dir.root,
        css: build + dir.css,
        js: build + dir.js,
        // json: build + dir.json,
        font: build + dir.font,
        img: build + dir.img,
        svg: build + dir.svg,
    },
    inject: {
        html: build + dir.root + file.html,
        css: build + dir.css + file.css,
        js: build + dir.js + file.js
    },
    load: load + file.all
}