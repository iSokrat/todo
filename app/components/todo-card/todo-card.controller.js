function controller(dom, $scope, $rootScope, updating) {
	this.deleteTodoCard = (cardId, blockId) => {
		var todoBlockScope = $scope.$parent.$parent; // bad :(
	
		dom.deleteTodoCard(cardId, blockId, todoBlockScope);
	};

	this.editTodoCard = (todoInfo, cardId, blockId) => {
		const data = { 
			...todoInfo, 
			cardId, 
			blockId,
			update: updating.updateTodoCard,
		};

		$rootScope.$broadcast('showEditWindow');
		$rootScope.$broadcast('setInfoForEditWindow', data);
	};

	this.moveLeft = () => {
		$rootScope.$broadcast('todoCardMoveLeft', this);
	};

	this.moveRight = () => {
		$rootScope.$broadcast('todoCardMoveRight', this);
	};

	$scope.$watch("todoCard.bgcolor", () => {
		this.style = {
			'background-color': this.bgcolor || ''
		}
	});
}

export default [
	'dom', '$scope', '$rootScope', 'updating', 
	controller
];