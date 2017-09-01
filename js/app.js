//Now this App module will handle the Laravel App
//App angular configurations

//Making App angular
var myApp = angular.module('myApp', [ ///dependencies
	'ngRoute',
	'artistControllers'
]);

//Configuring our Angular App to use Route Provider

myApp.config(['$routeProvider', function($routeProvider){
	//defining partial routes
	$routeProvider.
	when('/list', {
	 templateUrl: 'partials/list.html',
	 controller: 'ListController' 
	}).when('/details/:itemId', {
	 templateUrl: 'partials/details.html',
	 controller: 'DetailsController'
	}).
	otherwise({
		redirectTo: '/list'
	});
}]);