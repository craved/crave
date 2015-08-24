'use strict';

module.exports = function(app) {
  app.directive('loginDirective', function() {
    return {
      restrict: 'AC',
      template: 'templates/login-template.html',
      replace: true
    }
  });
};
