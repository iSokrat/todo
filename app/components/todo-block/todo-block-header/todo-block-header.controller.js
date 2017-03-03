import app from '../../../app.module';

app.controller('todoBlockController', ['server', function(server) {
	this.createNewTodoCard = function() {
		console.log("Add new todo сlick!");

		server.createNewTodoCard.save({}, function(todoCard) {
			console.log("+");
		});
	};
}]);