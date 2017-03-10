import app from '../../app.module';

app.controller('todoCardController', ['dom', '$scope', '$rootScope', function(dom, $scope, $rootScope) {
	this.deleteTodoCard = (cardId, blockId) => {
		var todoBlockScope = $scope.$parent.$parent.$parent; // bad :(
		dom.deleteTodoCard(cardId, blockId, todoBlockScope);
	}

	this.editTodoCard = (todoInfo, cardId, blockId) => {
		const data = { ...todoInfo, cardId, blockId };

		$rootScope.$broadcast('showEditWindow');
		$rootScope.$broadcast('setInfoForEditWindow', data);
	}
}]);