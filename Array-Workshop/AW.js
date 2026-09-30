// let arr1 = [1,2,3,4,5];
// let ip = prompt("Enter the value:");
// for(let i=0; i <= 5; i++)
// {
//     if(arr1[i] == ip){
//         console.log(ip,i);
//     }
// }
// console.log(arr1[i]);    
// counting length of array
// for(let i=1; i<=arr1.length; i++){
//     console.log(i);
// }

// let user = prompt("Enter the value:");
// let arr2 = []

// for(let i)
// console.log(arr2.push(user));

// let arr3 = [50,40,30,20,10];
// let t1;
// for(let i = 0; i < 5; i++){
//     for(let j = 0; j < 4; j++)
//         {
//         if(arr3[j] > arr3[j+1]){
//             t1 = arr3[j];
//             arr3[j] = arr3[j+1];
//             arr3[j+1] = t1;
//         }
//     }
// }
// console.log(arr3);
// let start = 0;
// let end = arr3.length;

// while(start < end){
//     temp = arr3[start];
//     arr3[start] = arr3[end];
//     arr3[end] = temp
//     start++;
//     end--;
// }

// for(let i = arr3.length;i >= 0; i++){
//     console.log(arr3[i]); 
// }

let row = prompt("Enter the row:");
let column = prompt("Enter the column:");
let array = [[],[]];

for(let i = 0; i<row; i++){
    for(let j = 0; i<column; j++){
        let user = prompt("Enter a value:");
        array[i][j].push(user);
        
    }
}

for(let i = 0; i<row; i++){
    for(let j = 0; i<column; j++){
        console.log(array[i][j]);
    }
}
