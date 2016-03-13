'use strict';

import express from 'express';
import mongoose from 'mongoose';
import router from './routes/api';

let app = express();

mongoose.connect('mongodb://127.0.0.1:27017/shop');

app.use('/api/v1', router);
app.listen('3003', function() {
		console.log('server is started on port 3000');
	}
);
