// given array of marks ,filter out who scored 90+
let marks = [30,20,40,100,,110,10];

const scored = marks.filter((val) =>{
    return val >= 90;
});

console.log("Scored 90+ marks: "+scored);

//Take input from user and create an array of number from 1 to n

let user = prompt("Enter a number: ");

let arr=[];

for(let i=1; i<=user; i++){
    arr[i-1] = i;
}

console.log(arr);

// Reduce
const sum = arr.reduce((prev,curr) =>{
    return prev + curr;
});

console.log("Sum of array is: " + sum);

//find product

const product = arr.reduce((prev,curr) =>{
    return prev * curr;
})

console.log("Product of number: " + product);