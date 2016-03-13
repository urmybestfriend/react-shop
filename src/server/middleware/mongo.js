'use strict';

import Promise from 'bluebird';
import mongoose from 'mongoose';
import async from 'async';

import env from '../../../env';

export default (app) => {
    return new Promise((resolve, reject) => {
        if (app.mongo) {
            mongoose.connection.close();
            app.mongo = null;
        }

        if (env.get('ORGANIZER') === 'development') {
            mongoose.set('debug', (collection, method, query, doc) => {
                console.log('mongo data: ', collection, method, query, doc);
            });
        }

        mongoose.connection.once('open', () => {
            app.mongo = mongoose.connection;
            console.log('connected to mongo');
            resolve();
        });

        mongoose.connection.on('error', (err) => {
            console.log('error connection');
            reject();
        });


        mongoose.connect(env.get('mongo:uri'), env.get('mongo:options'));
    });
};
