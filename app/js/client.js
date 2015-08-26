'use strict';

require('angular/angular');
require('angular-route');
require('angular-cookies');
require('angular-base64');


var craveApp = angular.module('craveApp', ['ngRoute', 'ngCookies', 'base64']);

//services
require('./services/resource_services')(craveApp);
require('./services/auth_service')(craveApp);

//directives
require('./directives/food_form_directive')(craveApp);
require('./directives/yelp-form-directive')(craveApp);
require('./directives/restaurant-post-directive')(craveApp);

//controllers
require('./controllers/auth_controller')(craveApp);
require('./controllers/food_controller')(craveApp);
require('./controllers/yelp-controller')(craveApp);

//routes
craveApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/food', {
    templateUrl: 'templates/food.html'
  })
  .when('/post', {
    templateUrl: 'templates/restaurant-post.html'
  });
//   .when('/about', {
//     templateUrl:
//   })
//   .when('/login', {
//     templateUrl:
//   })
//   .otherwise({
//     redirectTo: '/'
//   });
}]);
