'use strict';

module.exports = function(app) {
  var errorHandler = function(data) {
    console.log(data);
  };

  app.factory('resource', ['$http', function($http) {
    return function(resourceName) {
      return {
        getAll: function(callback) {
          $http({
            method: 'GET',
            url: '/api/' + resourceName
          })
          .success(callback)
          .error(errorHandler);
        },
        getOne: function(id, callback) {
          $http({
            method: 'GET',
            url: '/api/' + resourceName + '/' + id
          })
          .success(callback)
          .error(errorHandler);
        },
        submitForm: function(resource, callback) {
          $http({
            method: 'POST',
            url: '/api/' + resourceName,
            data: resource
          })
          .success(callback)
          .error(errorHandler);
        },
        update: function(id, data, callback) {
          $http({
            method: 'PUT',
            url: '/api/' + resourceName + '/' + id,
            data: id
          })
          .success(callback)
          .error(errorHandler);
        }
      }
    }
  }]);
};
