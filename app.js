var app = angular.module('app', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
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
			redirectTo: '/angular'
		});

}]);


app.controller('AngularController', ['$scope','$routeParams', function($scope, $routeParams){
	console.log($scope.apiType);
	console.log($scope.method);
}]);
