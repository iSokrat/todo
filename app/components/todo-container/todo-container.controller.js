import app from '../../app.module';

app.controller('todoContainerController', ['dataFromServer', function(dataFromServer) {
	console.log(dataFromServer);
	this.todos = [ 
			{
				title: "+++",
				cards: [{
					title: "Task 1",
					description: "........"
				}, {
					title: "Task 2",
					description: "........"
				}, {
					title: "Task 3",
					description: "........"
				}]
			}, {
				title: "---",
				cards: [{
					title: "Task 2.1",
					description: "........"
				}, {
					title: "Task 2.2",
					description: "........"
				}, {
					title: "Task 2.3",
					description: "........"
				}]
	}];
}]);