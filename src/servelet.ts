import { createServer } from 'restify';
import { createTask } from './tasks';

const server = createServer({
	name: 'testelectron'
});

server.listen(8080, () => {
	console.log('started...');
	createTask({})
		.exec()
		.then(() => {
			console.log('and then');
		});
});
