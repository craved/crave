'use strict';

module.exports = function(app) {
  app.directive('footerDirective', function() {
    return {
      restrict: 'AC',
      templateURL: 'templates/footer-template.html',
      replace: true
    }
  });
};
