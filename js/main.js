console.log("JavaScript Portion of the Test");

// Step 1: Write a multi-line comment detailing your name and student number

// Name: Nathan Marino
// Student number: 200527317

// Step 2: Create a block scoped, immutable variable that stores an empty array
const myArray = [];

// Step 3: Add the 3 people's names to the array
myArray.push("Nathan", "Nicholas", "Shaun");


// Step 4: Remove the second array item from the array

myArray.splice(1,1);
console.log(myArray);

// Step 5: Using array map, iterate over the array items and make them all uppercase. Store the result in a new, block scoped, mutable variable
let toUpper = myArray.map(function (item) {
    return item.toUpperCase();

});


// Step 6: Create an event listener that fires a callback function when the aside h2 is clicked. It should alert "Hello from Boo the World's Cutest Dog!";

const h2 = document.querySelector('aside').querySelector('h2');
h2.addEventListener("click", function () {
alert("Hello from Boo the World's Cutest Dog!");
});

