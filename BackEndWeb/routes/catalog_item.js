var express = require('express');
var mongoose = require('mongoose');

var router = express.Router();

var PostBlog = require('../models/CatalogItem.js');
var db = mongoose.connection;

// Get section
router.get('/', function(req, res, next) {
    CatalogItem.find.sort('-name').exec(function(err, catalog_item) {
	if (err) res.status(500).send(err);
	else res.status(200).json(catalog_item);
    });
});

// Post section
router.post('/', function (req, res){
    CatalogItem.create(req.body, function (err, catalog_item_info) {
	if (err) res.status(500).send(err);
	else res.sendStatus(200);
    });
});

// Update section
router.put('/:id', function (req, res) {
    CatalogItem.findByIdAndUpdate(req.params.id, req.body, function (err, catalog_item_info) {
	if (err) res.status(500).send(err);
	else res.status(200);
    });
});

// Remove section
router.delete('/:id', function (req, res) {
    CatalogItem.findByIdAndDelete(req.params.id, req.body, function (err, catalog_item_info) {
	if (err) res.status(500).send(err);
	else res.status(200);
    });
});

module.exports = router;
