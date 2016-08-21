'use strict';

// Declare app level module which depends on views, and components
angular.module('igCollectionApp', ['ngRoute', 
  'igCollectionApp.collection',
  'igCollectionApp.main',
  'igCollectionApp.new_collection'
  ]).config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/'});
}]);
