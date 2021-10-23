// TODO: change classes to 09, etc and splice accordingly
// TODO: retrieve text on page load (local storage)


// Current day
var now = moment();
var nowFormatted = now.format("dddd" + "," + " MMMM Do");
$("#currentDay").append(nowFormatted);


// Put getStorage function here
// localStorage."get all items", gives an array
// loop through array
// key value as identifier $(key).append(value)
// grab IDs with $(this)


// Time difference determiner
function timeDeterminer() {
    var now = moment();
    var currentHour = now.format("k");
if (currentHour < 9) {
    $(".col-10").removeClass("past").removeClass("present").addClass("future");
} 

// $(".row").each(function() {
    // $(this).className
    // parse the slice
    // compare integer values (< = past, === present, > = future) remove/add appropriate classes
// })

else if (currentHour < 10 ) {
    $(".nineAM").removeClass("past").removeClass("future").addClass("present");
    $(".tenAM").removeClass("past").removeClass("present").addClass("future");
    $(".elevenAM").removeClass("past").removeClass("present").addClass("future");
    $(".twelvePM").removeClass("past").removeClass("present").addClass("future");
    $(".onePM").removeClass("past").removeClass("present").addClass("future");
    $(".twoPM").removeClass("past").removeClass("present").addClass("future");
    $(".threePM").removeClass("past").removeClass("present").addClass("future");
    $(".fourPM").removeClass("past").removeClass("present").addClass("future");
    $(".fivePM").removeClass("past").removeClass("present").addClass("future");
} 
else if (currentHour < 11) {
    $(".nineAM").removeClass("future").removeClass("present").addClass("past");
    $(".tenAM").removeClass("past").removeClass("future").addClass("present");
    $(".elevenAM").removeClass("past").removeClass("present").addClass("future");
    $(".twelvePM").removeClass("past").removeClass("present").addClass("future");
    $(".onePM").removeClass("past").removeClass("present").addClass("future");
    $(".twoPM").removeClass("past").removeClass("present").addClass("future");
    $(".threePM").removeClass("past").removeClass("present").addClass("future");
    $(".fourPM").removeClass("past").removeClass("present").addClass("future");
    $(".fivePM").removeClass("past").removeClass("present").addClass("future");
} 
else if (currentHour < 12) {
    $(".nineAM").removeClass("future").removeClass("present").addClass("past");
    $(".tenAM").removeClass("future").removeClass("present").addClass("past");
    $(".elevenAM").removeClass("past").removeClass("future").addClass("present");
    $(".twelvePM").removeClass("past").removeClass("present").addClass("future");
    $(".onePM").removeClass("past").removeClass("present").addClass("future");
    $(".twoPM").removeClass("past").removeClass("present").addClass("future");
    $(".threePM").removeClass("past").removeClass("present").addClass("future");
    $(".fourPM").removeClass("past").removeClass("present").addClass("future");
    $(".fivePM").removeClass("past").removeClass("present").addClass("future");
} 
else if (currentHour < 13) {
    $(".nineAM").removeClass("future").removeClass("present").addClass("past");
    $(".tenAM").removeClass("future").removeClass("present").addClass("past");
    $(".elevenAM").removeClass("future").removeClass("present").addClass("past");
    $(".twelvePM").removeClass("past").removeClass("future").addClass("present");
    $(".onePM").removeClass("past").removeClass("present").addClass("future");
    $(".twoPM").removeClass("past").removeClass("present").addClass("future");
    $(".threePM").removeClass("past").removeClass("present").addClass("future");
    $(".fourPM").removeClass("past").removeClass("present").addClass("future");
    $(".fivePM").removeClass("past").removeClass("present").addClass("future");
} 
else if (currentHour < 14) {
    $(".nineAM").removeClass("future").removeClass("present").addClass("past");
    $(".tenAM").removeClass("future").removeClass("present").addClass("past");
    $(".elevenAM").removeClass("future").removeClass("present").addClass("past");
    $(".twelvePM").removeClass("future").removeClass("present").addClass("past");
    $(".onePM").removeClass("past").removeClass("future").addClass("present");
    $(".twoPM").removeClass("past").removeClass("present").addClass("future");
    $(".threePM").removeClass("past").removeClass("present").addClass("future");
    $(".fourPM").removeClass("past").removeClass("present").addClass("future");
    $(".fivePM").removeClass("past").removeClass("present").addClass("future");
} 
else if (currentHour < 15) {
    $(".nineAM").removeClass("future").removeClass("present").addClass("past");
    $(".tenAM").removeClass("future").removeClass("present").addClass("past");
    $(".elevenAM").removeClass("future").removeClass("present").addClass("past");
    $(".twelvePM").removeClass("future").removeClass("present").addClass("past");
    $(".onePM").removeClass("future").removeClass("present").addClass("past");
    $(".twoPM").removeClass("past").removeClass("future").addClass("present");
    $(".threePM").removeClass("past").removeClass("present").addClass("future");
    $(".fourPM").removeClass("past").removeClass("present").addClass("future");
    $(".fivePM").removeClass("past").removeClass("present").addClass("future");
} 
else if (currentHour < 16) {
    $(".nineAM").removeClass("future").removeClass("present").addClass("past");
    $(".tenAM").removeClass("future").removeClass("present").addClass("past");
    $(".elevenAM").removeClass("future").removeClass("present").addClass("past");
    $(".twelvePM").removeClass("future").removeClass("present").addClass("past");
    $(".onePM").removeClass("future").removeClass("present").addClass("past");
    $(".twoPM").removeClass("future").removeClass("present").addClass("past");
    $(".threePM").removeClass("past").removeClass("future").addClass("present");
    $(".fourPM").removeClass("past").removeClass("present").addClass("future");
    $(".fivePM").removeClass("past").removeClass("present").addClass("future");
} 
else if (currentHour < 17) {
    $(".nineAM").removeClass("future").removeClass("present").addClass("past");
    $(".tenAM").removeClass("future").removeClass("present").addClass("past");
    $(".elevenAM").removeClass("future").removeClass("present").addClass("past");
    $(".twelvePM").removeClass("future").removeClass("present").addClass("past");
    $(".onePM").removeClass("future").removeClass("present").addClass("past");
    $(".twoPM").removeClass("future").removeClass("present").addClass("past");
    $(".threePM").removeClass("future").removeClass("present").addClass("past");
    $(".fourPM").removeClass("past").removeClass("future").addClass("present");
    $(".fivePM").removeClass("past").removeClass("present").addClass("future");
} 
else if (currentHour < 18) {
    $(".nineAM").removeClass("future").removeClass("present").addClass("past");
    $(".tenAM").removeClass("future").removeClass("present").addClass("past");
    $(".elevenAM").removeClass("future").removeClass("present").addClass("past");
    $(".twelvePM").removeClass("future").removeClass("present").addClass("past");
    $(".onePM").removeClass("future").removeClass("present").addClass("past");
    $(".twoPM").removeClass("future").removeClass("present").addClass("past");
    $(".threePM").removeClass("future").removeClass("present").addClass("past");
    $(".fourPM").removeClass("future").removeClass("present").addClass("past");
    $(".fivePM").removeClass("past").removeClass("future").addClass("present");
} 
else if (currentHour >= 18) {
    $(".col-10").removeClass("present").removeClass("future").addClass("past");
}
};


// Time difference determiner refresher
function timeRefresher() {
    setInterval(timeDeterminer, 1000);
}; 
timeRefresher();


// Schedule editing
$(".saveBtn").on("click", function() {
    var text = $(this).siblings(".description").val().trim();
    console.log(text);
    var key = $(this).siblings()[1].className.slice(19, 25);
    localStorage.setItem(key, text);
});
