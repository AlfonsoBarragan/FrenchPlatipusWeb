var express = require('express');
var mongoose = require('mongoose');

var router = express.Router();

var PostBlog = require('../models/PostBlog.js');
var db = mongoose.connection;

// Get section
router.get('/', function(req, res, next) {
    PostBlog.find.sort('-publication_date').exec(function(err, posts_blog) {
	if (err) res.status(500).send(err);
	else res.status(200).json(posts_blog);
    });
});

// Post section
router.post('/', function (req, res){
    PostBlog.create(req.body, function (err, post_blog_info) {
	if (err) res.status(500).send(err);
	else res.sendStatus(200);
    });
});

// Update section
router.put('/:id', function (req, res) {
    PostBlog.findByIdAndUpdate(req.params.id, req.body, function (err, post_blog_info) {
	if (err) res.status(500).send(err);
	else res.status(200);
    });
});

// Remove section
router.delete('/:id', function (req, res) {
    PostBlog.findByIdAndDelete(req.params.id, req.body, function (err, post_blog_info) {
	if (err) res.status(500).send(err);
	else res.status(200);
    });
});

module.exports = router;
