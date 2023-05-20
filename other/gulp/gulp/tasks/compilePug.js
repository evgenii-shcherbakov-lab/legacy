const   {src, dest} = require('gulp'),
        pug         = require('gulp-pug'),
        json        = require('./json'),
        paths       = require('../paths');

module.exports = function compilePug() {
    return src(
        [
            paths.src.pug,
            '!' + paths.src.pugLayout,
            '!' + paths.src.modules
        ], 
        {allowEmpty: true}
    )
    .pipe(pug({pretty: true, data: {json: json()}}))
    .pipe(dest(paths.build.html))
};