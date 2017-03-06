var express = require('express');
var router = express.Router();

var Todos = require('../db/models/todos.model');

router.post('/create', function(req, res) {
	var newTodoBlock = {};

	var todo = new Todos(newTodoBlock);
	todo.save();
	
	res.status(200).send(newTodoBlock);
});

module.exports = router;