'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var restaurantSchema = new Schema({
  food: String,
  restaurant: String,
  votes: Number
});

module.exports = mongoose.model('Restaurant', restaurantSchema);
