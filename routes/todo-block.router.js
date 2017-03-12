var express = require('express');
var router = express.Router();

var Todos = require('../db/models/todos.model');

router.post('/create', function(req, res) {
	var newTodoBlock = {
		title: 'Without name',
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

router.put('/edit', function(req, res) {
	Todos.findOne({
		_id: req.body.blockId,
	}).exec()
	.then(function (todoBlock) {

		todoBlock.title = req.body.title;
		todoBlock.bgcolor = req.body.bgcolor;

		todoBlock.save();
		return req.body;
	}).then(function(updatedData) {
		res.status(200).send(updatedData);
	}).catch(function(err) {
		console.log("/edit FAIL: " + err);
		res.sendStatus(500);
	});
});

module.exports = router;