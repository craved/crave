'use strict'

module.exports = function(app) {
  app.directive('restaurantPostDirective', function() {
    return {
      restrict: 'AC',
      templateURL: './templates/restaurant-post.html',
      replace: true
    }
  })
}
