// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");


function dataUpload(data) {
    
    data.forEach(function(ufodata) { //loop through each report in data
        console.log(ufodata);
        var row = tbody.append("tr"); //append a tr attribute to create row for ufo values
        Object.entries(ufodata).forEach(function([key, value]) {  //get the key and values of each category in a ufo sighting
        console.log(key, value);
        //Append a cell to the row for each value
        var cell = row.append("td"); //append td to page to add the value
        cell.text(value); //adds the value to the page
        });
    });
}

dataUpload(tableData)


var button = d3.select("#filter-btn");
var form = d3.select(".form-group");



button.on("click", filtering);
form.on("submit",filtering);


function filtering() {
    d3.event.preventDefault();
    var inputdate = d3.select("#datetime").property("value");
    var inputstate = d3.select("#state").property("value");
    var inputcity = d3.select("#city").property("value");
    var inputshape = d3.select("#shape").property("value");
    var inputcountry = d3.select("#country").property("value");
    console.log(inputdate);
    console.log(inputstate);
    console.log(inputcity);
    console.log(inputshape);
    console.log(inputcountry);

    var filteredData=tableData;
    if (inputdate){
        filteredData = filteredData.filter(sighting => sighting.datetime === inputdate); 
    }
    if (inputstate) {
        filteredData = filteredData.filter(sighting => sighting.state === inputstate);
    }
    if (inputcity) {
        filteredData = filteredData.filter(sighting => sighting.city === inputcity);
    }
   
    if (inputshape) {
        filteredData = filteredData.filter(sighting => sighting.shape === inputshape);
    }
    if (inputcountry) {
        filteredData = filteredData.filter(sighting => sighting.country === inputcountry);
    }

    tbody.html("");
    dataUpload(filteredData)
}


var reset = d3.select("#reset-btn")
reset.on("click",resetdata)

function resetdata() {
    tbody.html("");
    dataUpload(tableData)}
