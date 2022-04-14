var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var PostBlogSchema = new Schema({
    _id: new mongoose.Schema.Types.ObjectId(),
    author: {
	username: {
	    type: String,
	    required: true
	},
	
	_user_id: {
	    type: mongoose.Types.ObjectId,
	    ref: 'User',
	    required: true
	}
    },

    content: {
	type: String,
	required: true
    },
    resources: [{
	label: String,
	url: String
    }],
    
    publication_date: {type: Date, default: Date.now}
});

module.exports = mongoose.model('PostBlog', PostBlogSchema);

