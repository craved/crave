'use strict';

module.exports = function(app) {
  app.controller('foodController', ['$scope', '$http', '$location', function($scope, $http, $location) {
    $scope.errors = [];
    $scope.foods = [];

    $scope.postFood = function() {
      $location.path('/post');
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
