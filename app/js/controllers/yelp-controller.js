'use strict';

module.exports = function(app) {
  app.controller('yelpController', ['$scope', '$http', function($scope, $http) {

    $scope.restaurants = [];

    $scope.searchYelp = function(restaurant) {
      var datURL = '/api/queryYelp?term=' + restaurant.term.replace(' ', '+');
      console.log(datURL);
      $http.get(datURL).success(function(res) {
         $scope.restaurants = res.businesses;
         console.log(res);
      })
    }

    $scope.yelpRest = function(restaurant) {
      var datURL = 'api/yelp/' + restaurant;
      $http.get(datURL).success(function(res) {
        $scope.restaurant = res;
      });
    };
  }]);
};
