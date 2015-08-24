var bodyParser = require('body-parser');
var User = require(__dirname + '/../models/User');


module.exports = function(router) {
  router.use(bodyParser.json());

  router.route('/login')
    .get(function(req, res) {
      var newUser = new Buffer(req.headers.authorization, 'base64');
      var newUser = newUser.toString().split(':');
      User.findOne({username: newUser[0]}, function(err, user) {
        if(err) return res.status(500).json({msg: 'server err'});
        if(!user) return res.status(404).json({msg: 'Username not found'});

        user.checkpassword(newUser[1])
          ? res.json({msg: 'login successful, token aquired!', token: user.generateToken()})
          : res.json({msg : 'Authentication failed'});
      })
    });

}
