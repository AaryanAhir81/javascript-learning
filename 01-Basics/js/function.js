function myFunction(){
    console.log("Hello this is function concept");
}

myFunction();

function myFunction1(msg){
    console.log(msg);
}

myFunction1("Hello");


// Two number sum using a function

function sum(a,b){
    console.log("Two number sum is: "+ (a + b));
}

sum(10,20);


// Arrow Function

const arrowsum = (a,b) =>{
    console.log(a + b);
}

console.log(arrowsum(10,20));

const printmessage = () => console.log("Hello Message");


// ForEach Loop for Array - it is used when you want to perform anything on each array value

// let arr = [1,2,3,4,5];

// arr.forEach((val , idx) => {
//     console.log(val + 1 ,idx);
// });

let arr1= [1,2,3,4];

arr1.forEach((val) =>{
    let v=2
    console.log(val^v);

});
