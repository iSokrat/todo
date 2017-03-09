import app from '../../../app.module';

app.controller('todoBlockHeaderController', ['$scope', 'server', 'dom', function($scope, server, dom) {
	this.createNewTodoCard = (todoBlockId) => {
		server.createNewTodoCard.save({
				id: todoBlockId, 
			}, (newCard) => {
			var todoBlock = $scope.$parent.$parent;
			todoBlock.todoCards.push(newCard);	
		});
	};

	this.deleteTodoBlock = (todoBlockId) => {
		dom.deleteTodoBlock(todoBlockId, $scope);
	}
}]);