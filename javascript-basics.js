// This is a comment! It requires 2 slashes.

// DECLARING VARIABLES
// The first time we use a variable we have to declare it. This is a way of indicating what sort of variable we want(there are many)
// We have special key words for declaring variables - let us control how those variables are used >> let and const

// LET Keyword
// let initial decleration look like this
let greeting = "Salutations, friends!";

// Once it has been decalred we can reassign it:
greeting = "Hey handsome, coding all by yourself?";

// CONST Keyword
// Once decalred it cannot be changed
const pi = 3.141592653589793;

// WHAT NOT TO DO
// old way of declaring varibales that has been replaced by the above, should not be used! It still exhist becasue of backwards compatibility
// this decleration keyword doesn't interact with scape the way we are used to
var cowName = "Bessy";

// What if you don't declare?
// It won't throw an error but it is bad practice - the values you assign like this wont behave predictably
someVarName = "Any value"; 

// NAMING CONVENTIONS
// Camel Case - The convention in JavaScript
let isBirthday = true;

// Snake Case - The convention in Python
// is_birthday = True


// SEMICOLONS
let someVar = "Hello world!";
// Whitespace here

    let otherVar = "wow!"; // Indented! 

// This runs exactly the same as above 
let someVar = "Hello world!"; let otherVar = "wow!";

// DATATYPES 
// STRINGS
let name = "Alexander";
let greeting = 'Hello';

// You can combine strings using the + operator
let message = greeting + " " + name; // "Hello Alexander

// TEMPLATE LITERALS
// better way to combine string and are like pythin f-strings(use them to insert variables into stings)
// They use backticks instead!
let message = `${greeting} ${name}`; // "Hello Alexander"

// NUMBERS
// same as python - can be integer or float and you can perform operator on them
let x = 5;
let y = 2.5;
let sum = x + y; // 7.5
let product = x * y; // 12.5

// BOOLEANS
// Same as python except no capitals
let isBirthday = true;
let isWeekend = false;