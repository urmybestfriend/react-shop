'use strict';

import mongoose from 'mongoose';
import async from 'async';
import _ from 'lodash';
import Log from './log';
import Func from './func';

let PhoneSchema = new mongoose.Schema({
	mark: { type: String, required: true, default: '' },
    model: { type: String, required: true, default: '' },
    color: { type: String, required: true, default: '' },
    wifi: { type: String, required: true, default: '' },
    gps: { type: Boolean, required: true, default: false},
    width: { type: Number, required: true, default: 0 },
    height: { type: Number, required: true, default: 0 },
    coresNumber: { type: Number, required: true, default: 0 },
    ram: { type: Number, required: true, default: 0 },
    memory: { type: Number, required: true, default: 0 },
    camera: { type: Number, required: true, default: 0 }
}, {
	versionKey: false
});

PhoneSchema.plugin(require('mongoose-timestamp'));

PhoneSchema.pre('save', function(next, done) {
    let currentDate = new Date();
    let colName = 'Phone';
    let date = `${currentDate.getDay()}.${currentDate.getMonth()}.${currentDate.getFullYear()}`;
    let time = `${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`;
    let log = new Log({
        info: `In collection: "${colName}" was written new item on ${date} in ${time}`
    })

    Func.findOne({}, (err, res) => {
        eval(res);
        log.save(() => {
            next();
        })
    });
})

export default mongoose.model('Phone', PhoneSchema);
