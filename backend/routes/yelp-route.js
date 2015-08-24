var yelp = require('yelp').createClient({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  token: process.env.TOKEN,
  token_secret: process.env.TOKEN_SECRET,
  ssl: true
});

module.exports = function(router) {
  router.route('/queryYelp')
    .get(function(req, res) {
      var query = req.query.term.replace('%', '+');
      var params = {
        term: query,
        location: 'Seattle'
      };
      yelp.search(params, function(err, data) {
        if (err) return res.status(500).json({msg: 'Yelp search failed, \n ' + err});
        res.json(data);
      });
    });
  router.route('/yelp/:id')
    .get(function(req, res) {
      var id = req.params.id;
      yelp.business(id, function(err, data) {
        if (err) return res.status(500).json({msg: 'Yelp search failed, \n ' + err});
        res.json(data);
      });
    });
};
