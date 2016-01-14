import { app, BrowserWindow } from 'electron';

let mainWindow = null;

/* TODO: Setup a crash reporter server */
// crashReporter.start({
// 	productName: 'Dojo Electron',
// 	companyName: 'SitePen, Inc.'
// });

app.on('window-all-closed', function() {
	console.log('closed');
	// On OS X it is common for applications and their menu bar
	// to stay active until the user quits explicitly with Cmd + Q
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

/**
 * Creates the main application window and loads it with `index.html`
 *
 * __dirname is not available in this scope, so passing it in
 */
export = function(__dirname: string) {
	// Create the browser window.
	mainWindow = new BrowserWindow({ width: 800, height: 600 });

	// and load the index.html of the app.
	mainWindow.loadURL('file://' + __dirname + '/../index.html');

	// Open the DevTools.
	mainWindow.webContents.openDevTools();

	// Emitted when the window is closed.
	mainWindow.on('closed', function() {
		// Dereference the window object, usually you would store windows
		// in an array if your app supports multi windows, this is the time
		// when you should delete the corresponding element.
		mainWindow = null;
	});
};
