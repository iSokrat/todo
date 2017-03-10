var express = require('express');
var router = express.Router();

var Todos = require('../db/models/todos.model');

router.post('/create', function(req, res) {
	var newTodoBlock = {
		title: '',
		cards: []
	};

	var todo = new Todos(newTodoBlock);
	todo.save();
	res.status(200).send(todo);
});

router.post('/delete', function(req, res) {
	console.log("/delete catched");
	Todos.remove({
		_id: req.body.blockId
	}, function(err) {
		if (err) {
			return console.error('/delete FAIL:' + err);
		}

		res.status(200).send({ 
			deletedTodoBlockId: req.body.blockId
		});	
	});
});

module.exports = router;