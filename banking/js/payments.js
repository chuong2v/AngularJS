
angular.module("bankingApp.Payments", [])
.controller("withdrawCtrl", function($scope, $rootScope, exposeData){
  $scope.withdrawCount = 0;
  $scope.paymentsList = exposeData;
  $scope.change = function(account){
    if(account.balance >= account.withdraw + 100000){
      account.balance -= account.withdraw;
      $scope.withdrawCount++;
      var now = new Date();
      $scope.paymentsList.push({"name": account.name,
       "number": - account.withdraw,
       "date": new Date()
     });
    }    
  }
})
.controller("depositCtrl", function($scope, exposeData){
  $scope.depositCount = 0;
  $scope.paymentsList = exposeData;
  $scope.change = function(account){
    if(account.deposit > 0){
      account.balance += account.deposit;
      $scope.depositCount++;
      // var now = new Date();
      $scope.paymentsList.push({"name": account.name,
        "number": account.deposit,
        "date": new Date()
      });
    }
  }
})
.service("exposeData", function(){
  var list = [];
  return list;
});
