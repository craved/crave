'use strict';

module.exports = function(app) {
  app.directive('foodDirective', function() {
    return {
      restrict: 'AC',
      templateURL: './templates/food.html',
      replace: true
    }
  });
};
