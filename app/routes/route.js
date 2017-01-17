'use strict';

/**
 * Module dependencies.
 */
// const passport = require('passport');
// Gear Head Routings
module.exports = function (app) {
	var index = require('../controller/indexController');
	// Setting up the users profile api
	app.route('/create').get(index.createImage);
};

module.exports = function (app) {
	var index = require('../controller/indexController');
	// Setting up the users profile api
	app.route('/create1').get(index.createImage1);
};