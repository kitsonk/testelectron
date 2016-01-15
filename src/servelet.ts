import { createServer } from 'restify';
import { readFileSync } from 'fs';
import { app } from 'electron';

const APP_PATH = app.getAppPath();

const server = createServer({
	certificate: readFileSync(APP_PATH + '/config/ssl.crt').toString(),
	key: readFileSync(APP_PATH + '/config/ssl.key').toString(),
	name: 'testelectron'
});

server.listen(8080, () => {
	console.log('started...');
});
