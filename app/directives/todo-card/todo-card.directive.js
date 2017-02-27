
export default angular
	.module('todoApp.todoCard')
	.directive('todoCard', ['$scope', function($scope) {
	
	return {
        restrict: 'E',
        templateUrl: 'todo-card.directive.html',
        //link: linkFunc,
        //controllerAs: 'vm',
        //bindToController: true // because the scope is isolated
    };
}]);
