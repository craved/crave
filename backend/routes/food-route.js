var bodyParser = require('body-parser');
var FoodPost = require(__dirname + '/../models/FoodPost');

module.exports = function(router) {
  router.route('/foods')
    .get(function(req, res) {
      FoodPost.find({}, function(err, posts) {
        if (err) return res.status(500).json({msg: 'can not get posts, \n'} + err);
        res.json({foodPosts: posts});
      });
    })
    .post(function(req, res) {
      var newFoodPost = new FoodPost({
        food: req.body.food,
        restaurant: req.body.restaurant,
        comment: req.body.comment,
        votes: 1,
        key: req.body.food + req.body.restaurant
      });
      newFoodPost.save(function(err) {
        if (err) return res.status(500).json({msg: 'Cannot save food post, \n' + err});
        res.json({msg: 'food post has been saved', newFoodPost: newFoodPost});
      });
    });
  router.route('/foods/:food')
    .get(function(req, res) {
      var foodQuery = req.query.food.replace('%20', ' ');
      FoodPost.find({food: foodQuery}, function(err, food) {
        if(err) return res.status(500).json({msg: 'Cannot get food, \n' + err});
        res.json(food);
      });
    })
    .put(function (req, res) {
      var foodId = req.params.food;
      FoodPost.findByIdAndUpdate(foodId, {$inc: {votes: 1}}, function(err, data) {
        if (err) return res.status(500).json({msg: 'Cannot update this food post, \n' + err});
        console.log()
        res.json({msg: 'update successful', successful: true, data: data});
      });
    });
};
