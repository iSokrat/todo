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

		this.showLockFillState = false;

		$scope.$on('showEditWindow', () => this.showLockFillState = true);
		$scope.$on('hideEditWindow', () => this.showLockFillState = false);

		$scope.$on('updateTodoCard', (event, data) => {
			const todoCards = this.todos
				.find((todoBlock) => todoBlock._id == data.blockId)
				.cards;

			const updatingTodoCard = todoCards.find((todoCard) => todoCard._id == data.cardId);

			updatingTodoCard.title = data.title;
			updatingTodoCard.description = data.description;
			
			console.log('Todo card was updated! ');
			$scope.$broadcast('hideEditWindow');
		});
}]);