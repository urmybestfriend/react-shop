'use strict';

var devServer = require('../build/webpack-dev-server'),
	config    = require('../config');

var port = config.webpack_port;
devServer.listen(port, 'localhost', function () {
	console.info("Open 3000 port in browser :) ");
});
