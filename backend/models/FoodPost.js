'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var foodPostSchema = new Schema({
  food: String,
  restaurant: String,
  votes: Number
});

module.exports = mongoose.model('FoodPost', foodPostSchema);
