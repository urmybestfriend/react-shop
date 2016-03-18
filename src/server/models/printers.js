'use strict';

import mongoose from 'mongoose';
import hookFunc from '../helpers/hookFunc';

const PRINTER_SCHEMA_NAME = 'Printer';

let PrinterSchema = new mongoose.Schema({
	mark: { type: String, required: true, default: '' },
    model: { type: String, required: true, default: '' },
    color: { type: String, required: true, default: '' },
    wifi: { type: String, required: true, default: '' },
    isMFP: { type: Boolean, required: true, default: false},
    isBlackWhite: { type: Boolean, required: true, default: true},
    pageVelocityPerMinute: { type: Number, required: true, default: 0 },
    printTechnology: { type: String, required: true, default: '' },
    price: { type: Number, required: true, default: 0 }
}, {
	versionKey: false
});

PrinterSchema.plugin(require('mongoose-timestamp'));

PrinterSchema.pre('save', function(next, done) {
    hookFunc(next, done, this, PRINTER_SCHEMA_NAME);
})

export default mongoose.model(PRINTER_SCHEMA_NAME, PrinterSchema);
