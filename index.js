'use strict';

var through = require('through2');
var candor  = require('candor');
var gutil   = require('gulp-util');
var rext    = require('replace-ext');
var path    = require('path');
var assign  = require('lodash.assign');

var PLUGIN_NAME = 'gulp-candor';

module.exports = function (options) {
    var opts = assign({
        fileType: 'html',
    }, options);

    return through.obj(function (file, enc, cb) {
        if (file.isStream()) {
            return cb(new gutil.PluginError(PLUGIN_NAME, 'Streaming not supported'));
        }

        if (file.isNull()) {
            return cb(null, file);
        }

        if (path.extname(file.path) === '.cdor') {
            return cb(null, file);
        }

        try {
            var result = candor.parse(file.contents.toString('utf8'));

            file.path = rext(file.path, '.' + opts.fileType);
            file.contents = new Buffer(res.result);

            return cb(null, file);
        } catch (err) {
            return cb(new gutil.PluginError(PLUGIN_NAME, err));
        }
    });
};