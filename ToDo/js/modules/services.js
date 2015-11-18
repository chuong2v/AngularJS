
var app = angular.module("app.services",[]);
app.factory("Todos", function($http){
  return{
    get: function(){
      return $http.get('others/todos.json');
    }    
  }
});