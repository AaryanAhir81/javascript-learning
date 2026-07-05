// 01_print the even number from 0 to 100
// for(let i=0; i<=100; i++){
//     if(i % 2 !== 0){
//         console.log("The number is:"+i);
//     }
// }

// 02_get the user input and guess the game number
// let gamenum = 25;
// let user = prompt("Enter a number to guess the game number:");
// while(user != gamenum){
//     user = prompt("you guess wrong number to guess the game number:"); 
//     }
// console.log("You won the game");

// 03_print the revserse number from 10 to 0
// for(let i=10; i>=0; i--){
//     console.log("The number is: "+i);
// }


// 04_Take a number from the user and print its table.
// let num = prompt("Enter s number to print its table: ");

// for(let i=1; i<=10; i++){
//     mul = num * i;
//     console.log(num + " x "+ i + " = " + mul);
// }


// 05_prompt from user to enter their full name and generate the username for them based on the input, start the username with @,followed by their  full name and ending with the fullname length.

let username = prompt("Enter your full name: ");
console.log(`Your username is: @ ${username}${username.length}`);