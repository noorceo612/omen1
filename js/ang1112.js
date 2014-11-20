var ngApp = angular.module('myapp', []);

ngApp.controller('hell2',function($scope){
	$scope.colors=['yellow','green','blue','black','pink','red'];
	$scope.del=function(i){
		$scope.colors.splice(i,1);}
	$scope.add = function() {
		$scope.colors.push($scope.yes);
		$scope.yes='';
	}

});

ngApp.controller('hell3',function($scope){
	$scope.oder=[{
		'name':"Meat",'Price':3,'qty':2,'soldout':true
	},
	             {
		'name':"Milk",'Price':3,'qty':2,'soldout':true
	},
	             {
	     'name':"Mango",'Price':3,'qty':2,'soldout':false
	},
	             {
		'name':"Lemon",'Price':3,'qty':2,'soldout':true
	},
	             {
		'name':"Goody",'Price':22,'qty':2,'soldout':false
	             }];
	
});