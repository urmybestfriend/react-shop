'use strict';

import mongoose from 'mongoose';
import hookFunc from '../helpers/hookFunc';

const PHONE_SCHEMA_NAME = 'Phone';

let PhoneSchema = new mongoose.Schema({
	mark: { type: String, required: true, default: '' },
    model: { type: String, required: true, default: '' },
    color: { type: String, required: true, default: '' },
    wifi: { type: String, required: true, default: '' },
    gps: { type: Boolean, required: true, default: false},
    coresNumber: { type: Number, required: true, default: 0 },
    ram: { type: Number, required: true, default: 0 },
    memory: { type: Number, required: true, default: 0 },
    camera: { type: Number, required: true, default: 0 },
    diagonal: { type: Number, required: true, default: 0 },
    operatingSystem: { type: String, required: true, default: 'Android' },
    price: { type: Number, required: true, default: 0 }
}, {
	versionKey: false
});

PhoneSchema.plugin(require('mongoose-timestamp'));

PhoneSchema.pre('save', function(next, done) {
    hookFunc(next, done, this, PHONE_SCHEMA_NAME);
})

export default mongoose.model(PHONE_SCHEMA_NAME, PhoneSchema);
