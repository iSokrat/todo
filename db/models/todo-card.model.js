var mongoose = require('mongoose');

var todoCardSchema = mongoose.Schema({
    title: String,
    descrip: String
});

module.exports = mongoose.model('todoCard', todoCardSchema);



