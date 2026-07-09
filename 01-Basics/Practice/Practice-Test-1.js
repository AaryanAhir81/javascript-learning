// 1. Check whether two variables have the same value and the same data type.

// let var1 = 10;
// let var1 = "10";

// if(var1 === var2)
// {
//     console.log("Yes,It has same value and datatype");
// }
// else
// {
//     console.log("No,It does not have same value and datatype");
// }

// 2. Write a program to determine if a number is positive, negative, or zero.

// let num = parseInt(prompt("Enter a number: "));

// if(num > 0)
// {
//     console.log(num+" is positive");
// }
// else if(num < 0)
// {
//     console.log(num+" is negative");
// }
// else{
//     console.log(num+" is zero");
// }

// 3. Print numbers from 1 to 10 using a loop.

// for(let i=1; i<=10; i++)
// {
//     console.log(i);
// }

// 4. Print all odd numbers between 1 and 20.

for(let i=1; i<=20; i++){
    if(i%2 !==0){
        console.log(i);
    }
}

// 5. Find the sum of the first 10 natural numbers.

let sum=0;
for(let i=1; i<=10; i++){
    sum += i;
}

console.log("The sum of the first 10 natural number is: "+sum);

// 6. Write a function to find the square of a number.

function square(num){
    console.log(`Square of ${num} is ${num * num}`);
}

square(5);

// 7. Write a function to find the cube of a number.

function cube(num){
    console.log(`Cube of ${num} is ${num * num * num}`);
}

cube(5);

// 8. Write a function that returns the larger of two numbers.

function largenum(a,b){
    return a > b ? console.log(a+" is larger than "+b) : console.log(b+" is larger than "+a);
}

largenum(1050,1060);


// 9. Write a function that checks whether a number is even or odd.

// let num = prompt("Enter a number:");

// const check = (num) => {
//     if (num % 2 === 0) {
//         console.log("Even");
//     } else {
//         console.log("Odd");
//     }
// };

// check(num);

// 10. Count the number of vowels in a given string.

// let char = prompt("Enter a character: ")
// let count = 0;

// for(let val of char){
// if(val === "a" || val === "e" || val === "i" || val === "o" || val === "u" )
// {
//     count++;
// }
// }

// console.log("The total number of vowels: " + count);

// 11. Find the length of a string without using manual counting.

// let charLen = prompt("Enter a string:");

// console.log(`${charLen} length is: ${charLen.length}`);


// 12. Convert a string to uppercase.
  
// let str = prompt("Enter a string: ");

// console.log(str.toUpperCase());

// 13. Reverse the string

// let string1 = "Aaryan";

// for(let i=0; i<)


// 14. Find the largest element in an array.

// let arr1 = [1, 5, 3, 7];

// let largest = arr1.reduce((max, val) => {
//     return val > max ? val : max;
// });

// console.log(largest);
