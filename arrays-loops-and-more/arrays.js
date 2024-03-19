// ARRAYS
// Similar to lists in python

const names = ["Alexander", "Kate", "Ollie", "Angela"];
console.log(names[0]); // "Alexander"

const ages = [32, 30, 2, 0];
console.log(ages[2]); // 2

// We can get the length of an array using the length property
console.log(names.length); // 4

// We can add values to the end of an array using the push method
names.push("Rebecca");
console.log(names); // ["Alexander", "Kate", "Ollie", "Angela", "Rebecca"]

// We can remove values from the end of an array using the pop method
console.log(names); // ["Alexander", "Kate", "Ollie", "Angela", "Rebecca"]
names.pop();
console.log(names); // ["Alexander", "Kate", "Ollie", "Angela"]