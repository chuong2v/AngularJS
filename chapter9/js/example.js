angular.module("exampleApp", ["exampleApp.Controllers",
  "exampleApp.Filters", "exampleApp.Directives", "exampleApp.Services"])
.constant("startTime", new Date().toLocaleTimeString())
.config(function (startTime) {
  console.log("Main module config: " + startTime);
})
.run(function (startTime) {
  console.log("Main module run: " + startTime);
});

