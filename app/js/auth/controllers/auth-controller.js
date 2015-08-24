'use strict';

module.exports = function(app) {
  app.controller('authController', ['$scope', 'auth', function($scope, auth) {
    $scope.errors = [];

    $scope.$watch(auth.isSignedIn, function(isSignedIn) {
      $scope.isSignedIn = isSignedIn;
    });

    $scope.authSubmit = function(user) {
      if (user.password_confirmation) {
        auth.create(user, function(err, data) {
          if (err) {
            console.log(err);
            return $scope.errors.push({msg: 'could not create user'});
          }
        });
      } else {
        auth.signIn(user, function(err, data) {
          if (err) {
            console.log(err);
            return $scope.errors.push({msg: 'could not sign in'});
          }
        });
      }
    }

    $scope.signOut = function(user) {
      auth.logout();
    }
  }]);
}
