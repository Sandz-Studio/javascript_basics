// This is a function declaration
function sayHello() {
    console.log("Hello!");
};

// This is a function call
sayHello(); // "Hello!"

// This is a function declaration with a parameter
function sayHelloTo(name) {
console.log(`Hello ${name}!`);
};

// This is a function call with an argument
sayHelloTo("Alexander"); // "Hello Alexander!"





// RETURNING
function addTwoNumbers(num1, num2) {
    return num1 + num2;
};

// const result = addTwoNumbers(1, 2);
// console.log(result); // 3


// DECLARATION FUNTION
// ^declaration is shown above


// EXPRESSION FUNCTION
// This is a function expression
const sayGoodbye = function() {
    console.log("Bye");
};

// This is a function call
sayGoodbye(); // "Bye"



// ARROW FUNCTIONS 
// This is an arrow function
const sayGreeting = () => {
    console.log("Welcome to SheCodes");
};
// This is a function call
sayGreeting(); // "Welcome to SheCodes"

// This is an arrow function with parameters
const addNumbers = (num1, num2) => {
    return num1 + num2;
};
// // This is a function call
// const result = addNumbers(1, 2);
// console.log(result); // 3



// Functions Are First Class Citizens
// pass functions as arguments to other functions, and you can return functions from other functions.
// const add = (num1, num2) => {
//     return num1 + num2;
// };
// const doSomeMath = (num1, num2, mathFunction) => {
// return mathFunction(num1, num2);
// };
// const result = doSomeMath(1, 2, add);
// console.log(result); // 3





// In class exercise
// ARROW FUNCTION - SUBTRRACT
const subtractNumbers = (num1, num2) => {
    return num1 - num2;
};
// const result = subtractNumbers(8, 2);
// console.log(result); // 6


// ARROW FUNCTION - DIVIDE
const divideNumbers = (num1, num2) => {
    return num1/num2;
};
// const result = divideNumbers(8, 2);
// console.log(result); // 4


// ARROW FUNCTION - MULTIPLY
const multiplyNumbers = (num1, num2) => {
    return num1*num2;
};
const result = multiplyNumbers(8, 2);
console.log(result); // 16