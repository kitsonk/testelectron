/**
 * A bootstrapping file for electron
 */
const electron = (<any> require)('electron');

/**
 * Replace the electron/node loader with the
 * dojo loader.
 */
require = (<any> require)('dojo-loader');

/**
 * Setup some configuration
 */
(<any> require).config({
	packages: [
		{ name: 'app', location: './lib' }
	]
});

/* This confused me the most, the problem is that the loader, obviously,
 * loads modules async, which means that by the time they get executed,
 * the onready event in the app will have already been fired, so basically
 * we won't load the main app module until this loads
 */
electron.app.on('ready', function() {
	(<any> require)([ 'app/servelet' ], function() { });
});
