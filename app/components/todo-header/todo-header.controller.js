import app from '../../app.module';

app.controller('todoHeaderController', ['$scope', 'server', function($scope, server) {
	this.createNewTodoBlock = () => {
		server.createNewTodoBlock.save({}, {
			}, (newTodoBlock) => {
				var rootAppScope = $scope.$parent.$parent;

				rootAppScope.todoContainer.todos.push(newTodoBlock);
				console.log("Add new todo block!");
		});
	};
}]);