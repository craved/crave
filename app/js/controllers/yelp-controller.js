'use strict';

module.exports = function(app) {
  app.controller('yelpController', ['$scope', '$http', '$location', function($scope, $http, $location) {
    $scope.restaurants = [];

    $scope.postRestaurant = function(food, restaurant) {
      var newPost = {
        food: food.food.toLowerCase(),
        restaurant: restaurant.id,
        comment: restaurant.comment
      };
      $http.post('/api/foods', newPost).success(function(res) {
        // $scope.restaurant.term = null;
        // $scope.restaurants = null;
        // $scope.restaurant.comment = null;
        $scope.foodsPresent = true;
        if (Array.isArray($scope.foods)) {
          $scope.foods.push(res.newFoodPost);
        } else {
          $scope.foods = [res.newFoodPost];
        }
        $location.path('/food');
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

    $scope.getTopRest = function(dish) {
      var datURL = '/api/foods/food?food=' + dish._id.toLowerCase().replace(' ', '%20');
      $http.get(datURL).success(function(res) {
        var datURL = 'api/yelp/' + res[0].restaurant;
        $http.get(datURL).success(function(res) {
          $scope.restaurant = res;
        });
      });
    };

  }]);
};
