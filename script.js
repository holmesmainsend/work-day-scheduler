// TODO: fix time slot color class assignments

// Current day
var now = moment();
var nowFormatted = now.format("dddd" + "," + " MMMM Do");
$("#currentDay").append(nowFormatted);


// Schedule notes loader
for (i = 0; i < localStorage.length; i++) {
var slotKey = parseInt(localStorage.key(i));
var slotText = localStorage.getItem(slotKey);
$("." + slotKey).text(slotText);
};


// Time determiner
function timeDeterminer() {
    var now = moment();
    var currentHour = now.format("k");
    var currentHourParsed = parseInt(currentHour);

        var x = 19;
        if (x < currentHourParsed) {
            console.log("past");
        } else if (x === currentHourParsed){
            console.log("present");
        } else {
            console.log("future")
        }



};


timeDeterminer();
// Time determiner refresher
// function timeRefresher() {
//     setInterval(timeDeterminer, 5000);
// }; 
// timeRefresher();


// Schedule editor
$(".saveBtn").on("click", function() {
    var text = $(this).siblings(".description").val().trim();
    var key = $(this).siblings()[1].className.slice(19, 21);
    localStorage.setItem(key, text);
});
