angular.module("bankingApp.Filters", [])
.filter("dateFilter", function(){
  return function(input, params){
    if(!params) return input;
    var out = [];
    for (var i = 0; i < input.length; i++) {
      if(input[i].date.getDate() == params.getDate()
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