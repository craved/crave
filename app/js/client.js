'use strict';

require('angular/angular');
require('angular-route');
require('angular-cookies');
require('angular-base64');


var craveApp = angular.module('craveApp', ['ngRoute', 'ngCookies', 'base64']);

//services
require('./services/resource-service')(craveApp);
require('./services/auth-service')(craveApp);

//directives
require('./directives/food-form-directive')(craveApp);
require('./directives/yelp-form-directive')(craveApp);
require('./directives/restaurant-post-directive')(craveApp);

//controllers
require('./controllers/auth-controller')(craveApp);
require('./controllers/food-controller')(craveApp);
require('./controllers/yelp-controller')(craveApp);

//routes
craveApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/home', {
    templateUrl: 'templates/homepage-template.html'
  })
  .when('/food', {
    templateUrl: 'templates/food.html'
  })
  .when('/post', {
    templateUrl: 'templates/restaurant-post.html'
  })
  .when('/about', {
    templateUrl: 'templates/about.html'
  })
  .otherwise({
    redirectTo: '/home'
  });
}]);
