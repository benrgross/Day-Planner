//Connects time and Date to header of the page.
$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));

//Make objects and store in array for
timeBlocks = [
  {
    hour: "09",
    meridiem: "am",
    event: "",
  },
  {
    hour: "10",
    meridiem: "am",
    event: "",
  },
  {
    hour: "11",
    meridiem: "am",
    event: "",
  },
  {
    hour: "12",
    meridiem: "pm",
    event: "",
  },
  {
    hour: "01",
    meridiem: "pm",
    event: "",
  },
  {
    hour: "02",
    meridiem: "pm",
    event: "",
  },
  {
    hour: "03",
    meridiem: "pm",
    event: "",
  },
  {
    hour: "04",
    meridiem: "pm",
    event: "",
  },
  {
    hour: "05",
    meridiem: "pm",
    event: "",
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
  var hourColTime = $("<div>")
    .attr({ class: "col-md-1 hour" })
    .text(`${timeBlocks.hour}${timeBlocks.meridiem}`);
  console.log(hourColTime);
  hourRow.append(hourColTime);
});
// ----get the elements id

// ----put the text content in a vriable
// ---- create the element
//-----put the text in the element
//-----ad the classes to the element
//-----append the element
