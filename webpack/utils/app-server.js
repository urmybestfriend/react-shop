'use strict';

var cp = require('child_process');
var path = require('path');
var watch = require('node-watch');
var opener = require('opener');
var _ = require('lodash');

var APP_PATH = path.join(__dirname, '../../src/server');
var WATCH_PATH = path.join(__dirname, '../../src/server');

var app;
var isStarted;

var startApp = function () {
    var env = _.assign({NODE_ENV: 'development', WEBPACK_SERVE: true}, process.env);
    app = cp.fork(APP_PATH, {env: env});
    app.once('message', function(message) {
        if (message.match(/^online$/)) {
            if(!isStarted) {
                isStarted = true;
                opener('http://localhost:3000');

                watch(
                    WATCH_PATH,
                    function(file) {
                        console.log('restarting app');
                        app.kill('SIGTERM');
                        return startApp();
                    }
                );
            }
        }
    });
};

process.on('exit', function() {
    app.kill('SIGTERM');
});

module.exports = function() {
    if(!app) {
        return startApp();
    }
};
