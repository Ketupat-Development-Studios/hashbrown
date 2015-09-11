var hashbrown = angular.module('hashbrown', ['ngMaterial']);

hashbrown.controller('optionsCtrl', ['$scope', function($scope){
  
  $scope.hash = ""; //user input field
  $scope.hashtypes = ["MD5","SHA-1","SHA-2","SHA3"];
  
  $scope.nacl = ""; //custom salt
  
 
}]);