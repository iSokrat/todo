import app from '../../app.module';

app.controller('todoCardController', ['dom', '$scope', '$rootScope', 'updating', function(dom, $scope, $rootScope, updating) {
	this.deleteTodoCard = (cardId, blockId) => {
		var todoBlockScope = $scope.$parent.$parent.$parent; // bad :(
		dom.deleteTodoCard(cardId, blockId, todoBlockScope);
	}

	this.editTodoCard = (todoInfo, cardId, blockId) => {
		const data = { 
			...todoInfo, 
			cardId, 
			blockId,
			update: updating.updateTodoCard,
		};

		$rootScope.$broadcast('showEditWindow');
		$rootScope.$broadcast('setInfoForEditWindow', data);
	}

	$scope.$watch("bgcolor", () => {
		this.style = {
			'background-color': $scope.bgcolor || ''
		}
	});
}]);