'use strict';

import mongoose from 'mongoose';

let PhoneSchema = new mongoose.Schema({
	mark: 'string',
	model: 'string',
	resolution: 'string',
	diagonal: 'number',
	yearModel: 'number',
	color: 'string',
	cores: 'number',
	memory: 'number',
	ram: 'number',
	camera: 'number',
	gps: 'boolean'
});

export default mongoose.model('phones', PhoneSchema);