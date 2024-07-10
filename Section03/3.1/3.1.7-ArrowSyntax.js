
// refactor the functions below into arrow syntax
// function declaration
function myNumberFunction() {
  return ((2 ** 2 + 3) % 4) * 14;
}

// arrow syntax
//concise body
const myNumberFunction = () => ((2 ** 2 + 3) % 4) * 14;

//block body
const myNumberFunction = () => {
 return ((2 ** 2 + 3) % 4) * 14;
}

// function declaration
function greet(name) {
  return `Hello, ${name}`;
}

// arrow syntax
//concise body
const greet = () => `Hello, ${name}`;

// function declaration
const timeOfDayGreet = function(name, timeOfDay) {
  return `Hello, $(name), good ${timeOfDay}`;
};

//concise body
const timeOfDay = (name, timeOfDay) => `Hello, ${name}, good ${timeOfDay}`;

//block body
const timeOfDayGreet = (name, timeOfDay) => {
  return `Hello, ${name}, good ${timeOfDay}`;
}
// arrow syntax

// function declaration
function tripleAndHalf(num) {
  let triple = num * 3;
  return triple / 2;
}

// arrow syntax
//concise body
const tripleAndHalf = (num, num2) {
  let triple = num * 3;
  return triple / 2;
}

// function declaration
function sumTwoNumbers(num1, num2) {
  let sum = num1 + num2;
  console.log(`The sum of your numbers is ${sum}.`);
  return sum;
}

// arrow syntax
//block body
const sumTwoNumbers = (num1, num2) => {
  let sum = num1 + num2;
  console.log(`The sum of your numbers is ${sum}.`);
  return sum;
}
