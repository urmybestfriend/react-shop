'use strict';

require('babel-core/register');

var mongoose = require('mongoose');
var env = require('./env');
var models = require('./src/server/models').default;

mongoose.connection.once('open', function () {

	var Func = models.Func,
		Log = models.Log,
		Phones = models.Phones,
		Notes = models.Notes;

	var innerFunc = new Func({});

    Func.remove({}).then(function() {
    	Log.remove({}).then(function() {
        	Phones.remove({}).then(function() {
	        	Notes.remove({}).then(function() {
					innerFunc.save(function() {
			        	mongoose.connection.close();
			        });
		        });
	        });
        });
	});

});

mongoose.connect(env.get('mongo:uri'), env.get('mongo:options'));
