const electron = require('electron');

require = require('dojo-loader');

(<any> require).config({
	packages: [
		{ name: 'app', location: './lib' }
	]
});

electron.app.on('ready', function() {
	(<any> require)(['app/app'], function(app) {
		app(__dirname);
	});
});
