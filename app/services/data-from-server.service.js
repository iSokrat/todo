import app from '../app.module.js';

app.service('dataFromServer', [
	'$resource',
	function($resource) {
		this.getTodos = function() {
			$resource('/todos', {
				
			}
		});
	}
]);