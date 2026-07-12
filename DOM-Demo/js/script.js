// Access uisng getElementById()
// let heading = document.getElementById("Heading");
// console.dir(heading);
// console.log(heading);   

// Access uisng getElementsByClassName()
// let headings = document.getElementsByClassName("Headings");
// console.dir(headings);
// console.log(headings);

// Access uisng getElementBytagName()
// let headingTag = document.getElementsByTagName("p");
// console.dir(headingTag);
// console.log(headingTag);

// Access using queryselector() and queryselectorAll()
// let heading1 = document.querySelector(".Headings"); //for accessing first element only like (id,class,tag)
// let heading2 = document.querySelectorAll(".Headings"); //for accessing all element like (id,class,tag) 
// console.dir(heading1);
// console.log(heading1);
// console.dir(heading2);
// console.log(heading2);


// parctice

// let h2 = document.querySelector("h2");
// console.dir(h2.innerText);

// h2.innerText = h2.innerText + " from Aaryan Bharvadiya";

let div = document.querySelectorAll(".box");
console.log(div[0]);

div[0].innerText = "Hello";



