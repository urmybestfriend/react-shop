'use strict';

var getRandomInt = require('./getRandomInt');

module.exports = function(model, number) {
	var items = [],
		transformed;

	for(var i = 0; i < number; i++) {
		transformed = {};
		Object.keys(model).forEach(function(key) {
			var randIndex = getRandomInt(0, model[key].length - 1);
			transformed[key] = model[key][randIndex];
		});
		items.push(transformed);
	}
	return items;
}
