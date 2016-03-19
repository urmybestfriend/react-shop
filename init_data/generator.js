'use strict';

module.exports = function(model, number) {
	console.log(model, number);
	var items = [];
	var transformed;
	for(var i = 0; i < number; i++) {
		transformed = {};
		Object.keys(model).forEach(function(key) {
			transformed[key] = model[key]();
		});
		items.push(transformed);
	}
	console.log(items);
	return items;
}