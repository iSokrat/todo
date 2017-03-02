var express = require('express');
var router = express.Router();

var todoCardModel = require('../db/models/todo-card.model');

router.post('/add', function(req, res) {
	console.log(req);
});

module.exports = router;