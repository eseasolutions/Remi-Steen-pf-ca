//Level 2

//Question 1
var counter = 15;
for (counter; counter <= 25; counter++) {
  if (counter % 2 == 0) {
    console.log(counter);
  }
}

//Question 2
var innerFunction = function () {
  console.log("I am a function");
};

function outerFunction(arg) {
  arg();
}

outerFunction(innerFunction);
