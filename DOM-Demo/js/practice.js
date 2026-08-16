// const display = document.getElementById("display");

// function appendValue(value){
//     display.value += value;
// }

// function clearDisplay(){
//     display.value = "";
// }

// function backspace(){
//     display.value = display.value.slice(0,-1);
// }

// function calculate(){
//     try{
//         display.value = eval(display.value);
//     }catch{
//         display.value = "Error";
//         }
// }


let string = prompt("Enter the string: ");
let rev="";


for(let i=string.length - 1; i>=0 ; i--){
    rev = rev + string[i];
}

console.log(rev);
if(rev == string){
    console.log("It is palindrome");
}
else
{
    console.log("It is not palindrome");
}

let count = 0;

for(val of string){
    if(val == "a" | val == "i" | val == "o" | val == "u" | val == "e"){
       count++;
    }
}

console.log(count);