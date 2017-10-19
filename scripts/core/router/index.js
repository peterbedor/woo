function _slasher(path) {
	if (path[0] === '/') {
		return path;
	}
	return '/' + path;
}

class Router {
 	constructor(routes) {
	 	this.routes = routes;

		return this;
 	}

	run() {
		const path = window.location.pathname;

		this.routes.forEach(route => {
			if (path === _slasher(route.path)) {
				route.handler();
			}
		});
	}
}

export default Router;

// var Router = function(routes) {
// 	this.routes = routes;
// }
// export default Router;