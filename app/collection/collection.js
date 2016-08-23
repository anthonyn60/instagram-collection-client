'use strict';

angular.module('igCollectionApp.collection', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/collection', {
    templateUrl: 'collection/collection.html',
    controller: 'CollectionCtrl'
  });
}])
.config(function($sceDelegateProvider) {
  $sceDelegateProvider.resourceUrlWhitelist([
    'self',
    'https://scontent.cdninstagram.com/**'
  ]); 
})

.controller('CollectionCtrl', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams) {
  if($routeParams.id) $scope.id = $routeParams.id;
  else $location.path("/");
  $scope.current_page = 1;
  $scope.more = true;
  $scope.isLoading = false;
  $http.get('http://instagram-collection-backend.herokuapp.com/api/v1/collections/' + $scope.id).then(function successCallback(response) {
    $scope.collection = response.data;
    $scope.pages = response.data.current_count / 9;
    if($scope.collection.next_url == "No more" && (($scope.current_page * 9) > (current_count + 9))) $scope.more = false;
  }, function errorCallback(response){
    $location.path("/");
  });

  $scope.loadMore = function() {
    $scope.current_page = $scope.current_page + 1;
    $scope.isLoading = true;
    $http.get('http://instagram-collection-backend.herokuapp.com/api/v1/collections/' + $scope.id + '?page=' + $scope.current_page).then(function successCallback(response) {
      $scope.collection.posts = $scope.collection.posts.concat(response.data.posts);
      $scope.isLoading = false;
      if($scope.collection.next_url == "No more" && (($scope.current_page * 9) > (current_count + 9))) $scope.more = false;
    }, function errorCallback(response){
      $scope.more = false;
      $scope.isLoading = false;
    });
  }
}])
.filter('trusted', ['$sce', function ($sce) {
    return function(url) {
        return $sce.trustAsResourceUrl(url);
    };
}]);