'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var foodPostSchema = new Schema({
  food: {type: String, required: true},
  restaurant: {type: String, required: true},
  votes: {type: Number, required: true},
  comment: {type: String, required: true},
});

module.exports = mongoose.model('FoodPost', foodPostSchema);
