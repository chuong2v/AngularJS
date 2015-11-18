var now = new Date();
angular.module("exampleApp.Services", [])
.value("nowValue", now)
.service("days", function (nowValue) {
  this.today = now.getDay();
  this.tomorrow = this.today + 1;
})
.config(function() {
  console.log("Services module config: (no time)");
})
.run(function (startTime) {
  console.log("Services module run: " + startTime);
});