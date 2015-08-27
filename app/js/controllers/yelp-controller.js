'use strict';

module.exports = function(app) {
  app.controller('yelpController', ['$scope', '$http', function($scope, $http) {
    $scope.restaurants = [];

    $scope.postRestaurant = function(food, restaurant) {
      var newPost = {
        food: food.food,
        restaurant: restaurant.id,
        comment: food.comment
      };
      $http.post('/api/foods', newPost).success(function(res) {
        $scope.restaurant.term = null;
        $scope.restaurants = null;
        $scope.food.comment = null;
        $scope.foodsPresent = true;
        console.log($scope.foods);
        if (Array.isArray($scope.foods)) {
          $scope.foods.push(res.newFoodPost);
        } else {
          $scope.foods = [res.newFoodPost];
        }
      });
    };

    $scope.searchYelp = function(restaurant) {
      var datURL = '/api/queryYelp?term=' + restaurant.term.replace(' ', '+');
      console.log(datURL);
      $http.get(datURL).success(function(res) {
         $scope.restaurants = res.businesses;
         console.log(res);
      });
    };

    $scope.yelpRest = function(restaurant) {
      var datURL = 'api/yelp/' + restaurant;
      $http.get(datURL).success(function(res) {
        $scope.restaurant = res;
      });
    };
  }]);
};
