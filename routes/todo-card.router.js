var express = require('express');
var router = express.Router();

var Todos = require('../db/models/todos.model');

router.post('/create', function(req, res) {
	var todo = new Todos({});

	todo.save(function(err) {
		if (err) {
			return console.error(err);
		}

		console.log("New todo was created");
	});
});

router.get('/', function(req, res) {
	Todos.find({})
		.exec()
		.then(function(doc) {
			console.log("/todo OK");
			res.status(200).json(doc);
		}).catch(function(err) {
			console.log("/todo FAIL: " + err);
		}) 
});

module.exports = router;