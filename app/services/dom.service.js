import app from '../app.module.js';

app.service(
	'dom', ['server',
	function(server) {
		this.deleteTodoCard = function(todoCardId, todoBlockId, todoBlockScope) {
			server.deleteTodoCard.save({}, {
				cardId:  todoCardId,
				blockId: todoBlockId,
			}, (todoBlock) => { 
				var deletedIndex = todoBlockScope
					.todoBlock
					.todoCards
					.findIndex((card) => card._id == todoCardId);

				if (deletedIndex === -1) {
					console.log('Todo card was not deleted!');
					return;
				}

				todoBlockScope
					.todoBlock
					.todoCards
					.splice(deletedIndex, 1);
				
				console.log('Todo card was deleted!');
			}, (err) => console.error(err));
		}
		
		this.deleteTodoBlock = function(todoBlockId, scope) {
			server.deleteTodoBlock.save({}, {
				blockId: todoBlockId,
			}, ({ deletedTodoBlockId }) => { 
				scope.$emit('deleteTodoBlock', deletedTodoBlockId);
			}, (err) => console.error(err));
		}
	}
]);