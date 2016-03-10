'use strict';

import PhoneModel from '../models/phone';

const getAll = (req, res) => {
	PhoneModel.find({}, function(err, docs) {
		if(err) {
			res.send({error: err});
		} else {
			res.send({data: docs});
		}
	});
};

const add = (req, res) => {

	let phone = new PhoneModel(
		{
			mark: 'iPhone',
			model: '6s',
			resolution: '1920*1080',
			diagonal: '4.5',
			yearModel: '2015',
			color: 'grey',
			cores: '2',
			memory: '16',
			ram: '1',
			camera: '8',
			gps: true
		}
	);

	phone.save(function(err, docs) {
		if(err) {
			console.log('error: ', err);
			res.send({error: err});
		}
		else {
			console.log(docs);
			res.send({status: 'ok'});
		}
	});
};

export default {
	getAll,
	add
};