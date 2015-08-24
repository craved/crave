var express = require('express');
var app = express();
var mongoose = require('mongoose');
var port = process.env.PORT || 3000;


//MongoDB set-up
var MONGOLAB_URI = process.env.MONGOLAB_URI || 'mongodb://localhost/crave-temp';

mongoose.connect(MONGOLAB_URI, function(err) {
  if (err) console.log('error: ' + err);
  else console.log('MongoDB connection successful.');
});

//Set secret for auth, temporary set-up
process.env.SECRET = process.env.SECRET || "tempSecretString";

//Routers
var router = express.Router();
require(__dirname + '/backend/routes/index-route')(router);
require(__dirname + '/backend/routes/login-route')(router);
require(__dirname + '/backend/routes/user-route')(router);
app.use('/api', router);

//404 catch for bad routes
app.all('*', function(req, res) {
  res.status(404).json({'msg': 'path does not exist'});
});


app.listen(port, function() {
  console.log('Server listening at port ' + port);
  console.log('Connected to MongoDB at ' + MONGOLAB_URI);
});
