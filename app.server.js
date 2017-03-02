var express = require('express');
var app = express();
var db  = require('./db/app.database');

var todoCard = require('./routes/todo-card.router.js');

app.use(express.static(__dirname + '/view'));
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/app')); 

app.use('/todo_card', todoCard);

app.get('/', function (req, res) {
  res.status(200).sendFile('./index.html');
});

app.listen(8080, function () {
  console.log('Example app listening on port 3000!');
});