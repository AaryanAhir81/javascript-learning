// 1. Create an HTML heading with id="title". Use JavaScript to change its text to "Hello JavaScript".
// let title = document.querySelectorAll("#title").innerText = "Hello Javacsript";
// console.log(title);

// 2. Create a paragraph with id="message". Change its text using JavaScript.
// let message = document.querySelector("#message").innerText = "This is a paragraph changed by JavaScript.";
// console.log(message);

// 3. Create a button with id="button". When clicked, change the heading text.
// let button = document.querySelector("#button");

// if(isClicked){
//     title = "Hello Javascript"
// }

// 4. Create a paragraph and change its style.color to red using JavaScript.
// let pstyle = document.querySelector("#message");

// pstyle.style.color = "red";

// console.log(pstyle);

// 5. Create a heading and change its style.fontSize to 30px.
// let hstyle = document.querySelector("#title");

// hstyle.style.fontSize = "30px";

// console.log(hstyle);
// console.dir(hstyle);

// 6. Create a <div> with some text. Change its background color using JavaScript.
// let divstyle = document.querySelector("#Box-1");
// divstyle.style.cssText = "color: white; background-color: black;";

// console.dir(divstyle);  

// 7. Create an input box. Get the value entered by the user and display it inside a paragraph.
// let input = prompt("Enter anything you want..");
// console.log(input);

// let pacc = document.querySelector("#message");
// pacc.textContent = input;

// console.log(pacc);

// 8. Create two paragraphs. Change the text of the second paragraph using JavaScript.
// let Ptwo = document.querySelector("#message-2");
// Ptwo.innerText = "This ParaGraph-2 is changed";

// console.log(Ptwo);

// let demo = document.querySelector("#Box-1");

// console.log(demo.innerHTML = "<div> Hello </div>");


// --------------------------DOM Part-2-----------------------------------

// 1. create a new button element. Give it a text "click me", background color of red & text color of white 
// insert the button as the first element inside the body tag

// let newBtn = document.createElement("button");

// newBtn.innerText = "Click Me";
// newBtn.style.cssText = "background-color: red; color: white;";

// console.log(newBtn.style);

// let b = document.querySelector("body");

// b.prepend(newBtn);

// 2. Create an image and use JavaScript to change its src.
// let img = document.querySelector("#img-1");
// img.setAttribute("src","/img/Demo-2.jpg");
// console.log(img);

// 3. Create a paragraph and check/change its innerHTML.

// let innerp = document.querySelector("#inner-p");
// innerp.innerHTML = "<i>Hello innerHTML</i>";
// console.log(innerp);
//