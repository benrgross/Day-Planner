//Connects time and Date to header of the page.
$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));

//Make objects and store in array for
var storeContent = [];
timeBlocks = [
  {
    hour: "09:00",
    meridiem: "am",
    input: "did it work ",
    textarea: "0",
    time: "09",
  },
  {
    hour: "10:00",
    meridiem: "am",
    input: "",
    textarea: "1",
    time: "10",
  },
  {
    hour: "11:00",
    meridiem: "am",
    input: "",
    textarea: "2",
    time: "11",
  },
  {
    hour: "12:00",
    meridiem: "pm",
    input: "",
    textarea: "3",
    time: "12",
  },
  {
    hour: "01:00",
    meridiem: "pm",
    input: "",
    textarea: "4",
    time: "13",
  },
  {
    hour: "02:00",
    meridiem: "pm",
    input: "",
    textarea: "5",
    time: "14",
  },
  {
    hour: "03:00",
    meridiem: "pm",
    input: "",
    textarea: "6",
    time: "15",
  },
  {
    hour: "04:00",
    meridiem: "pm",
    input: "",
    textarea: "7",
    time: "16",
  },
  {
    hour: "09:00",
    meridiem: "pm",
    input: "",
    textarea: "8",
    time: "17",
  },
];

// display time block on page
//-----for each function
timeBlocks.forEach(function (timeBlocks) {
  //--- build the html element
  var hourRow = $("<div>").attr({ class: "row" });
  // place element
  console.log(hourRow);
  $(".container").append(hourRow);

  //-- build hour col
  var timeCol = $("<div>")
    .attr({ class: "col-md-1 hour" })
    .text(`${timeBlocks.hour}${timeBlocks.meridiem}`);
  console.log(timeCol);
  //   append timeCol to hourRow
  hourRow.append(timeCol);

  //   build text field with input and id
  var inputCol = $("<textarea>")
    .attr({ class: "col-md-10 text" })
    .attr("id", `${timeBlocks.textarea}`);
  //   append input to hourRow
  hourRow.append(inputCol);
  console.log(timeBlocks[0]);
  console.log("current hour from moment", moment().format("HH"));

  // if statements to change class for pas present or future display
  if (timeBlocks.time < moment().format("HH")) {
    inputCol.attr({ class: "col-md-10 past text" });
  }
  if (timeBlocks.time > moment().format("HH")) {
    inputCol.attr({ class: "col-md-10 future text" });
  }
  if (timeBlocks.time == moment().format("HH")) {
    inputCol.attr({ class: "col-md-10 present text" });
  }

  //---build btn
  var saveBtn = $("<button>")
    .text(`SAVE`)
    .attr({ class: "col-md-1 btn saveBtn" });
  // append btn to hourRow
  hourRow.append(saveBtn);
});

// save input for textarea in local storage
// ----- connect button
$(".saveBtn").on("click", function (event) {
  event.preventDefault();
  // save text
  var text = $(".text").val();
  // save which box it was from
  var contentIndex = $(this).siblings(".text").attr("id");
  // set text content
  // if (timeBlocks.textarea === contentIndex) {
  //   timeBlocks[contentIndex].input.push(text);
  //   console.log("hello", timeBlocks[1].input);
  // }
  // store in object
  var savedContent = {
    content: text,
    boxNum: contentIndex,
  };
  //store in local storage
  storeContent.push(savedContent);
  localStorage.setItem("content", JSON.stringify(storeContent));
  console.log("saved content", savedContent);
  console.log("stored content", storeContent);
});

// init function when page loads
function init() {
  // get item from local storage and put it in storedContent array
  if (localStorage.getItem("content")) {
    storeContent = JSON.parse(localStorage.getItem("content"));
    console.log("stored stuff", storeContent);
  }
}
init();

// take storedContent and display info in day planner boxes
function displaySavedContent() {
  timeBl;
}
