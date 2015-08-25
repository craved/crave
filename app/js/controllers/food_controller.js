'use strict';

module.exports = function(app) {
  app.controller('foodController', ['$scope', '$http', '$location', 'resource', function($scope, $http, $location, resource) {
    var Food = resource('foods');
    $scope.errors = [];
    $scope.foods = [];    
    
    $scope.searchFood = function(food) {
      $location.path('/food');
      console.log('search food food ', food)
      console.log('scope fodd food ', $scope.foods)
      var datURL = '/api/foods/food?food=' + food.food.replace(' ', '%20');
      console.log('dat url', datURL)
      $http.get(datURL).success(function(   res) {
          console.log('dat responce ', res)
           if (res[0] === undefined) {
             $scope.foods = food;
           } else {
             $scope.foods = res; 
           }
         });
    };
  }]);
};
