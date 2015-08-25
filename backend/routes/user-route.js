var bodyParser = require('body-parser');
var verify = require('../middleware/verify');
var User = require('../models/User');

module.exports = function(router) {
  router.use(bodyParser.json());

  router.route('/users')
    //get all users
    .get(function (req, res) {
      User.find({}, function(err, users) {
       if(err) res.status(500).json({'msg': 'User could not be created'});
       else res.send(users);
      });
    })
    //create a user
    .post(function(req, res) {
      var user = new User(req.body);
      user.password = user.generateHash(req.body.password);
      user.save(function(err) {
        if(err) return res.status(500).json({msg: 'Server Error: cannot save user, \n'  + err});
        res.json({msg: 'user done been created', token:user.generateToken()});
      });
    })
    //delete all users
    .delete(function(req, res) {
      User.find({}).remove().exec(function(err) {
        if(err) return res.status(500).json({msg: 'Server Error: cannot delete users, \n' + err});
        res.json({msg: 'all users have been deleted. You have committed genocide. I hope you are happy'});
      });
    });
};
