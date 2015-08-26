'use strict';

module.exports = function(app) {
  app.factory('auth', ['$http', '$base64', '$cookies', function($http, $base64, $cookies) {
    return {
      signIn: function(user, callback) {
        var encoded = $base64.encode(user.username + ':' + user.password);
        $http.get('/api/login', {
          headers: {'Authorization': encoded}
        })
        .success(function(data) {
          $cookies.put('jwt', data.token);
          callback(null, data.user);
        })
        .error(function(data) {
          callback(data);
        })
      },
      create: function(user, callback) {
        $http.post('/api/users', user)
          .success(function(data) {
            $cookies.put('jwt', data.token);
            callback(null, data.user);
          })
          .error(function(data) {
            callback(data);
          });
      },
      logout: function() {
        $cookies.put('jwt', '');
      },
      isSignedIn: function() {
        return !!($cookies.get('jwt') && $cookies.get('jwt').length);
      }
    };
  }]);
}
