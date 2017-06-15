var app=angular.module('tableapp',[]);
app.controller('tableCtrl',function($scope){
	$scope.classes=[
	{ 'classname':'1',
	  'section':'a',
	 'strength': '60'},];


	$scope.addRow = function(){
		$scope.classes.push({'classname':$scope.classname,'section':$scope.section,'strength':$scope.strength});
		$scope.classname='';
		$scope.section='';
		$scope.strength='';
	};

});