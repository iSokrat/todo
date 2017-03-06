var express = require('express');
var router = express.Router();

var Todos = require('../db/models/todos.model');

router.post('/create', function(req, res) {
	Todos.findOne({ 
		_id: req.body.id 
	}).exec()
	  .then(function (todoBlock){
	  		var newCard = {};

	 		todoBlock.cards.push(newCard);
	 		todoBlock.save();

  			return newCard;
	}).then(function(newCard) {
  			res.status(200).send(newCard);
	}).catch(function(err) {
		console.log("/create FAIL: " + err);
	});;
});

router.get('/', function(req, res) {
	Todos.find({})
		.exec()
		.then(function(doc) {
			console.log("/todo OK");
			res.status(200).json(doc);
		}).catch(function(err) {
			console.log("/todo FAIL: " + err);
		});
});

module.exports = router;