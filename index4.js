// Array in JavaScript 


//section-1 Basic Array operation

// create and display an Array

// let arr = ["apple","grapes","banana","mango","oranges"];

// console.log(arr);


// add an element using push 

// const arr = ["html","css"];
// const arr1 = arr.push("JavaScript");
// console.log(arr);


// remove an element using pop()

// let arr1 = ["HTML","CSS","JavaScript"];

// let arr2 = arr1.pop();

// console.log(arr1);


// Add Multiple Elements 

// let arr1 = ["html","css"];
// let arr2 = arr1.push("javaScript", "react");   //method-1
// console.log(arr1);


//method-2

// let arr1 = ["html","css"];
// arr1.push("javaScript", "react");
// console.log(arr1);



//Section-2 splice and slice

//remove an element using splice()

// let arr1 = ["html","css","javaScript", "React"];
// arr1.splice(1,1);
// console.log(arr1);


//Add an element using splice 

// let arr1 = ["html","javaScript"];
// arr1.splice(1,0,"css");
// console.log(arr1);


// replace an array using splice 

// let arr1 =["html","css","javaScript"];
// arr1.splice(2,1,"java");
// console.log(arr1);


// exract part of an array using splice 

// let arr1 = ["HTML", "CSS", "JavaScript", "React", "Node.js"];

// arr1.splice(4,1);
// arr1.splice(2,1);
// console.log(arr1);


//section-3 Searcing in Array 

// find index of an element

// let arr1 = ["HTML", "CSS", "JavaScript", "React"];
// console.log(arr1.indexOf("JavaScript"));


// find an object 

// let students = [
//     {
//         name: "sameer",
//         age: 19,
//     },
//     {
//         name: "saif",
//         age: 18,

//     },
// ]

// // let res = students.find((value) =>{
// //     return value.name == "sameer"


// // })

// let res = students.find(value => value.name = "sameer"); //shorthand
// console.log(res);


// find an index 

// let students = [{ name: "sameer",age: 19,},{ name: "saif",age: 18,},];

// let index = students.findIndex(value => value.name == "sameer");
// console.log(index);



// section-4 other array method

// flated a nested array 

// let arr1 = [1, 2, [3, 4]];
// console.log(arr1.flat(//depth));

// Flatten a Multi-Level Array 
// let arr1 = [1, [2, [3, 4]]];
//  console.log(arr1.flat(Infinity));


// display every element using forEeach

// let arr1 = ["apple", "grapes", "banana", "mango", "oranges"];

// let res = arr1.forEach((value) => {
//     console.log(value);
// });


// Display elements with their index

// let arr1 = ["HTML", "CSS", "JavaScript", "React"];

// let res = arr1.forEach((value, index) => {
//     console.log(index, value);

// });


// mix problem 

// let arr1 = ["HTML", "CSS", "JavaScript"];

// arr1.push("React");
// arr1.shift();
// console.log(arr1);




















