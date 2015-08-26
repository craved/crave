'use strict';

module.exports = function(app) {
  app.controller('foodController', ['$scope', '$http', '$location', function($scope, $http, $location) {
    $scope.errors = [];
    $scope.foods = [];

    $scope.postFood = function(food, restaurant, restaurants) {
      console.log('food log \n', food.food);
      console.log('restaurant log \n', restaurant.id);
      console.log('comment log \n', food.comment);
      var newPost = {
        food: food.food,
        restaurant: restaurant.id,
        comment: food.comment
      }
      $http.post('/api/foods', newPost).success(function(res) {
        $scope.restaurants = null;
        $scope.food.comment = null;
        $scope.foods.push(res.newFoodPost);
      })
    }

    $scope.searchFood = function(food) {
      $location.path('/food');
      var datURL = '/api/foods/food?food=' + food.food.replace(' ', '%20');
      $http.get(datURL).success(function(res) {
        if (res[0] === undefined) {
         $scope.foods = food;
        } else {
         $scope.foods = res;
        }
      });
    };

    $scope.vote = function(food) {
      var datURL = '/api/foods/' + food._id;
      $http.put(datURL).success(function(res) {
        food.votes++;
      });
    };
  }]);
};
