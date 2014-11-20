var ngApp=angular.module('myapp',[]);

ngApp.controller('hell',function($scope){
	$scope.hello=function(){
		$scope.p1=!$scope.p1;
	}
	
	$scope.x='0px';
$scope.con=function(){
	if($scope.x=='0px'){
		$scope.x='200px';
	}
	else{$scope.x='0px';}
	
}

});


ngApp.controller('hell2',function($scope){
	$scope.colors=['yellow','green','blue','black','pink','red'];
});