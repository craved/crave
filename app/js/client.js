'use strict';

require('angular/angular');
require('angular-route/angular-route');
require('angular-route');
require('angular-cookies');
require('angular-base64');


var craveApp = angular.module('craveApp', ['ngRoute']);

//services
require('./services/resourceServices/js')(craveApp);

//directives

//controllers

//routes
// craveApp.config(['$routeProvider', function($routeProvider) {
//   $routeProvider
//   .when('/', {
//     templateUrl:
//     controller:
//   })
//   .when('/about', {
//     templateUrl:
//   })
//   .when('/login', {
//     templateUrl:
//   })
//   .otherwise({
//     redirectTo: '/'
//   });
// }]);
