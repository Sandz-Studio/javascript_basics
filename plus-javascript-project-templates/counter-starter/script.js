function add() {
    // We gave the number element an id of number so we can use that to get the element
    let numberElement = document.getElementById("number");
    // We can use the innerText property to get the text inside the element
    let number = numberElement.innerText;
    number = parseInt(number) + 1;
    numberElement.innerText = number;
}

// function add(step) {
//     let numberElement = document.getElementById("number");
//     let number = numberElement.innerText;
//     number = parseInt(number) + step;
//     numberElement.innerText = number;
// }

// Updated add funtion to allow for user input value 
function add(step) {
    let numberElement = document.getElementById("number");
    let number = numberElement.innerText;
    number = parseInt(number) + parseInt(step);
    numberElement.innerText = number;
}

// function subtract(step) {
//     let numberElement = document.getElementById("number");
//     let number = numberElement.innerText;
//     number = parseInt(number) - step;
//     numberElement.innerText = number;
// }

// Updated subtract funtion to allow for user input value 
function subtract(step) {
    // console.log('Subtracting ' + step);
    let numberElement = document.getElementById("number");
    let number = numberElement.innerText;
    number = parseInt(number) - parseInt(step);
    numberElement.innerText = number;
}

function reset() {
    let numberElement = document.getElementById("number");
    numberElement.innerText = 0;
}

// HOMEWORK
// . If you finish all of the above, for extra bragging points try adding an input field, so
// instead of using your buttons, the user types in what number they want to
// add/subtract.


