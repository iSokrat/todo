var express = require('express');
var app = express();
var db  = require('./db/app.database');
var bodyParser = require('body-parser'); 

var todoCard = require('./routes/todo-card.router.js');
var todoBlock = require('./routes/todo-block.router.js');

app.use(express.static(__dirname + '/view'));
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/app')); 

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/todo', todoCard);
app.use('/todo_block', todoBlock);

app.get('/', function (req, res) {
  res.status(200).sendFile('./index.html');
});

app.listen(8080, function () {
  console.log('Example app listening on port 3000!');
});