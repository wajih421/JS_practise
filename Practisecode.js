// Variables — var, let, const

var myCity = "Rawalpindi";

let myAge = 21;
myAge = 22;

const PI = 3.14159;

console.log("My city is:", myCity, "current age:", myAge, "PI value (unchanged):", PI);



// Data Types

let name = "Ahmed";
let age = 20;
let isStudent = true;
let score = null;
let address;
let userId = Symbol("id");

console.log("Type of name:", typeof name);
console.log("Type of age:", typeof age);
console.log("Type of student flag:", typeof isStudent);
console.log("Type of score:", typeof score, "(this one is weird in JS)");
console.log("Type of address:", typeof address);



// Type Conversion

let numString = "42";
let converted = Number(numString);
console.log("Converted string to number:", converted, typeof converted);

let num = 99;
let str = String(num);
console.log("Converted number to string:", str, typeof str);

console.log("Empty string to number:", Number(""));
console.log("Invalid string to number:", Number("hello"));

console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean("hello"));
console.log(Boolean(1));



// Strings

let fullName = "  Hitesh Choudhary  ";
console.log("Trimmed name:", fullName.trim());

let greeting = "hello world";
console.log("Uppercase version:", greeting.toUpperCase());
console.log("Contains 'world':", greeting.includes("world"));

let sentence = "I love Java";
console.log("Updated sentence:", sentence.replace("Java", "JavaScript"));

let lang = "JavaScript";
console.log("Slice result:", lang.slice(0, 4));

let student = "Ali";
let subject = "JavaScript";
console.log(`${student} is currently learning ${subject}`);



// Numbers & Math

let price = 9.99;
console.log("Fixed price:", price.toFixed(1));

console.log("Round:", Math.round(4.6));
console.log("Floor:", Math.floor(4.9));
console.log("Ceil:", Math.ceil(4.1));
console.log("Absolute value:", Math.abs(-15));

console.log("Power result:", Math.pow(2, 10));
console.log("Square root:", Math.sqrt(144));

let random = Math.floor(Math.random() * 10) + 1;
console.log("Random number generated:", random);



// Dates

let today = new Date();
console.log("Full date:", today.toString());
console.log("Year:", today.getFullYear());
console.log("Month:", today.getMonth() + 1);
console.log("Day of month:", today.getDate());
console.log("Day index:", today.getDay());
console.log("Hours:", today.getHours());
console.log("Minutes:", today.getMinutes());

let birthday = new Date(2004, 0, 15);
console.log("Birthday date:", birthday.toDateString());



// Arrays

let fruits = ["apple", "banana", "mango", "orange"];

console.log("First fruit:", fruits[0]);
console.log("Total fruits:", fruits.length);

fruits.push("grapes");
fruits.unshift("strawberry");
fruits.pop();
fruits.shift();

console.log("Updated fruit list:", fruits);
console.log("Includes mango:", fruits.includes("mango"));
console.log("Index of banana:", fruits.indexOf("banana"));

console.log("Joined string:", fruits.join(", "));

let someFruits = fruits.slice(1, 3);
console.log("Sliced array:", someFruits);

fruits.splice(1, 1);

let moreFruits = ["kiwi", "peach"];
let allFruits = [...fruits, ...moreFruits];

let [first, second, ...rest] = allFruits;
console.log("First:", first, "Second:", second, "Rest:", rest);



// Array Methods

let numbers = [1,2,3,4,5,6,7,8,9,10];

numbers.forEach(num => console.log("Number:", num));

let doubled = numbers.map(n => n * 2);
let evenNumbers = numbers.filter(n => n % 2 === 0);

let total = numbers.reduce((a, c) => a + c, 0);

let firstBigNum = numbers.find(n => n > 6);

console.log("Total sum:", total);



// Objects

let person = {
name: "Sara",
age: 22,
city: "Lahore",
greet: function () {
return `Hi, I'm ${this.name}`;
}
};

console.log("Name:", person.name);
console.log("City:", person["city"]);
console.log("Greeting:", person.greet());

person.email = "umuhammadwajih@gmail.com";

delete person.isEnrolled;

let { name: personName, age: personAge, city } = person;

let updatedPerson = { ...person, city: "Karachi" };

console.log("Object keys:", Object.keys(person));
console.log("Object values:", Object.values(person));
console.log("Object entries:", Object.entries(person));



// Functions

function addNumbers(a,b){
return a+b;
}

const multiply = function(a,b){
return a*b;
}

const subtract = (a,b) => a-b;

const greetUser = (name="Guest") => `Hello ${name}`;

const sumAll = (...nums) => nums.reduce((a,n) => a+n, 0);

(function(){
console.log("IIFE executed immediately");
})();



// Scope

let globalVar = "global";

function checkScope(){
let functionVar = "inside function";

console.log("Global variable:", globalVar);
console.log("Function variable:", functionVar);
}



// Closure

function makeCounter(){
let count = 0;

return function(){
count++;
console.log("Counter value:", count);
}
}

const counter = makeCounter();

counter();
counter();
counter();



// Loops

for(let i=0;i<5;i++){
process.stdout.write(i+" ");
}

let count = 0;
while(count<3){
count++;
}

let colors = ["red","green","blue"];

for(let color of colors){
console.log("Color:", color);
}





let user = {profile:{bio:"Dev"}};

console.log("Bio:", user?.profile?.bio);
console.log("Missing value:", user?.address?.city);

let username = null;

console.log("Final user:", username ?? "Anonymous");


console.log("Type of null:", typeof null);

console.log("Is null equal to undefined?", null == undefined);
console.log("Is null strictly equal to undefined?", null === undefined);




console.log("GitHub test by Wajih");
