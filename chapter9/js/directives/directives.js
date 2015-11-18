angular.module("exampleApp.Directives", [])
.directive("ngHighlight", function ($filter) {
  var dayFiter = $filter("dayName");
  return function (scope, element, attrs) {
    // $filter("dayName")(scope.day)
    if (dayFiter(scope.day) == attrs["ngHighlight"]) {
      element.css("color", "red");
    }
  }
}); 