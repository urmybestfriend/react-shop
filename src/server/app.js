'use strict';

import express from 'express';
import mongoMiddleware from './middleware/mongo';
import serverMiddleware from './middleware/server';
import Promise from 'bluebird';

const app = express();
let isAppStarted = false;

app.start = () => {
    if(!isAppStarted) {
        isAppStarted = true;
        Promise.all([
            serverMiddleware(app),
            mongoMiddleware(app)
        ]).then(() => {
            if (process.send) {
                process.send('online');
            }
        }, (error) => {
            console.error(error);
        });
    }
};

if (!module.parent) {
    try {
        app.start();
    } catch(e) {}
}

module.exports = app;
