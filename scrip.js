//Connects time and Date to header of the page.
$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));

//Make objects and store in array for
timeBlocks = [
  {
    hour: "09:00",
    meridiem: "am",
    input: "",
    textarea: 9,
  },
  {
    hour: "10:00",
    meridiem: "am",
    input: "",
    textarea: 10,
  },
  {
    hour: "11:00",
    meridiem: "am",
    input: "",
    textarea: 11,
  },
  {
    hour: "12:00",
    meridiem: "pm",
    input: "",
    textarea: 12,
  },
  {
    hour: "01:00",
    meridiem: "pm",
    input: "",
    textarea: 1,
  },
  {
    hour: "02:00",
    meridiem: "pm",
    input: "",
    textarea: 2,
  },
  {
    hour: "03:00",
    meridiem: "pm",
    input: "",
    textarea: 3,
  },
  {
    hour: "04:00",
    meridiem: "pm",
    input: "",
    textarea: 4,
  },
  {
    hour: "05:00",
    meridiem: "pm",
    input: "",
    textarea: 5,
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
    .attr({ class: "col-md-10" })
    .attr("id", `input${timeBlocks.textarea}`);
  //   append input to hourRow
  hourRow.append(inputCol);

  //---build btn
  var saveBtn = $("<button>")
    .text(`SAVE`)
    .attr({ class: "col-md-1 btn saveBtn" });
  // append btn to hourRow
  hourRow.append(saveBtn);
});

// ----put the text content in a vriable
// ---- create the element
//-----put the text in the element
//-----ad the classes to the element
//-----append the element
