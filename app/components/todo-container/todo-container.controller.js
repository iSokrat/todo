import app from '../../app.module';

app.controller('todoContainerController', [
	'$scope', 'server', 
	function($scope, server) {
		server.todosResource.query({}, (todos) => {
			this.todos = todos;
		});

		$scope.$on('deleteTodoBlock', (event, deletedTodoBlockId) => {

			var removedBlockIndex = this.todos.findIndex((block) => block._id == deletedTodoBlockId);
	 		
	  		if (deletedTodoBlockId === -1) {
	 			return console.log(`Card with id ${deletedTodoBlockId} was not found!`);
	 		}

			this.todos.splice(removedBlockIndex, 1);

			console.log('Todo block was deleted! ');
		});
}]);