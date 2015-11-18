var ctrl = angular.module("app.controllers",[]);
ctrl.controller("TimeController", function($scope){
  $scope.time = {
    now: new Date()
  };
  var updateClock = function() {
    $scope.time.now = new Date();
  };
  setInterval(function() {
    $scope.$apply(updateClock());
  }, 1000); 
  // updateClock();  
});