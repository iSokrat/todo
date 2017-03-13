var express = require('express');
var router = express.Router();

var Todos = require('../db/models/todos.model');

var a = 0;

router.post('/create', function(req, res) {
	Todos.findOne({ 
		_id: req.body.id 
	}).exec()
	.then(function (todoBlock){
		var newCard = {
			title: 'Without name',
		};

		todoBlock.cards.push(newCard);
		todoBlock.save();

		var newCardWithIdProp = todoBlock.cards[todoBlock.cards.length - 1];

		return newCardWithIdProp;
	}).then(function(newCard) {
		res.status(200).send(newCard);
	}).catch(function(err) {
		console.log('/create FAIL: ' + err);
		res.sendStatus(500);
	});
});

router.put('/edit', function(req, res) {
	Todos.findOne({
		_id: req.body.blockId,
	}).exec()
	.then(function (todoBlock) {

		const updatingTodoCard = todoBlock.cards.find((todoCard) => todoCard._id == req.body.cardId);

		updatingTodoCard.title = req.body.title;
		updatingTodoCard.description = req.body.description;
		updatingTodoCard.bgcolor = req.body.bgcolor;

		todoBlock.save();
		return req.body;
	}).then(function(updatedData) {
		res.status(200).send(updatedData);
	}).catch(function(err) {
		console.log("/edit FAIL: " + err);
		res.sendStatus(500);
	});
});

router.post('/delete', function(req, res) {
	Todos.findOne({ 
		_id: req.body.blockId
	}).exec()
	.then(function (todoBlock) {
		var removedCardIndex = todoBlock.cards.findIndex((card) => card._id == req.body.cardId);

		if (removedCardIndex === -1) {
			throw new Error('Card with id ' + req.body.cardId + ' was not found!');
		}

		todoBlock.cards.splice(removedCardIndex, 1);
		todoBlock.save();

		return req.body.cardId;
	}).then(function(deletedCardId) {
		res.status(200).send(deletedCardId);
	}).catch(function(err) {
		console.log("/delete FAIL: " + err);
		res.sendStatus(500);
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
		res.sendStatus(500);
	});
});

module.exports = router;