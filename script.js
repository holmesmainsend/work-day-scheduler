// Current day
var now = moment();
var nowFormatted = now.format("dddd" + "," + " MMMM Do");
$("#currentDay").append(nowFormatted);


// Current time checker
var currentHour = now.format("k");


// Time difference determiner
function timeDeterminer() {
if (currentHour < 9) {
    $(".col-10").addClass("future");
} else if (currentHour < 10 ) {
    $(".nineAM").addClass("present");
} else if (currentHour < 11) {
    $(".nineAM").addClass("past");
    $(".tenAM").addClass("present");
} else if (currentHour < 12) {
    $(".tenAM").addClass("past");
    $(".elevenAM").addClass("present");
} else if (currentHour < 13) {
    $(".elevenAM").addClass("past");
    $(".twelvePM").addClass("present");
} else if (currentHour < 14) {
    $(".twelvePM").addClass("past");
    $(".onePM").addClass("present");
} else if (currentHour < 15) {
    $(".onePM").addClass("past");
    $(".twoPM").addClass("present");
} else if (currentHour < 16) {
    $(".twoPM").addClass("past");
    $(".threePM").addClass("present");
} else if (currentHour < 17) {
    $(".threePM").addClass("past");
    $(".fourPM").addClass("present");
} else if (currentHour < 18) {
    $(".fourPM").addClass("past");
    $(".fivePM").addClass("present");
} else if (currentHour >= 18) {
    $(".col-10").addClass("past");
}
};


// Time determiner refresher
function timeRefresher() {
    setInterval(timeDeterminer, 1000);
}; 
timeRefresher();