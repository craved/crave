'use strict';

module.exports = function(app) {
  app.controller('foodController', ['$scope', '$http', '$location', 'resource', function($scope, $http, $location, resource) {
    var Food = resource('foods');
    $scope.errors = [];
    $scope.foods = [];
    $scope.restaurant = [];
    
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
  }]);
};
