'use strict';

var nconf = require('nconf');
var path = require('path');
var mDockerHost = process.env.IPLN_MONGO_PORT_27017_TCP_ADDR;
var mDockerPort = process.env.IPLN_MONGO_PORT_27017_TCP_PORT;

if(!process.env.SHOP) {
    process.env.SHOP = 'development';
}

var env = process.env.SHOP;

if (env !== undefined) {
    env = env.trim();
} else {
    env = 'development';
}

nconf
    .argv()
    .env()
    .file({
        file: path.join(__dirname, env + '.json')
    });

if(mDockerHost !== undefined && mDockerPort !== undefined) {
    nconf.set('mongo:host', mDockerHost);
    nconf.set('mongo:port', mDockerPort);
}

var mongoURI = 'mongodb://' +
    nconf.get('mongo:host') + ':' +
    nconf.get('mongo:port') + '/' +
    nconf.get('mongo:db');

nconf.set('mongo:uri', mongoURI);

module.exports = nconf;
