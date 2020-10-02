/////////////////////////////////////
// testing stuff and messing around//
/////////////////////////////////////

// VARIABLES

let firstName = "Marcos";
let surname = "Madeira";
let age = 26;
let country = "Brazil";
let occupation = "Engineer";

console.log(firstName);
console.log(surname);
console.log(age);
console.log(country);
console.log(occupation);

const fullName = `${firstName} ${surname}`;

const description = `Hi, my name is ${fullName}, I am a ${age} year old ${occupation} living in ${country}`;

console.log(description);

///////////////

if (age >= 18) {
  console.log("Welcome to Fazendinha");
} else {
  console.log("You're not of legal age, step away");
}

///////////////

//Simple math

let a = 5;
let b = 2;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** 2);
console.log(b ** 2);

///////////////

let finalResult;

let evenOddResult;

let number1 = 4;
let number2 = 2;
let number3 = 10;
let number4 = 2;

let addFirstTwo = number1 + number2;
let subtractLastFromThird = number3 - number4;

finalResult = addFirstTwo * subtractLastFromThird;
evenOddResult = finalResult % 2;

console.log(finalResult);
console.log(evenOddResult);

if (finalResult === 48) {
  console.log("Yes, well done! The result is 48.");
} else {
  console.log("No it is " + finalResult);
}

if (finalResult % 2 === 0) {
  console.log("The final result is even!");
} else {
  console.log("The final result is odd! Hmm...");
}
