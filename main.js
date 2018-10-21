"use strict";

function renderCoffee(coffee) {
    var html = '<div class="col-8 coffee">';
    // html += '<div>' + coffee.id + '</div>';
    html += '<div class="row badge badge-pill">' + coffee.name + '</div>';
    html += '<span class="badge badge-pill badge-light">'+ coffee.roast + '</span>';
    html += '</div>';
    return html;
}
function renderCoffees(coffees) {
    var html = '';
    for(var i = 0; i <= coffees.length - 1; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

// filters coffees at the top
function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        } else if (selectedRoast === "All")
            filteredCoffees.push(coffee)
    });
    div.innerHTML = renderCoffees(filteredCoffees);
}

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'}
    ];

var div = document.querySelector('#coffees');
// var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
var searchFilter = document.querySelector('#coffeeName'); //search btn
// var addCoffeeButton = document.querySelector('addCoffee'); // add coffee

div.innerHTML = renderCoffees(coffees);

//function to search New Coffee
function updateCoffeesSearch(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = searchFilter.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.name.toLowerCase().includes(selectedRoast.toLowerCase()) === true) {
            filteredCoffees.push(coffee);
        } else if(selectedRoast === " "){
            filteredCoffees = coffees;
        }
    });
    div.innerHTML = renderCoffees(filteredCoffees);
}

//ADDED EVENT LISTENER TO SEARCH FILTER//

searchFilter.addEventListener("input", function(e) {
    updateCoffeesSearch(e);
});



// function to add new coffee and roast to current coffee list
function addNewCoffee() {
    var addNewRoast = document.getElementById("selectNewCoffee");
    var newCoffee = document.getElementById("addSecondCoffee");
    var updatedCoffee = {
        name: newCoffee.value,
        roast: addNewRoast.value
    };
    coffees.push(updatedCoffee);
    // div.innerHTML = renderCoffees(coffees);
}
addNewCoffee();


// variables for buttons
var addCoffeeButton = document.querySelector("#submit2");


roastSelection.addEventListener("change", updateCoffees);
// Add new coffee submit button
addCoffeeButton.addEventListener('click', addNewCoffee);

// submitButton.addEventListener('click', )//SUBMIT TO BACKEND


