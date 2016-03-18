
'use strict';

import mongoose from 'mongoose';
import hookFunc from '../helpers/hookFunc';

const COMPUTER_SCHEMA_NAME = 'Computer';

let ComputerSchema = new mongoose.Schema({
	mark: { type: String, required: true, default: '' },
    model: { type: String, required: true, default: '' },
    color: { type: String, required: true, default: '' },
    wifi: { type: String, required: true, default: '' },
    isLaptop: { type: Boolean, required: true, default: true},
    diagonal: { type: Number, required: true, default: 0 },
    coresNumber: { type: Number, required: true, default: 0 },
    usb2: { type: Number, required: true, default: 0 },
    usb3: { type: Number, required: true, default: 0 },
    ram: { type: Number, required: true, default: 0 },
    memory: { type: Number, required: true, default: 0 },
    videocard: { type: String, required: true, default: '' },
    videomemory: { type: Number, required: true, default: 0 },
    processor: { type: String, required: true, default: '' },
    operatingSystem: { type: String, required: true, default: '' },
    price: { type: Number, required: true, default: 0 }
}, {
	versionKey: false
});

ComputerSchema.plugin(require('mongoose-timestamp'));

ComputerSchema.pre('save', function(next, done) {
    hookFunc(next, done, this, COMPUTER_SCHEMA_NAME);
})

export default mongoose.model(COMPUTER_SCHEMA_NAME, ComputerSchema);
