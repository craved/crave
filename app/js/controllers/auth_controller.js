'use strict';

module.exports = function(app) {
  app.controller('authController', ['$scope', 'auth', function($scope, auth) {
    $scope.errors = [];

    $scope.$watch(auth.isSignedIn, function(isSignedIn) {
      $scope.isSignedIn = isSignedIn;
    });

    $scope.authSubmit = function(user) {
      auth.signIn(user, function(err, data) {
        if (err) {
          console.log(err);
          return $scope.errors.push({msg: 'could not sign in'});
        }
      });
    };

    $scope.createUser = function(user) {
      auth.create(user, function(err, data) {
        if (err) {
          console.log(err);
          return $scope.errors.push({msg: 'could not create user'});
        }
      }); 
    };

    $scope.signOut = function(user) {
      auth.logout();
      auth.is
    };
  }]);
};
