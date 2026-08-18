// // Access uisng getElementById()
// // let heading = document.getElementById("Heading");
// // console.dir(heading);
// // console.log(heading);   

// // Access uisng getElementsByClassName()
// // let headings = document.getElementsByClassName("Headings");
// // console.dir(headings);
// // console.log(headings);

// // Access uisng getElementBytagName()
// // let headingTag = document.getElementsByTagName("p");
// // console.dir(headingTag);
// // console.log(headingTag);

// // Access using queryselector() and queryselectorAll()
// // let heading1 = document.querySelector(".Headings"); //for accessing first element only like (id,class,tag)
// // let heading2 = document.querySelectorAll(".Headings"); //for accessing all element like (id,class,tag) 
// // console.dir(heading1);
// // console.log(heading1);
// // console.dir(heading2);
// // console.log(heading2);


// // parctice

// // let h2 = document.querySelector("h2");
// // console.dir(h2.innerText);

// // h2.innerText = h2.innerText + " from Aaryan Bharvadiya";

// // let div = document.querySelectorAll(".box");
// // console.log(div[0]);

// // div[0].innerText = "Hello";

// // DOM Manipulation using attribute
// // 1-getAttribute
// let get = document.querySelector("div");

// console.log(get);

// // let val = get.getAttribute("class");
// // console.log(val);

// // 2-setAttribute(attr,val)

// let val1 = get.setAttribute("class","newclass");

// let getdemo = document.querySelectorAll("div");
// console.log(getdemo);


// console.dir(window.document);
// console.log(document.body.style.backgroundColor = "red");
// console.log(document.body.childNodes[1].style.innerText = "Hello World");

// let heading = document.getElementById("Paragraph");
// let heading = document.getElementById("Heading");
// console.log(heading);

// let classheading = document.getElementsByClassName("H1");
// console.log(classheading);


// let button = document.getElementById("Button");
// console.dir(button);
// console.log(button);

let h2 = document.querySelector("h2");
h2.innerText = h2.innerText + " From Aaryan Bharvadiya";

console.log(h2.innerText);


let divs = document.querySelectorAll(".Boxes");

console.log(divs[0].innerText = "Hello");
console.log(divs[1].innerText = "World");
console.log(divs[2].innerText = "!");
