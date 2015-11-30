
angular.module("bankingApp.Payments", [])
.controller("withdrawCtrl", function($scope, $rootScope, exposeData){
  $scope.withdrawCount = 0;
  $scope.paymentsList = exposeData.list;
  $scope.change = function(account){
    if(account.balance >= account.withdraw + 100000){
      account.balance =  parseInt(account.balance) - parseInt(account.withdraw);
      $scope.withdrawCount++;
      $scope.paymentsList.push({
        "id": account.id,
        "number": account.withdraw,
        "date": new Date(), 
        "type": 1
      });     
    }
  }
})
.controller("depositCtrl", function($scope, $http, exposeData){
  $scope.depositCount = 0;
  $scope.paymentsList = exposeData.list;
  $scope.change = function(account){
    if(account.deposit > 0){
      account.balance =  parseInt(account.balance) +  parseInt(account.deposit);
      $scope.depositCount++;
      $scope.paymentsList.push({
        "id": account.id,
        "number": account.deposit,
        "date": new Date(), 
        "type": 2
      });
      // $http.post("accounts/account.json", $scope.paymentList);
    }
  }
})
.service("exposeData", function(){
  var list = [];
  var paymentTypeOptions = {
    All: 0,
    Withdraw: 1,
    Deposit: 2
  }
  return {
    list,
    paymentTypeOptions
  }
})
.filter("paymentsFilter", function(){
  return function(input, params){
    if(params != 0){
      var out = [];
      for (var i = 0; i < input.length; i++) {
        if(input[i].type == params){
          out.push(input[i]);
        }
      }
      return out;
    }else{
      return input;  
    }   
  }
});
