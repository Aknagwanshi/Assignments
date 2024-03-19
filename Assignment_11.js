// Variables and Data Types
let name = "John";
let age = 30;
let isStudent = false;
let fruits = ['apple', 'banana', 'orange'];
let person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30
};

// Conditionals
if (age >= 18) {
    console.log(name + ' is an adult.');
} else {
    console.log(name + ' is a minor.');
}

// Loops
console.log('Fruits:');
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// Functions
function greet(name) {
    return 'Hello, ' + name + '!';
}

console.log(greet(name));

// Example with more complex data types and conditionals
function checkPersonDetails(person) {
    if (person.age >= 18) {
        console.log(person.firstName + ' ' + person.lastName + ' is an adult.');
    } else {
        console.log(person.firstName + ' ' + person.lastName + ' is a minor.');
    }
}

checkPersonDetails(person);
