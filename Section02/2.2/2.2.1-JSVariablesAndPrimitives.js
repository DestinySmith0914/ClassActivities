// create a constant variable (const)
const myName = "Destiny";
// create a variable that can be reassigned (let)
let age;
// create three variables and assign them values of different data types (=)
let num = 25; //number
let str = "five"; //string
let cool = false; //boolean
// print the types of two variables that reference two different data types (typeof)
// TIP: console.log() prints a value in the console/terminal
console.log(typeof num); //number
console.log(typeof cool); // boolean
// change the value referenced by a variable (dynamic typing)
cool = true;
// print the type of the variable you just changed (typeof)
console.log(typeof cool); //boolean
// create variables and give them values to complete the sentences that will print  below.
// Which variables need to be created?
// What type of data needs to go in each variable?
let name = "Destiny";
let language = "JavaScript";
let weeks = 2;
let masterStatus = false;

console.log(
  "Hello, my name is " +
    name +
    ", and I am learning " +
    language +
    ". I have been practicing for only " +
    weeks +
    " weeks, so my status as a master is: " +
    masterStatus +
    "."
);
