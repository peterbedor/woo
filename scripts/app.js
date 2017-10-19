import Router from './core/router';

let router = new Router([
	{
		path: '/',
		handler() {
			console.log('index');
		}
	},
	{
		path: 'test',
		handler() {
			console.log('it worked!');
		}
	},
	{
		path: 'test/1',
		handler() {
			console.log('it worked!');
		}
	}
]).run();