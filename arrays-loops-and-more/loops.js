/**
* The for loop has three parts, the initialisation, the condition and the
increment
* The initialisation runs once at the start of the loop "let number = 0;". Here
were setting the starting number to 0.
* The condition is checked before each iteration of the loop "number < 10;".
Here were checking if the number is less than 10.* The increment runs after each iteration of the loop "number++". Here were
incrementing the number by 1.
*/

// for (let number = 0; number < 10; number++) {
//     console.log(number);
// }

/** Use for loop to loop over an array. We can use the length property of the array to check how many items are in the array. We can then use the index of
the array to access each item in the array
*/

// const numbers = [1, 2, 3, 4, 5];

// for (let index = 0; index < numbers.length; index++) {
//     console.log(numbers[index]);
// }

/**
 * Another way to write a for loop is using the of keyword. This is a newer way of
writing a for loop in JavaScript, and is closer to what we're used to from Python. It is
easier to read and less prone to errors. Update your loops.js file with the following
code and run it again.
*/

const countries = ["Australia", "New Zealand", "Japan", "Indonesia"];

for (const country of countries) {
    console.log(country);
}