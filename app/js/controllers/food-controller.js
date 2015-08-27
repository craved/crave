'use strict';

module.exports = function(app) {
  app.controller('foodController', ['$scope', '$http', '$location', '$cookies', function($scope, $http, $location, $cookies) {
    $scope.errors = [];
    $scope.foods = [];
    var votes = {};

    $scope.searchFood = function(food) {
      $location.path('/food');
      var datURL = '/api/foods/food?food=' + food.food.toLowerCase().replace(' ', '%20');
      $http.get(datURL).success(function(res) {
        if (res[0] === undefined) {
         $scope.foods = food;
         $scope.foodsPresent = false;
        } else {
         $scope.foods = res;
         $scope.foodsPresent = true;
        }
      });
      getVotes();
    };

    $scope.vote = function(food) {
      var key = food.food + food.restaurant;
      var datURL = '/api/foods/' + food._id;
      $http.put(datURL).success(function(res) {
        food.votes++;
      });
      var token = $cookies.get('jwt');
      var req = {
        method: 'PUT',
        url: '/api/users',
        headers: {
          'x-access-token': token
        },
        data: {key: key}
      }
      $http(req).then(function(res) {
        console.log('reached put route');
      });
      getVotes();
    };

    function getVotes() {
      var token = $cookies.get('jwt');
      var req = {
        method: 'GET',
        url: '/api/users',
        headers: {
          'x-access-token': token
        }
      };
      $http(req).then(function(res) {
        for (var i = 0; i < res.data.votes.length; i++) {
          votes[res.data.votes[i]] = true;
        }
        $scope.voted = checkVoted();
      });
    };

    function checkVoted() {
      var vote = false;
      for(var i = 0; i < $scope.foods.length; i++) {
        var key = $scope.foods[i].food + $scope.foods[i].restaurant;
        if (key in votes) {
          vote = true;
        }
      }
      return vote;
    };
  }]);
};
