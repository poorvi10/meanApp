// grab the mongoose module
var mongoose = require('mongoose');
Schema = mongoose.Schema;

// Model Schema
var ModelSchema = new Schema ({
	username : {type: String},
	firstName : {type: String},
    lastName : {type : String, default: ''},
    password : {type : String, default: ''}
});

module.exports = mongoose.model('User', ModelSchema);