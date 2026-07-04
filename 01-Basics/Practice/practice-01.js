// 01_Get input from user and check that number is multiple of 5
// let num = prompt("Enter a number: ");

// if(num % 5 === 0){
//     console.log("It is multiple of 5: " + num);
// }
// else{
//     console.log("It is not multiple of 5: " + num);
// }

// 02_We have given a score of student and we have assign grade based on score
// let score = prompt("Enter your score:");

// if( score >= 80 && score <= 100){
//     console.log("Grade: A");
// }else if(score >= 70 && score <= 89){
//     console.log("Grade: B");
// }else if(score >= 60 && score <= 69){
//     console.log("Grade: C");
// }else if(score >= 50 && score <= 59){
//     console.log("Grade: D");
// }else if(score > 0 && score <= 49){
//     console.log("Grade: F");
// }else{
//     console.log("Invalid score");
// }

// 03_Check whether a number is positive.
// let number=prompt("Enter a number: ");

// if(number >= 0){
//     console.log("The number is positive: " + number);
// }
// else{
//     console.log("The number is negative: " + number);
// }

// 04_Check whether a person is eligible to vote.
// let person = prompt("Enter your age: ");
 
// if(person >= 18){
//     console.log("It is eligible to vote: " + person);
// }
// else{
//     console.log("It is not eligible to vote: " + person);
// }

// 05_Check whether a person is a child, teenager, adult, or senior citizen.

// let person = prompt("Enter your age: ");

// if(person >=0 && person <= 12 ){
//     console.log("The person is a child: " + person);
// }else if(person >= 13 && person<= 19){
//     console.log("The person is a teenager: " + person);
// }else if(person >= 20 && person <= 59){
//     console.log("The person is an adult: " +person);
// }else{
//     console.log("The person is a senior citizen: " +person);
// }

// 06_Calculator using switch
// let user= prompt("Enter a operator(+,-,*,/): ");
// let num1= Number(prompt("Enter first number: "));
// let num2= Number(prompt("Enter second number: "));

// switch(user){
//     case "+":
//         console.log("Addition: " +(num1 + num2));
//         break;
//     case "-":
//         console.log("Substraction: " +(num1 - num2));
//         break;
//     case "*":
//         console.log("Multiplication: " +(num1 * num2));
//         break;
//     case "/":
//         console.log("Division: " +(num1 / num2));
//         break;
//         default:
//             console.log("Invalid Operator");
// }

// 07_Shopping Discount Calculator

const totalAmount= Number(prompt("Enter a total amount:"));
console.log("Total Amount is: " + totalAmount);

if(totalAmount >= 5000){
    let discount = 20;
    console.log("Discount is:" +discount);
    let discountAmount = (totalAmount * 20) / 100; 
    let finalAmount = totalAmount - discountAmount;
    console.log("Discount total amount is:" + finalAmount);
}else if(totalAmount >= 3000 && totalAmount < 5000){
    let discount = 20;
    console.log("Discount is:" +discount);
    let discountAmount = (totalAmount * 20) / 100; 
    let finalAmount = totalAmount - discountAmount;
    console.log("Discount total amount is:" + finalAmount);
}else if(totalAmount >= 1000 && totalAmount < 3000){
    let discount = 20;
    console.log("Discount is:" +discount);
    let discountAmount = (totalAmount * 20) / 100; 
    let finalAmount = totalAmount - discountAmount;
    console.log("Discount total amount is:" + finalAmount);
}
