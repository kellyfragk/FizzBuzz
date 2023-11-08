const readlineSync = require("readline-sync");

let userInput = 0;

//ensures user provides positive number
while (userInput <= 0) {
  userInput = readlineSync.question("Please provide a positive number ");
}

userInput = parseInt(userInput);

for (let i = 1; i <= userInput; i++) {
  let result = "";

  //conditions
  if (i % 3 === 0) {
    result = "Fizz";
  }
  if (i % 13 === 0) {
    result = result + "Fezz";
  }
  if (i % 5 === 0) {
    result = result + "Buzz";
  }
  if (i % 7 === 0) {
    result = result + "Bang";
  }
  if (i % 17 === 0 && result !== "") {
    result = result
      .match(/.{1,4}/g)
      .reverse()
      .join("");
  }

  // printing
  if (result !== "") {
    console.log(result);
  } else {
    console.log(i);
  }
}
