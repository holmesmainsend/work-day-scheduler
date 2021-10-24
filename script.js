// Current day display
var now = moment();
var nowFormatted = now.format("dddd" + "," + " MMMM Do");
$("#currentDay").append(nowFormatted);

// Schedule notes loader
for (i = 0; i < localStorage.length; i++) {
var slotKey = localStorage.key(i);
var slotText = localStorage.getItem(slotKey);
$("." + slotKey).text(slotText);
};

// Schedule editor
$(".saveBtn").on("click", function() {
    var text = $(this).siblings(".description").val().trim();
    var key = $(this).siblings()[1].className.slice(19, 21);
    localStorage.setItem(key, text);
});

// Time difference determiner
function timeDiff() {
    var now = moment();
    var currentHour = now.format("k");
    var currentHourParsed = parseInt(currentHour);

    for (i = 0; i < 9; i++) {
    var timeSlot = $(".description")[i].className.slice(19, 21);
    var timeSlotParsed = parseInt(timeSlot);

    if (timeSlotParsed < currentHourParsed) {
        if (timeSlotParsed === 9) {
            $(".0" + [i + 9]).removeClass("present").removeClass("future").addClass("past");
        } else {
            $("." + [i + 9]).removeClass("present").removeClass("future").addClass("past");
        }
    } else if (timeSlotParsed === currentHourParsed) {
        if (timeSlotParsed === 9) {
            $(".0" + [i + 9]).removeClass("past").removeClass("future").addClass("present");
        } else {
            $("." + [i + 9]).removeClass("past").removeClass("future").addClass("present");
        }
    } else {
        if (timeSlotParsed === 9) {
            $(".0" + [i + 9]).removeClass("past").removeClass("present").addClass("future");
        } else {
            $("." + [i + 9]).removeClass("past").removeClass("present").addClass("future");
        }
    }
    };
};
timeDiff();

// Time difference refresher
function timeRefresher() {
    setInterval(timeDiff, 5000);
}; 
timeRefresher();