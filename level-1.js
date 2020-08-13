// Level 1
// Question 1
var name = "Remi";

//Question 2
var person = {
  firstName: "Remi",
  lastName: "Steen",
};

//Question 3
var outOfStock = false;

if (outOfStock === true) {
  console.log("Out of stock");
} else {
  console.log("In stock");
}

//Question 4
var numbers = [1, 2, 3, 4, 5];

for (var i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

//Question 5
var counter = 15;
for (counter; counter <= 25; counter++) {
  console.log(counter);
}

//Question 6

var counter = 15;
for (counter; counter <= 25; counter++) {
  if (counter === 20) {
    console.log(counter);
  }
}

//Question 7
var ships = [
  {
    name: "Bulk Carrier",
    grossTons: 1524,
    onContract: true,
  },
  {
    name: "Spirit of Nansen",
    grossTons: 254872,
    onContract: false,
  },
];

for (var i = 0; i < ships.length; i++) {
  console.log(ships[i].grossTons);
  console.log(ships[i].onContract);
}

//Question 8

function whatIDontLike(animal) {
  console.log("I don't like " + animal);
}

whatIDontLike("snakes");

//Question 9
function subtractNumbers(num1, num2) {
  console.log(num1 - num2);
}

//Question 10

var myArray = [];

function addToArray(item) {
  myArray.push(item);
}

addToArray("Dog");
