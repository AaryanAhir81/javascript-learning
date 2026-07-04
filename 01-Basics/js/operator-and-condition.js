// ==============================
// JavaScript Operators & Conditions
// ==============================

// Variables
let a = 20;
let b = 5;
let name = "Aaryan";
let isStudent = true;

// ------------------------------
// Arithmetic Operators
// ------------------------------
console.log("Addition:", a + b);          // 25
console.log("Subtraction:", a - b);       // 15
console.log("Multiplication:", a * b);    // 100
console.log("Division:", a / b);          // 4
console.log("Modulus:", a % b);           // 0
console.log("Power:", a ** 2);            // 400

a++;
console.log("Increment:", a);             // 21

b--;
console.log("Decrement:", b);             // 4

// ------------------------------
// Assignment Operators
// ------------------------------
let x = 10;

x += 5;
console.log("+= :", x);                   // 15

x -= 3;
console.log("-= :", x);                   // 12

x *= 2;
console.log("*= :", x);                   // 24

x /= 4;
console.log("/= :", x);                   // 6

x %= 4;
console.log("%= :", x);                   // 2

// ------------------------------
// Comparison Operators
// ------------------------------
console.log(10 == "10");      // true
console.log(10 === "10");     // false
console.log(10 != 5);         // true
console.log(10 !== "10");     // true
console.log(10 > 5);          // true
console.log(10 < 5);          // false
console.log(10 >= 10);        // true
console.log(10 <= 5);         // false

// ------------------------------
// Logical Operators
// ------------------------------
let age = 20;
let hasID = true;

console.log(age >= 18 && hasID); // true
console.log(age < 18 || hasID);  // true
console.log(!hasID);             // false

// ------------------------------
// String Operator
// ------------------------------
console.log("Hello " + name);

// ------------------------------
// typeof Operator
// ------------------------------
console.log(typeof name);        // string
console.log(typeof age);         // number
console.log(typeof isStudent);   // boolean

// ------------------------------
// Ternary Operator
// ------------------------------
let result = age >= 18 ? "Adult" : "Minor";
console.log(result);

// ==============================
// CONDITIONAL STATEMENTS
// ==============================

// if
if (age >= 18) {
    console.log("You are eligible to vote.");
}

// if...else
let marks = 45;

if (marks >= 50) {
    console.log("Pass");
} else {
    console.log("Fail");
}

// else if
marks = 82;

if (marks >= 90) {
    console.log("Grade A");
} else if (marks >= 75) {
    console.log("Grade B");
} else if (marks >= 50) {
    console.log("Grade C");
} else {
    console.log("Fail");
}

// Nested if
if (age >= 18) {
    if (hasID) {
        console.log("Entry Allowed");
    } else {
        console.log("Bring your ID");
    }
}

// switch
let day = 2;

switch(day) {
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    default:
        console.log("Invalid Day");
}

// ==============================
// Real Login Example
// ==============================

let username = "Aaryan";
let password = "12345";

if (username === "Aaryan" && password === "12345") {
    console.log("Login Successful");
} else {
    console.log("Invalid Username or Password");
}