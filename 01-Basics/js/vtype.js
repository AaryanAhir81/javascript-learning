// ## To declare or define varible their three way
// 1)var: can be re-declared and updated
var age=24;
var age=25;
var age=30;

console.log(age);

// 2)let: can be updated but not re-declared
let fullName="Aaryan";
fullName="Aaryan Ahir";

console.log(fullName);

// 3)const: connot be upadted and re-declared
const country="India";
// country="USA"; it will give error
console.log(country);

// ###-Practice-01-###
// ## create a const variable "product" and print given information

const product = {
    title: "Sino Softech Pen",
    rating:4.5,
    offer:5,
    price:270,
};

console.log(product);