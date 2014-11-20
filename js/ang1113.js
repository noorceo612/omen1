var ngApp = angular.module('myapp', []);

ngApp.filter('reverse',function(){
	return function(input){
		var result='';
		input=input||'';
		for(var i=0; i<input.length; i++){
			result=input[i]+result;
		}
	return result;
	}	
});

ngApp.filter('capitalize',function(){
	return function(input){
		/*input=input||'';*/
		var result=input.substr(0,1).toUpperCase()+input.substr(1).toLowerCase();
		return result;
	}
});