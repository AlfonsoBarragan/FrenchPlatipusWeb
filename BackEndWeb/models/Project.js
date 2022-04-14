var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var ProjectSchema = new Schema({
    _project_id : new mongoose.Schema.Types.ObjectId(),
    authors: [{
	name: {
	    type: String,
	    required: true
	},
	profile_url: String,
    }],
    
    project_name: {
	type: String,
	required:true
    },
    
    description: {
	type: String,
	required: true
    },
    
    repo_url: {
	type: String,
	required: true
    },
    tags: [{
	type: String
    }]
});

module.exports = mongoose.model('Project', ProjectSchema);
