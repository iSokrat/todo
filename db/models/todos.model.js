var mongoose = require('mongoose');

var TodosSchema = mongoose.Schema({
    title: String,
    bgcolor: String,
    cards: [{
    	title: String,
    	description: String,
    	bgcolor: String,
    }]
});

module.exports = mongoose.model('Todos', TodosSchema);



