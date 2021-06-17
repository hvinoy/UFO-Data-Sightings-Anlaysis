// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

// adding data to the page from data.js
tableData.forEach(function(ufodata) { //loop through each report in data
    console.log(ufodata);
    var row = tbody.append("tr"); //append a tr attribute to create row for ufo values
    Object.entries(ufodata).forEach(function([key, value]) {  //get the key and values of each category in a ufo sighting
    console.log(key, value);
    //Append a cell to the row for each value
    var cell = row.append("td"); //append td to page to add the value
    cell.text(value); //adds the value to the page
    });
});



//filtering data

var button = d3.select("#filter-btn");
var form = d3.select(".form-group");

button.on("click", filter);
form.on("submit",filter);


function filter() {
    d3.event.preventDefault()
    var inputDate = d3.select("#datetime");
    var inputValue = inputDate.property("value");
    console.log(inputValue);

    var filteredData = tableData.filter(ufodata => ufodata.datetime === inputValue);
    console.log(filteredData);
    
    tbody.html("");


    filteredData.forEach(function(ufo) { //loop through each report in data
        console.log(ufo);
        var row = tbody.append("tr"); //append a tr attribute to create row for ufo values
        Object.entries(ufo).forEach(function([key, value]) {  //get the key and values of each category in a ufo sighting
        console.log(key, value);
        //Append a cell to the row for each value
        var cell = row.append("td"); //append td to page to add the value
        cell.text(value); //adds the value to the page
        });
    });

}


// show full table again
//needs to add if statement or another code






