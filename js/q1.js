var ngApp = angular.module('myapp', []);

ngApp.controller('ctrl', function($scope) {
	$scope.light = "image/light_green_dan__01.svg.hi.png";
	$scope.green = function() {
		$scope.light = "image/light_green_dan__01.svg.hi.png";
	}
	$scope.yellow = function() {
		$scope.light = "image/yellowlight.png";
	}
	$scope.red = function() {
		$scope.light = "image/light_red_dan_ge_01.svg.hi.png";
	}
});