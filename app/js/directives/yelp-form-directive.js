'use strict';

module.exports = function(app) {
  app.directive('yelpFormDirective', function() {
    return {
      restrict: 'AC',
      templateURL: 'templates/yelp-template.html',
      replace: true,
      scope: {
        yelp: '&'
      }
    }
  });
};
