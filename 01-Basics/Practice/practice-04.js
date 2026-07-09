// using normal function
function checkvowels(word) {

    for (let ch of word) {

        if (ch == "a" || ch == "e" || ch == "i" || ch == "o" || ch == "u") {
            console.log(ch + " is a vowel");
        } else {
            console.log(ch + " is not a vowel");
        }

    }
}

checkvowels("aaryan");


// using arrow function
// const checkvowels1 = (word) =>
// {
//     for (let ch of word) {

//         if (ch == "a" || ch == "e" || ch == "i" || ch == "o" || ch == "u") {
//             console.log(ch + " is a vowel");
//         } else {
//             console.log(ch + " is not a vowel");
//         }

//     }
// };


const countvowels = (word) =>{
    let count = 0;
    for(let ch of word)
    {
        if(ch === "a" || ch === "e" || ch === "i" || ch === "o" || ch ==="u")
        {
            count++;
        }
    }
    // return count;
    console.log("Counted Vowels: "+count);
}
console.log(countvowels("Hello"));