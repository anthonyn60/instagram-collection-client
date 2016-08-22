'use strict';

angular.module('igCollectionApp.new_collection', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/new_collection', {
    templateUrl: 'new_collection/new_collection.html',
    controller: 'CreateCollectionCtrl'
  });
}])

.controller('CreateCollectionCtrl', ['$scope', '$http', '$window', function($scope, $http, $window) {
    $scope.isLoading = false;
    $scope.submit = function(newCollection) {
      if(newCollection){
        if(newCollection.tag != null && newCollection.start_time != null && newCollection.end_time != null && newCollection.start_time.getTime() < newCollection.end_time.getTime()){
          var patt = new RegExp(/^w*[a-zA-Z]+\w*$/);
          if(patt.test(newCollection.tag)){ 
            var collectionObj = {
              "start_time": (newCollection.start_time.getTime() / 1000),
              "end_time": (newCollection.end_time.getTime() / 1000),
              "tag": newCollection.tag,
              "name": newCollection.name
            };
            $scope.isLoading = true;
            $http.post('http://instagram-collection-backend.herokuapp.com/api/v1/collections', collectionObj).then(function successCallback(response) {
              $window.location.href = "#!/collection?id=" + response.data.id;
            },
            function errorCallback(response){
              $scope.isLoading = false;
              console.log(data.error);
            });
          } else alert('The tag format is invalid.');
        } else if(newCollection.start_time > newCollection.end_time) alert('The start day must come before the end day.');
        else alert('One of start time, end time, tag is empty.');
      }  
  }
}]);
