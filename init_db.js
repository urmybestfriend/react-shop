'use strict';

require('babel-core/register');

var mongoose = require('mongoose'),
	env = require('./env'),
	models = require('./src/server/models').default;

//data
var phones = require('./init_data/phones'),
	computers = require('./init_data/computers'),
	printers = require('./init_data/printers');

mongoose.connection.once('open', function () {

	var Func = models.Func,
		Log = models.Log,
		Phones = models.Phones,
		Computers = models.Computers,
		Printers = models.Printers,
		Notes = models.Notes;

	//DATA FOR FILLING
	var funcs = [{
		func: 'function() {return 0;}'
	}];

	//remove models functions
	var removeFuncs = function() {
    	Func.remove({}).then(removeLogs);
	};
	var removeLogs = function() {
		Log.remove({}).then(removePhones);
	};
	var removePhones = function() {
		Phones.remove({}).then(removeComputers);
	};
	var removeComputers = function() {
		Computers.remove({}).then(removePrinters);
	};
	var removePrinters = function() {
		Printers.remove({}).then(addPhones);
	};

	//add data functions
	var addPhones = function() {
		Phones.collection.insert(phones, addComputers);
	};
	var addComputers = function() {
		Computers.collection.insert(computers, addPrinters);
	};
	var addPrinters = function() {
		Printers.collection.insert(printers, addInnerFunc);
	};
	var addInnerFunc = function() {
		Func.collection.insert(funcs, function() {
			console.log('data updated, connection is closed');
        	mongoose.connection.close();
        });
	};

	//function to start working with db
	var startInitDb = function() {
		removeFuncs();
	};
	startInitDb();

});

mongoose.connect(env.get('mongo:uri'), env.get('mongo:options'));
