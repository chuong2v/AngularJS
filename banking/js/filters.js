angular.module("bankingApp.Filters", [])
.filter("dateFilter", function(){
  return function(input, params){
    var out = [];
    for (var i = 0; i < input.length; i++) {
      if(input[i].date.getDay() == params.getDay()
        && input[i].date.getMonth() == params.getMonth()
        && input[i].date.getMonth() == params.getMonth()){
        console.log(input[i].date);
        console.log(params);
        out.push(input[i]);
      }
    }
    return out;
  }
});