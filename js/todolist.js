var myApp = angular.module('myapp', []);
myApp.controller("TodoCtrl", function($scope) {

	$scope.todos = [ {
		"name" : "shopping",
		"sate" : false
	}, {
		"name" : "Study",
		"sate" : true
	} ];
	$scope.addTodo = function(input) {
		temp = {};
		temp.name = input;
		temp.sate = false;
		$scope.todos.push(temp);
	};

});