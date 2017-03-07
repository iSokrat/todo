import app from '../app.module.js';

app.service('server', [
	'$resource',
	function($resource) {
		this.todosResource = $resource('/todo', {}, {});
		this.createNewTodoCard = $resource('/todo/create', {}, {});
		this.deleteTodoCard = $resource('/todo/delete', {});
		this.createNewTodoBlock = $resource('/todo_block/create', {}, {});
	}
]);