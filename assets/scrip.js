//Connects time and Date to header of the page.
$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));

//Make objects and store in array for

timeBlocks = [
  {
    hour: "09:00am",
    input: "",
    blockIndex: "1",
    time: "09",
  },
  {
    hour: "10:00am",
    input: "",
    blockIndex: "2",
    time: "10",
  },
  {
    hour: "11:00am",
    input: "",
    blockIndex: "3",
    time: "11",
  },
  {
    hour: "12:00pm"
    input: "",
    blockIndex: "4",
    time: "12",
  },
  {
    hour: "01:00pm",
    input: "",
    blockIndex: "5",
    time: "13",
  },
  {
    hour: "02:00pm",
    input: "",
    blockIndex: "6",
    time: "14",
  },
  {
    hour: "03:00pm",
    input: "",
    blockIndex: "7",
    time: "15",
  },
  {
    hour: "04:00pm",
    input: "",
    blockIndex: "8",
    time: "16",
  },
  {
    hour: "05:00pm",
    input: "",
    blockIndex: "9",
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
    .text(timeBlock.hour);
  console.log(timeCol);
  hourRow.append(timeCol);

  //   Textarea element to input events and save them
  var inputCol = $("<textarea>")
    .attr({ class: "col-md-10 text" })
    .attr("id", timeBlock.blockIndex);
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

// On click event to save input for blockIndex in local storage
$(".saveBtn").on("click", function (event) {
  event.preventDefault();
  //-- save text
  var text = $(this).siblings(".text").val();
  console.log("text", text);
  // Identify which box it was from
  var contentIndex = $(this).siblings(".text").attr("id");

  // Puts information from blockIndex and moves it to local storage
  timeBlocks.forEach(function (timeBlock) {
    if (timeBlock.blockIndex === contentIndex) {
      timeBlock.input = text;
    }
  });
  localStorage.setItem("timeBlocks", JSON.stringify(timeBlocks));
});

// Init function when page loads
function init() {
  storedBlocks = JSON.parse(localStorage.getItem("timeBlocks"));
  if (storedBlocks) {
    timeBlocks = storedBlocks;
  }
  timeBlocks.forEach(function (timeBlock) {
    console.log("time block", timeBlock);
    $(`#${timeBlock.blockIndex}`).text(timeBlock.input);
  });
}
init();
