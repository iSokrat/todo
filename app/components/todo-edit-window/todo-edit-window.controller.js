import app from '../../app.module';

app.controller('todoEditWindowController', ['server', '$scope', '$rootScope', function(server, $scope, $rootScope) {
	this.info = {};

	$scope.$on('setInfoForEditWindow', (event, data) => {
		this.info = data;
	});

	this.hideEditWindow = function() {
		$scope.$emit('hideEditWindow');
	};

	this.updateTodo = () => {
		this.info.update(this.info);
	}
}]);