require('babel-register')({
	presets: ['es2015']
});

module.exports = function() {
	require('./app');
}

