// Named Parameters
// write a function that takes two named parameters:
// print each named parameter,
// then return the parameters added together

function functionWithTwoParams(x, y) {
  console.log("first param is:", x);
  console.log("second param is:", y);
  return x + y;
}
// invoke the function and pass in two numbers
functionWithTwoParams(5, 10);

//What prints? first param is: 5    second param is: 10
//What returns? 15

// invoke the function and pass in more than two numbers
functionWithTwoParams(5, 10, 15, 20);

//What prints? first param is: 5    second param is: 10
//What returns? 15 (function is only designed to return 2 params)

// invoke the function and pass in only one number
functionWithTwoParams(5);

//What prints?  first param is: 5    second param is: undefined
//What returns?  NaN

// change the function to set default values for the parameters

function functionWithTwoDefaultParams(x = 7, y = 8) {
  console.log("first param is:", x);
  console.log("second param is:", y);
  return x + y;
}

// again, invoke the function and pass in only one number
console.log(functionWithTwoDefaultParams(5));

//What prints? first param is: 5   second param is: 8
//What returns? 13

// Rest Operator
// add a rest operator to the function's parameters
// add a line to the function's body to print the value of the rest operator

// again, invoke the function and pass in more than two numbers
function functionWithRestParam(x, y, ...z) {
  console.log("first param is:", x);
  console.log("second param is:", y);
  console.log("rest param is z");
  return x + y;
}

functionWithRestParam(3, 7, 2, 15, 38);

//What prints?
//first param is: 3
//second param is: 7
//rest param is: [2, 15, 38]

//What returns? 10
