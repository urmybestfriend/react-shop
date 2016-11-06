'use strict';

import request from 'superagent';

const API_URL = '/api/v1';
const HEADERS = { Accept: 'application/json' };
const setPrefix = (prefix) => {
    return (req) => {
        if (req.url && req.url.indexOf(prefix) === -1) {
            req.url = `${prefix}${req.url}`;
        }

        return req;
    };
};

var builder = (httpMethod, apiMethod, params, headers=HEADERS) => {
    let paramsTransport = httpMethod === 'get' ?
        'query' :
        'send';

    return new Promise((resolve, reject) => {
        request[httpMethod](apiMethod)
            .set(headers)
            [paramsTransport](params)
            .use(setPrefix(API_URL))
            .end((err, res) => {
                if (err || !res || !res.ok) {
                    reject(err);
                } else {
                    resolve(res.body, res);
                }
            });
    });
};

export default {
    fetch(httpMethod, apiMethod, params) {
        return builder(httpMethod, apiMethod, params);
    },

    get(apiMethod, params, queueName) {
        return builder('get', apiMethod, params);
    },

    post(apiMethod, params, queueName) {
        return builder('post', apiMethod, params);
    }
};
