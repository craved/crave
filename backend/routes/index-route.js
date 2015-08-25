
module.exports = function(router) {

  router.route('/')
    .get(function (req, res) {
      res.json({msg: 'This is the api index! Hello!'});
    });
};
