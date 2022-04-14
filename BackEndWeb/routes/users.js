var express = require('express');
var mongoose = require('mongoose');

var router = express.Router();

var User = require('../models/User.js');
var db = mongoose.connection;

// Get section
router.get('/', function(req, res, next) {
    User.find().sort('-created_at').exec(function(err, users) {
	if (err) res.status(500).send(err);
	else res.status(200).json(users);
    });
});

// Post section
router.post('/', function (req, res){
    User.create(req.body, function (err, user_info) {
	if (err) res.status(500).send(err);
	else res.sendStatus(200);
    });
});

// Update section
router.put('/:id', function (req, res) {
    User.findByIdAndUpdate(req.params.id, req.body, function (err, user_info) {
	if (err) res.status(500).send(err);
	else res.status(200);
    });
});

// Remove section
router.delete('/:id', function (req, res) {
    User.findByIdAndDelete(req.params.id, req.body, function (err, user_info) {
	if (err) res.status(500).send(err);
	else res.status(200);
    });
});

module.exports = router;
