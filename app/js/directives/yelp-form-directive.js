'use strict';

module.exports = function(app) {
  app.directive('yelpFormDirective', function() {
    return {
      restrict: 'AC',
      replace:true,
      templateUrl: './templates/yelp-template.html'
    }
  });
};
