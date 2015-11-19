angular.module("bankingApp.Accounts", ["bankingApp.Payments"])
.controller("getAccountsCtrl",function($scope, $http, exposeData){
  $scope.accounts = [];
  $scope.paymentsList = exposeData.list;
  $scope.paymentOptions = exposeData.paymentTypeOptions;
  $scope.paymentType = 0;

  //get accounts list from Json file
  $http.get('accounts/accounts.json')
  .success(function(data){
    $scope.accounts = angular.fromJson(data);
  });
})
.filter("accountsFilter", function(){
  return function(input, params){
    var out = [];
    for (var i = input.length - 1; i >= 0; i--) {
      if(input[i].id == params){
        out.push(input[i]);
      }
    }
    return out;
  }
});