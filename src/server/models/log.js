'use strict';

import mongoose from 'mongoose';
import async from 'async';
import _ from 'lodash';

let LogShema = new mongoose.Schema({
	info: { type: String, required: true, default: 'no data, but inserting was' }
}, {
	versionKey: false
});

export default mongoose.model('Log', LogShema);
