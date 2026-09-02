// objects assignment

// Section-1 working with Object


//create a user objects

// let user = {
//     name:"sameer",
//     email:"example@gmail.com",
//     role: "developer",
// };
// console.log(user);


//Access objects properties using dot notation

// const products = {
//     name:"laptop",
//     price:25000,
//     model:"dell latitude 5410",
// }

// console.log(products.name);
// console.log(products.price);



//Access objects properties using bracket notation

// const user = {
//     name: "sameer",
//     email: "example@gmail.com",
//     role: "developer",
// };
// console.log(user["name"]);
// console.log(user["role"]);


// Dynamic property access
//Store a property name in a variable and use bracket notation to access that property from an object.

// const user = {
//     name: "sameer",
//     email: "example@gmail.com",
//     role: "developer",
// };
// const key = "name";
// console.log(user[key]);


// Update an object property

// let user = {
//     name: "sameer",
//     email: "example@gmail.com",
//     role: "developer",
// };

// user.role = "ai engineer"
// console.log(user);



//  Add a New Property

// Create a profile object containing name and email. Add a new property named isLoggedIn with the value true.

// let user = {
//     name: "sameer",
//     email: "example@gmail.com",
// };

// user.isLoggedIn = true;
// console.log(user);


// second example

// let user = {
//     userName :"sameeonyx",
//     password:"hd ddu jdwhw",
// };
// user.isSubscribed = true;
// console.log(user);


// Section-2 objects Keys,Values and entries 

//Get object keys using.Keys() to get all property names

// const user = {
//     name: "sameer",
//     email: "sameer@example.com",
//     role: "developer",
// };

// console.log(Object.keys(user));


//Get objects values using obects.values 

// const user = {
//     name: "sameer",
//     email: "sameer@example.com",
//     role: "developer",
// };

// console.log(Object.values(user));



//Get objects entries (key-value pairs)

// const setting = {
//     theme:"dark",
//     language:"hinglish",
//     notification:"true"
// };
// console.log(Object.entries(setting));



// display objects entries 

// Create a user object containing name, email, and role. Use object destructuring to extract name and email into separate variables.

// const user = {
//     name: "sameer",
//     email: "sameer@example.com",
//     role: "developer",                  // need to re learn
// };

// Object.entries(user).forEach(function(entry) {
//     console.log(entry[0] + ": " + entry[1]);
// });


// Section-3 Destructuring and shorthand properties 

// objects destructuring

// const user = {
//     name: "Rahul",
//     email: "rahul@example.com",
//     role: "developer"
// };

// const { name, email } = user;

// console.log(name);
// console.log(email);



// Destructructring with remaing 

// const products = {
//     name :"Laptop",
//     price:50000,
// };

// const {name : productName} = products
// console.log(productName);



// create an objects using shorthand properties 

// const name = "sameer";
// const email = "sameer@exapmle.com";
// const role = "developer";


// const user = {
//     name,
//     email,
//     role,

// };
// console.log(user);



//Destructive function Parameters

//  function displayUser({user,email}){
//     console.log(user);
//     console.log(email);

//  }

//  displayUser({
//     user:"sameer",
//     email:"sameer@example.com"
//  });



//spread and rest 

// copy an object using spreads 

// const user = {
//     name:"sameer",
//     age:20,
// };

// const userCopy = {...user};

// console.log(userCopy);


// Update an objects using spreads 

// const user = {
//     name: "sameer",
//     role: "developer",
// };

// const userUpdate = { ...user, role: "ai engineer" }

// console.log(user);
// console.log(userUpdate);


// Combine two Array using Spread

// const frontEnd = ["HTML", "CSS", "JavaScript"]; 
// const backEnd = ["Node.js", "Express"]; 

// const fullStack = [...frontEnd,...backEnd];
// console.log(fullStack);



// Rest parameters

// function showSkills(name,mernstack,aiEngineering){
//     console.log(name);
//     console.log(mernstack);
//     console.log(aiEngineering);             // wrong method need to improvement 

// };

// showSkills("sameer","...skills");


// Here's are solution 

// function showSkills(user,...skills){
//     console.log("name:",user);
//     console.log("teckStacks:",...skills);
    
// };
// showSkills("sameer","mernSTack","aiEngineering");











