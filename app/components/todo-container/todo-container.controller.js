import app from '../../app.module';

app.controller('todoContainerController', [
	'server', 
	function(server) {
		server.todosResource.query({}, (todos) => {
			this.todos = todos;
		});
}]);