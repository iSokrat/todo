import app from '../../../app.module';

app.controller('todoBlockHeaderController', ['$scope', 'server', function($scope, server) {
	this.createNewTodoCard = (todoBlockId) => {
		server.createNewTodoCard.save({
				id: todoBlockId, 
			}, (newCard) => {
			var todoBlock = $scope.$parent.$parent;

			todoBlock.todoCards.push(newCard);	
			console.log("Add new todo card!");
		});
	};
}]);