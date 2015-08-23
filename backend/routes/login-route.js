var bodyParser = require('body-parser');
var User = require(__dirname + '/../models/User');


module.exports = function(router) {
  router.use(bodyParser.json());

  router.route('/login')
    .post(function(req, res) {

      User.findOne({username: req.body.username}, function(err, user) {
        if(err) return res.status(500).json({msg: 'server err'});
        if(!user) return res.status(404).json({msg: 'Username not found'});

        user.checkpassword(req.body.password)
          ? res.json({msg: 'login successful, token aquired!', token: user.generateToken()})
          : res.json({msg : 'Authentication failed'});

      });
    });

}
