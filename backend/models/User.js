'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

var userSchema = new Schema({
  username: {type: String, unique: true, match: /^[a-zA-Z0-9]+$/, required: 'username required'},
  password: {type: String, required: 'password required'},
});

userSchema.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, 8);
};

userSchema.methods.generateToken = function() {
  return jwt.sign(this.username, process.env.SECRET);
};

userSchema.methods.checkpassword = function(password) {
  return  bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('User', userSchema);
