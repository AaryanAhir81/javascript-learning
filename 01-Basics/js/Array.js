// let names = ["Aaryan","Jeet","Smit","Marmik"];
// for(let name of names){
//     console.log(name);
// }

// for(let i=0; i<names.length; i++){
//     console.log(names[i]);
// }

// let marks = [90,60,40,80,70];
// let totalmarks = 0;

// for(let mark of marks){
//     totalmarks += mark;
// }
// console.log("Average of marks:" + (totalmarks)/5);

// let prices = [250, 645, 300, 900, 50];

// for (let i = 0; i < prices.length; i++) {
//     let discount = prices[i] * 10 / 100;
//     prices[i] = prices[i] - discount;
// }

// console.log(prices);

// ### Array Methods

let names = ["Aaryan", "Jeet", "Smit"];


// push() -> Add element at the end
names.push("Marmik");
console.log("After push:", names);


// pop() -> Remove last element
let removed = names.pop();
console.log("Removed:", removed);
console.log("After pop:", names);


// concat() -> Join two arrays
let marvel = ["Thor", "Spiderman", "Ironman"];
let dc = ["Superman", "Batman"];

let heroes = marvel.concat(dc);
console.log("All Heroes:", heroes);


// unshift() -> Add element at the beginning
marvel.unshift("Shaktiman");
console.log("After unshift:", marvel);


// shift() -> Remove first element
let firstHero = marvel.shift();
console.log("Removed:", firstHero);
console.log("After shift:", marvel);


// slice() -> Copy part of an array (Original array does NOT change)
let numbers = [1,2,3,4,5,6,7,8,9,10];

let newArray = numbers.slice(2, 5);

console.log("Slice:", newArray);
console.log("Original:", numbers);


// splice() -> Remove/Add elements (Original array changes)
let num = [1,2,3,4,5,6,7,8,9,10];

// Start from index 3, remove 2 elements, add 11 and 12
num.splice(3, 2, 11, 12);

console.log("After splice:", num);



