'use strict';

module.exports = function(app) {
  app.controller('yelpController', ['$scope', '$http', function($scope, $http) {
    $scope.yelpRest = function(restaurant) {
      var datURL = 'api/yelp/' + restaurant;
      $http.get(datURL).success(function(res) {
        $scope.restaurant = res;
      });
    };
  }]);
};
