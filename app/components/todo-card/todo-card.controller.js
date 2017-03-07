import app from '../../app.module';

app.controller('todoCardController', ['dom','$scope', function(dom, $scope) {
	this.deleteTodoCard = (cardId, blockId) => {
		var todoBlockScope = $scope.$parent.$parent.$parent;
		dom.deleteTodoCard(cardId, blockId, todoBlockScope);
	}
}]);