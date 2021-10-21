// Current day
var now = moment();
var nowFormatted = now.format("dddd" + "," + " MMMM Do");
$("#currentDay").append(nowFormatted);


// Current time checker
var nowHourMinutes = now.format("LT");
console.log(nowHourMinutes);


