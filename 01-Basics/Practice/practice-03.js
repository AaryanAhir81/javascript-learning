// 01-Question
let companies = ["Boomberg","Microsoft","Uber","Google","IBM","Netflix"];
console.log(companies);

//Remove first company
console.log("Remove the first company: " +companies.splice(0,1));
console.log(companies)

//Remove Uber & Add ola in itd place
console.log("Removed ola and Add ola: "+ companies.splice(1,1,"Ola"));
console.log(companies);

//Add Amazon
console.log("Add amazon at the end: "+companies.splice(5,0,"Amazon"));
console.log(companies);

// 02-Question
// Library Book Management

let books = ["Java", "Python", "C++"];

console.log("Books are: " + books);

// -------------------
// Add a Book
// -------------------

let add = prompt("Enter a book name: ");

books.push(add);

console.log("After Adding: " + books);

// -------------------
// Remove Last Book
// -------------------

console.log("Before Removing: " + books);

let removedBook = books.pop();

console.log("Removed Book: " + removedBook);
console.log("After Removing: " + books);

// -------------------
// Count Total Books
// -------------------

let totalBooks = books.length;

console.log("Total Books: " + totalBooks);

// -------------------
// Print All Books
// -------------------

for (let i = 0; i < books.length; i++) {
    console.log("Book " + (i + 1) + ": " + books[i]);
}

// -------------------
// Search a book.
// -------------------

let search = prompt("Search: ")

for(let i=0; i<books.length; i++){
    if(books[i] === search){
        console.log("Book Found");
    }
}

