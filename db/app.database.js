var mongoose = require('mongoose');
var mongoDB = 'mongodb://admin:0str0uchMlab@ds041566.mlab.com:41566/todo-app';

mongoose.connect(mongoDB);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports = db;