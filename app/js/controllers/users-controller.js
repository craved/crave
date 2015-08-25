'use strict';

module.exports = function(app) {
  app.controller('cardsController', ['$scope', 'resource', function($scope, resource) {

    var User = resource('user');

    // $scope.getUserById = function(id, oneUser) {
    //   User.getOne(id, oneUser, function(response) {
    //     $scope.user = response;
    //   });
    // };

    $scope.destroy = function(id) {
      User.destroy(id, function(response) {
        console.log('removed user ' + id);
      });
    };

    $scope.submitForm = function(oneUser) {
      User.submitForm(oneUser, function(response) {
        console.log('user submitted: ' + oneUser);
      });
    };
  }]);
};
