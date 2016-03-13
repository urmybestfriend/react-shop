'use strict';

import mongoose from 'mongoose';
import async from 'async';
import _ from 'lodash';

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

export default mongoose.model('Phone', PhoneSchema);