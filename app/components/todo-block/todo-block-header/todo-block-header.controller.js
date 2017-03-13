import app from '../../../app.module';

app.controller('todoBlockHeaderController', [
	'$scope', '$rootScope', 'server', 'dom', 'updating',
	function($scope, $rootScope, server, dom, updating) {	
		this.createNewTodoCard = (todoBlockId) => {
			server.createNewTodoCard.save({
				id: todoBlockId, 
			}, (newCard) => {
				var todoBlock = $scope.$parent.$parent;
				todoBlock.todoCards.push(newCard);	
			});
		};

		this.deleteTodoBlock = (todoBlockId) => {
			dom.deleteTodoBlock(todoBlockId, $scope);
		}

		this.editTodoBlock = (todoInfo, blockId) => {
			const data = { 
				...todoInfo, 
				blockId,
				update: updating.updateTodoBlock,
			};

			console.log(data);
			$rootScope.$broadcast('showEditWindow');
			$rootScope.$broadcast('setInfoForEditWindow', data);
		}

		$scope.$watch('bgcolor', () => {
			this.style = {
				'background-color' : $scope.bgcolor
			}
		});
	}]);