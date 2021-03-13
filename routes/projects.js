var express = require('express');
var mongoose = require('mongoose');

var router = express.Router();

var Project = require('../models/Project.js');
var db = mongoose.connection;

// Get all the projects
router.get('/', function(req, res, next) {
    Project.find().sort('-project_name').exec(function(err, projects) {
	if (err) res.status(500).send(err);
	else res.status(200).json(projects);
    });

});

// Get all the project from an user (throught its email)
router.get('/all/:email', function (req, res){
    project.find({'email':req.params.email}).sort('-project_name').exec(function(err, projects) {
	if (err) res.status(500).send(err);
	else res.status(200).json(projects);
    });
});

// Post a project 
router.post('/', function (req, res) {
    Project.create(req.body, function (err, projectinfo) {
	if (err) res.status(500).send(err);
	else res.sendStatus(200);
    });
});

// Update a project throught its id
router.put('/:id', function (req, res) {
    Project.findByIdAndUpdate(req.params.id, req.body, function (err, projectinfo){
	if (err) res.status(500).send(err);
	else res.sendStatus(200);
    });
});

// Delete a project throught its id
router.delete('/:id', function (req, res) {
    Project.findByIdAndDelete(req.params.id, function (err, res) {
	if (err) res.status(500).send(err);
	else res.sendStatus(200);
    });
});

module.exports = router;
