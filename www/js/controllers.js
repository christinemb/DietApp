angular.module('DietApp.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  
});
.controller('DishesCtrl', function($scope, $stateParams) {
  $stateParams.dishesId = $scope.dishesId;
 });
 
