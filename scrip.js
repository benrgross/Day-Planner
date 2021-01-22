//Connects time and Date to header of the page.
$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));

//Make objects and store in array for
timeBlocks = [
  {
    hour: "09:00",
    meridiem: "am",
    input: "",
  },
  {
    hour: "10:00",
    meridiem: "am",
    input: "",
  },
  {
    hour: "11:00",
    meridiem: "am",
    input: "",
  },
  {
    hour: "12:00",
    meridiem: "pm",
    input: "",
  },
  {
    hour: "01:00",
    meridiem: "pm",
    input: "",
  },
  {
    hour: "02:00",
    meridiem: "pm",
    input: "",
  },
  {
    hour: "03:00",
    meridiem: "pm",
    input: "",
  },
  {
    hour: "04:00",
    meridiem: "pm",
    input: "",
  },
  {
    hour: "05:00",
    meridiem: "pm",
    input: "",
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

  //   build text field with input
  var inputCol = $("<textarea>").attr({ class: "col-md-10" });
  //   append input to hourRow
  hourRow.append(inputCol);

  //---build btn
  var saveBtn = $("<button>")
    .text(`SAVE`)
    .attr({ class: "col-md-1 btn saveBtn" });
  // append btn to hourRow
  hourRow.append(saveBtn);
});
// ----get the elements id

// ----put the text content in a vriable
// ---- create the element
//-----put the text in the element
//-----ad the classes to the element
//-----append the element
