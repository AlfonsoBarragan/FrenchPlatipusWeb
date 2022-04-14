var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var UserSchema = new Schema({
    _user_id: new mongoose.Schema.Types.ObjectId(),
    username: {
	type: String,
	required: true
    },
    image: {
	type: String,
	required: true
    },
});

module.exports = mongoose.model('User', UserSchema);
