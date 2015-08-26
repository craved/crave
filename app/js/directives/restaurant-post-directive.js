'use strict'

module.exports = function(app) {
  app.directive('restaurantPostDirective', function() {
    return {
      restrict: 'AC',
      templateUrl: './templates/restaurant-post.html',
      replace: true
    }
  })
}
