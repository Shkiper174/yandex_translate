var myApp = angular.module('myApp',[]);

myApp.controller('translateCtrl', ['$scope','$http', function($scope, $http) {
$scope.txt = "love";
var url = "";
$scope.langNow = "Язык..."

$scope.translateMsg = function(){
	$http.get('config.json').success(function(data) {

		$http({method: 'GET', url: data.detectLang+"?"+data.key+"&text="+$scope.txt})
    	.success(function(getLang) {	
				
				url = data.link+"?lang="+getLang.lang+"-ru&"+data.key+"&text="+$scope.txt;

				$http({method: 'GET', url: data.getLangs+"?ui="+getLang.lang+"&"+data.key})
				.success(function(data) {
					$scope.langNow = data.langs[getLang.lang];
				});
				
				$http({method: 'GET', url})
				.success(function(finaltext) {	
					$scope.result = finaltext.text.toString();
				});
		});;
   	});
}
}]);

 