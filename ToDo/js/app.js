var app = angular.module("app",['app.services', 'app.controllers', 'app.directives']);

app.controller("TodoController", function($scope, Todos){
  $scope.hideButton = "Show completed to-dos";
  this.showCompleted = false;

  Todos.get().success(function (data) {
    $scope.todoList = angular.fromJson(data);
    $scope.todosCount = $scope.todoList.length;
  });
 
  this.count = function(item){
    if(item.done)
      $scope.todosCount--;
    else
      $scope.todosCount++;
  }

  this.setEditable = function(item){
    var index = $scope.todoList.indexOf(item);
    for (var i = $scope.todoList.length - 1; i >= 0; i--) {
      if(i !== index)
        $scope.todoList[i].editable = false;
    };
    if(item.editable === false){
      item.editable = true;
    }
    else if(item.editable===true && item.title!=""){
      item.editable = false;
    }
  }

  this.addTodo = function(){
    if ($scope.newTask != undefined 
      && $scope.newTask!=null 
      && $scope.newTask!="") {
      var item={title: $scope.newTask, done: false, editable: false};
      $scope.todoList.unshift(item);
      $scope.todosCount++;
      $scope.newTask=null;
    }
  };

  this.removeTodo = function(item){
    var index = $scope.todoList.indexOf(item);
    if(index>-1){
      if(!item.done)
        $scope.todosCount--;
      $scope.todoList.splice(index,1);    
    }
  }

  this.showHideCompleted = function(){
    if(this.showCompleted)    
      $scope.hideButton = "Show completed to-dos"
    else
      $scope.hideButton = "Hide completed to-dos"
    this.showCompleted = !this.showCompleted;
  } 
});