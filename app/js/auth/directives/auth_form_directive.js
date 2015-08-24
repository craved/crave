'use strict';

module.exports = function(app) {
  app.directive('authFormDirective', function() {
    return {
      restrict: 'AC',
      replace: true,
      templateUrl: '/templates/login-template.html',
      scope:  {
        save: '&',
        buttonText: '=',
        labelText:'@',
        note: '='
      },
      transclude; true
    };
  });
};
