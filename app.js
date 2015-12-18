var app = angular.module('app', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	$routeProvider
	.when('/angular',{
			controller: 'AngularController',
			templateUrl: 'partials/angular.html'
		})
		.when('/angular/:apiType', {
			controller: 'AngularController',
			templateUrl: 'partials/angular-api.html'
		})
		.when('/angular/:apiType/method/:method*', {
			controller: 'AngularController',
			templateUrl: 'partials/angular-api-method.html'
		})
		.otherwise({
			redirectTo: '/index.html'
		});
		
	$locationProvider.html5Mode(true);

}]);


app.controller('AngularController', ['$scope','$routeParams', function($scope, $routeParams){
	$scope.params = $routeParams;
	console.log($routeParams);
	console.log($scope.apiType);
	console.log($scope.method);
}]);

