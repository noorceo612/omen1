var ngApp = angular.module('myapp', []);
/*
 * ngApp.controller('ctrl', function($scope) {
 * $scope.persons=[{"First_Name":"Moe", "Last_Name":"Doe", "Zip_Code":55435,
 * "Age":23}, {"First_Name":"Jane", "Last_Name":"Doe", "Zip_Code":55455,
 * "Age":24}, {"First_Name":"Jhon", "Last_Name":"Doe", "Zip_Code":58435,
 * "Age":28}]; $scope.saveChanges = function() { console.log($scope.persons); };
 * 
 * 
 * });
 */

ngApp.controller('ctrl2', function($scope) {
	$scope.image = [ "image/1.jpg", "image/10.jpg", "image/11.jpg",
			"image/14.jpg", "image/15.jpg", "image/7.jpg", "image/4.jpg",
			"image/12.jpg", "image/13.jpg", "image/2.jpg", "image/3.jpg",
			"image/5.jpg", "image/6.jpg", "image/8.jpg", "image/9.jpg" ];
	$scope.photo = 0;
	$scope.pre = function() {
		if ($scope.photo == 0) {
			$scope.photo = 14;
		} else {
			$scope.photo = $scope.photo - 1;
		}
	}
	$scope.next = function() {
		if ($scope.photo == 14) {
			$scope.photo = 0;
		} else {
			$scope.photo = $scope.photo + 1;
		}
	}
});

ngApp.controller('ctrl3', function($scope, $http) {
	$scope.planets = [];
	$http({
		url : 'json/planet.json',
		method : "GET"
	}).success(function(resp) {
		$scope.planets = resp.planetArrays;
	});

});
ngApp.filter('planetSorter', function() {
	return function(input) {
		// console.log(input);
		var temp = [];
		temp.push(input[7], input[6], input[5], input[4], input[3], input[2],
				input[1], input[0]);
		return temp;
	};

});