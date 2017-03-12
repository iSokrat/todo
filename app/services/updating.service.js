import app from '../app.module.js';

app.service('updating', [
	'$rootScope', 'server', 
	function($rootScope, server) {
		this.updateTodoCard =  updateTodoCard;
		this.updateTodoBlock = updateTodoBlock;

		function updateTodoCard(updateDataForTodoCard) {
			server.updateTodoCard.update({}, updateDataForTodoCard, function(updatedCard) {
				$rootScope.$broadcast('updateTodoCardScope', updatedCard);
				
				console.log("Card updated!");
			}, console.error);
		}

		function updateTodoBlock(updateDataForTodoBlock) {
			server.updateTodoBlock.update({}, updateDataForTodoBlock, function(updatedBlock) {
				$rootScope.$broadcast('updateTodoBlockScope', updatedBlock);

				console.log("Block updated!");
			}, console.error);
		}
	}
]);