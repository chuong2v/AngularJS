angular.module("bankingApp.Accounts", ["bankingApp.Payments"])
.controller("getAccountsCtrl",function($scope, $http, exposeData){
  $scope.accounts = [];
  $scope.paymentsList = exposeData;
  $http.get('accounts.json')
  .success(function(data){
    $scope.accounts = angular.fromJson(data);
  });
})
.controller("deleteCtrl", function($scope){

});