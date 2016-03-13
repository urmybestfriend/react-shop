'use strict';

require('babel-core/register');

delete process.env.BROWSER;

require('./app.js').start();
