'use strict';

import mongoose from 'mongoose';

let LogShema = new mongoose.Schema({
	info: { type: String, required: true, default: 'no data, but inserting was' }
}, {
	versionKey: false
});

export default mongoose.model('Log', LogShema);
