'use strict'; // prevents us from making common mistakes

let hasDriversLicense = false;
const passTest = true;
if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can Drive!");

// const interface = 'Audio'; // reserve word error

//* Functions - piece of code we can use multiple time

function logger() {
    console.log('Code Clean...');
}
logger(); // invoking a function

function fruitProcessor(apples, oranges) { // apples and oranges are parameters
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice; // return value
}
const output = fruitProcessor(5, 3); // 5 and 3 are arguments
console.log(output);

// function declaration (we can call these type of functions before declaration (hoisting))
function calcAge1(birthYear) {
    const currentYear = new Date().getFullYear();
    const age = currentYear - birthYear;
    return age;
}
const age = calcAge1(2006);
console.log(age);

// function expression (functions are values)
const calcAge2 = function (birthYear) {
    const currentYear = new Date().getFullYear();
    const age = currentYear - birthYear;
    return age;
}
const age2 = calcAge2(2010);
console.log(age2);

// Arrow Functions
const sum = (a, b) => a + b;
console.log(sum(34, 6));

const calcAge3 = (birthYear) => {
    const currentYear = new Date().getFullYear();
    const age = currentYear - birthYear;
    return age;
}
const age3 = calcAge3(2000);
console.log(age3);

const minutesToHours = (mins) => mins / 60;
console.log(minutesToHours(500).toFixed(2));

// function calling other functions
const factorial = (n) => {
    let fact = 1;
    for (let i = 1; i <= n; i++) {
        fact = fact * i;
    }
    return fact;
}
const combination = (n, r) => {
    return factorial(n) / (factorial(r) * factorial(n - r));
}
console.log(combination(9, 3));

//* Arrays

const friends = ['Ben', 'Chrish', 'Peter'];
console.log(friends);
console.log(friends.length);
console.log(friends[0]); // first element

const years = new Array(2001, 2002, 2003, 2004); // using new operator
console.log(years);
years.push(2005); // only primitives are not mutable using const
console.log(years);
years.pop();
console.log(years);
console.log(years[years.length - 1]); // last element

years.forEach(year => {
    console.log(year);
})
const array = [12, 23, 'Stokes', [34, 'Butter'], { age: 34 }, () => { console.log('function from an array') }];
console.log(array);
console.log(array[array.length - 2]);
console.log(array[3][1]);

console.log(calcAge1(years)); // NaN (cause (array - number) isn't fair
const ages = [];
years.forEach(elem => {
    ages.push(calcAge1(elem));
})
console.log(ages);

// Operations on arrays
const numbers = [34, 38, 56];
numbers.push(9); // add element at the end of the array
numbers.unshift(1); // add in the beginning
numbers.shift(); // remove the first element
numbers.pop(); // remove the last element
console.log(numbers);
console.log(numbers.indexOf(56)); // index of the element
console.log(numbers.includes(56)); // true or false

if (friends.includes('Ben')) {
    console.log('You got a friend named Ben');
}

//* Objects
const person = {
    name: 'Ashok',
    'last name': 'Sharma',
    age: 23,
    salary: 450000,
    city: 'Delhi',
    friends: ['Ramesh', 'Suresh', 'Abhishek'],
    hasDriversLicense: true,
}
console.log(person);
console.log(person.city); // using dot operator
console.log(person['salary']); // using bracket notation
console.log(person['last name']);
person.name = 'Mahesh'; // changing properties
console.log(person.name);
// adding new properties
person.country = 'India';
console.log(person.country);

console.log(person.friends['0']);
console.log(person.friends.length);

const interest = prompt('What do you wanna know about the person (name,age,job,salary,city,country)');
if (person[interest]) {
    console.log(person[interest]); // interest is already a string
} else {
    console.log(`You're trying to access information that doesn't exists`);
}

// Object Methods
const obj = {
    value: 45,
    sum: (a, b) => {
        return a + b;
    },
    multiply: function (a, b) {
        return a * b;
    },
    printValue: (value) => {
        console.log(`The value you given is ${value} and the value that obj holds is ${this.value}`);
    }
};
console.log(obj.sum(34, 34));
console.log(obj.multiply(34, 3));
obj.printValue(56);

//* Loops - to perform iterative tasks

// for loop
for (let i = 0; i < 5; i++) {
    console.log(`Welcome ${i}`);
}

const fruits = ['🍇', '🍇', '🍈', '🍉', '🍊', '🍋', '🍋‍🟩', '🍌', '🍍', '🥭', '🍎', '🍏', '🍐'];
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

const types = [];
for (let i = 0; i < array.length; i++) {
    types.push(typeof array[i]);
}
console.log(types);

// while loop
let i=0;
while(i<array.length){
    console.log(array[i]);
    i++;
}