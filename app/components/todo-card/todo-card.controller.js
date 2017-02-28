import app from '../../app.module';

app.controller('todoCardController', ['$http', function($http) {
	this.info = {
		title: "!!!",
		description: "..."
	}
}]);