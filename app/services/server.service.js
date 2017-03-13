import app from '../app.module.js';

app.service('server', [
	'$resource',
	function($resource) {

		
		this.todosResource = $resource('/todo', {}, {});
		
		this.createNewTodoCard = $resource('/todo/create', {}, {});
		this.updateTodoCard = $resource('/todo/edit', null, { 'update': { method: 'PUT' } });
		this.deleteTodoCard = $resource('/todo/delete', {});
		
		this.createNewTodoBlock = $resource('/todo_block/create', {}, {});
		this.updateTodoBlock = $resource('/todo_block/edit', null, { 'update': { method: 'PUT' } });
		this.deleteTodoBlock = $resource('/todo_block/delete', {}, {});
	}
]);