var mongoose = require('mongoose');

var storySchema = mongoose.Schema({

	sentence: String

});

// create the model for users and expose it to our app
module.exports = mongoose.model('Story', storySchema);