//Connects time and Date to header of the page.
$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));

//Make objects and store in array for
var storeContent = [];
timeBlocks = [
  {
    hour: "09:00",
    meridiem: "am",
    input: "",
    textarea: "1",
    time: "09",
  },
  {
    hour: "10:00",
    meridiem: "am",
    input: "",
    textarea: "2",
    time: "10",
  },
  {
    hour: "11:00",
    meridiem: "am",
    input: "",
    textarea: "3",
    time: "11",
  },
  {
    hour: "12:00",
    meridiem: "pm",
    input: "",
    textarea: "4",
    time: "12",
  },
  {
    hour: "01:00",
    meridiem: "pm",
    input: "",
    textarea: "5",
    time: "13",
  },
  {
    hour: "02:00",
    meridiem: "pm",
    input: "",
    textarea: "6",
    time: "14",
  },
  {
    hour: "03:00",
    meridiem: "pm",
    input: "",
    textarea: "7",
    time: "15",
  },
  {
    hour: "04:00",
    meridiem: "pm",
    input: "",
    textarea: "8",
    time: "16",
  },
  {
    hour: "05:00",
    meridiem: "pm",
    input: "",
    textarea: "9",
    time: "17",
  },
];

// Display time block on page
timeBlocks.forEach(function (timeBlock) {
  //-- Row element
  var hourRow = $("<div>").attr({ class: "row" });
  console.log(hourRow);
  $(".container").append(hourRow);

  //-- Hour Col
  var timeCol = $("<div>")
    .attr({ class: "col-md-.5 hour" })
    .text(`${timeBlock.hour}${timeBlock.meridiem}`);
  console.log(timeCol);
  hourRow.append(timeCol);

  //   Textarea element
  var inputCol = $("<textarea>")
    .attr({ class: "col-md-10 text" })
    .attr("id", `${timeBlock.textarea}`);
  hourRow.append(inputCol);

  //-- if statements to change class for past, present, and future display
  if (timeBlock.time < moment().format("HH")) {
    inputCol.attr({ class: "col-md-10 past text" });
  }
  if (timeBlock.time > moment().format("HH")) {
    inputCol.attr({ class: "col-md-10 future text" });
  }
  if (timeBlock.time == moment().format("HH")) {
    inputCol.attr({ class: "col-md-10 present text" });
  }

  //-- Save button element
  var saveBtn = $("<button>").attr({
    class: "col-md-.5 btn saveBtn far fa-save",
  });
  hourRow.append(saveBtn);
});

// On click event to save input for textarea in local storage
$(".saveBtn").on("click", function (event) {
  event.preventDefault();
  //-- save text
  var text = $(this).siblings(".text").val();
  console.log("text", text);
  // Identify which box it was from
  var contentIndex = $(this).siblings(".text").attr("id");

  // Puts information from textarea and moves it to local storage
  timeBlocks.forEach(function (timeBlock) {
    if (timeBlock.textarea === contentIndex) {
      timeBlock.input = text;
    }
  });
  localStorage.setItem("timeBlocks", JSON.stringify(timeBlocks));
});

// Init function when page loads
function init() {
  timeBlocks = JSON.parse(localStorage.getItem("timeBlocks"));

  timeBlocks.forEach(function (timeBlock) {
    $(`#${timeBlock.textarea}`).text(timeBlock.input);
  });
  console.log(timeBlocks);
}
init();
