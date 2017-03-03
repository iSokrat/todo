import app from '../app.module.js';

app.service('server', [
	'$resource',
	function($resource) {
		this.todosResource = $resource('/todo', {}, {});
		this.createNewTodoCard = $resource('/todo/create', {}, {});
	}
]);