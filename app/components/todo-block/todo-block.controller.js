import app from '../../app.module';

app.controller('todoBlockController', ['$scope', function($scope) {
	$scope.$watch("bgcolor",() => {
		this.style = {
			'border': `1px solid ${$scope.bgcolor}`
		}
	});
}]);