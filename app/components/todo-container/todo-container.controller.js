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
		$scope.$on('updateTodoCardScope', (event, data) => {
			const todoCards = this.todos
				.find((todoBlock) => todoBlock._id == data.blockId)
				.cards;

			const updatingTodoCard = todoCards.find((todoCard) => todoCard._id == data.cardId);

			updatingTodoCard.title = data.title;
			updatingTodoCard.description = data.description;
			updatingTodoCard.bgcolor = data.bgcolor;

			console.log('Todo card was updated! ');
			$scope.$broadcast('hideEditWindow');
		});
		$scope.$on('updateTodoBlockScope', (event, data) => {
			const updatingTodoBlock = this.todos
				.find((todoBlock) => todoBlock._id == data.blockId);


			updatingTodoBlock.title = data.title;
			updatingTodoBlock.bgcolor = data.bgcolor;
			
			$scope.$broadcast('hideEditWindow');
			
			console.log('Todo block was updated! ');
		});
		$scope.$on('todoCardMoveLeft', (event, {blockId, cardId}) => {
			if (this.todos.length === 1) {
				return;
			}
			const BLOCK_LAST = this.todos.length - 1;	
			const currBlockIndex = this.todos
				.findIndex((todoBlock) => todoBlock._id == blockId);
			const todoBlock = this.todos[currBlockIndex];
			const todoCardIndex = todoBlock.cards.findIndex((todoCard) => todoCard._id === cardId);
			
			
			if (currBlockIndex < 0) {
				console.error("Todo block was not found");
				return;
			}
			
			if (currBlockIndex !== 0) {
				const todoCards = todoBlock.cards.splice(todoCardIndex, 1);
				this.todos[currBlockIndex - 1].cards.push(todoCards[0]);
			}		
		});
		$scope.$on('todoCardMoveRight', (event, {blockId, cardId}) => {
			if (this.todos.length === 1) {
				return;
			}
			const BLOCK_LAST = this.todos.length - 1;
			const currBlockIndex = this.todos
				.findIndex((todoBlock) => todoBlock._id == blockId);
			const todoBlock = this.todos[currBlockIndex];
			const todoCardIndex = todoBlock.cards.findIndex((todoCard) => todoCard._id === cardId);
			
			if (currBlockIndex < 0) {
				console.error("Todo block was not found");
				return;
			}
			if (currBlockIndex !== BLOCK_LAST) {
				const todoCards = todoBlock.cards.splice(todoCardIndex, 1);
				this.todos[currBlockIndex + 1].cards.push(todoCards[0]);
			}
		});
}]);