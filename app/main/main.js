'use strict';

angular.module('igCollectionApp.main', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'main/main.html',
    controller: 'mainCtrl'
  });
}])

.controller('mainCtrl', ['$scope', '$http', '$window', function($scope, $http) {
  $scope.isMainLoading = true;
  $scope.more = true;
  $scope.current_page = 1;
  $scope.isLoading = false;
  $http.get('http://instagram-collection-backend.herokuapp.com/api/v1/collections').then(function successCallback(response) {
    $scope.collections = response.data;
    $scope.isMainLoading = false;
  }, function errorCallback(response) {
    $scope.isMainLoading = false;
  });
  $scope.loadMore = function() {
    $scope.current_page = $scope.current_page + 1;
    $scope.isLoading = true;
    $http.get('http://instagram-collection-backend.herokuapp.com/api/v1/collections' + '?page=' + $scope.current_page).then(function successCallback(response) {
      $scope.collections = $scope.collections.concat(response.data);
      $scope.isLoading = false;
    }, function errorCallback(response){
      $scope.more = false;
      $scope.isLoading = false;
    });
  }
}]);