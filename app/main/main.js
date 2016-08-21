'use strict';

angular.module('igCollectionApp.main', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'main/main.html',
    controller: 'mainCtrl'
  });
}])

.controller('mainCtrl', ['$scope', '$http', '$window', function($scope, $http) {
  $http.get('http://localhost:3000/api/v1/collections').then(function successCallback(response) {
    $scope.collections = response.data;
  });
}]);