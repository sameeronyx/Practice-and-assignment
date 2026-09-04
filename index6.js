// Map , filter and reduce assignment

// Section-1 Map() & immutability

// 1 . convert names to uppercase 1

// const arr = ["laptop", "mobile", "headphones"];

// // const arr1 = arr.map(function(product){
// //     return product.toUpperCase()


// // })

// // arrow
// const arr1 = arr.map(product => product.toUpperCase());

// console.log(arr1);



// 2. add a currency symbol to price

// let arr = [100,200,300];

// const withSymbol = arr.map( price => "$"+price);
// console.log(withSymbol);


// 3. Extract User name

//  const students = [
//     {
//         name:"sameer",
//         email:"sameer@google.com",
//     },
//     {
//         name:"saif",
//         email:"saif@yahoo.com",
//     }
//  ];

//  const extractStudents = students.map( user =>user.name);
// //  console.log(extractStudents);

// // const extractStudents = students.map(function(UserName){
// //     return UserName.name

// // });
// console.log(extractStudents);


// 4. update price

// let prices = [100,200,300];
// const newPrices = prices.map(price => (price*1.1).toFixed(0) );
// console.log(newPrices);


// Update Object Data Immutably

// let students = [
//     { name: "Rahul", role: "student" },
//     { name: "Priya", role: "student" }
// ];

// const newRole = students.map(user => ({ ...user, role: "developer" }));

// console.log(newRole);


// add a new property

// let productSpec = [
//     { name: "Laptop", price: 50000 },
//     { name: "Mouse", price: 500 }
//     ];

// const newFeature = productSpec.map(stocks=>({...stocks, instocks:"true"}));
// console.log(newFeature);
// console.log(productSpec); //(... ki wajah se original arr bch gya)



// Section-2 Map vs forEach

// 7. Display Technologies Using forEach()

// let arr1 = ["HTML", "CSS", "JavaScript"];
// arr1.forEach(lang => console.log(lang));

// 8 is same as 1


// 9. Format User Names Using map()

// let name = ["Rahul", "Priya", "Aman"];
// const userName = name.map(user => "User:" + user);
// console.log(userName);

// Section-3 filter()

// filter Available product

// let products = [
//     { name: "Laptop", inStock: true },
//     { name: "Mouse", inStock: false }
//     ] ;

// const avail = products.filter(stock => stock.inStock)
// console.log(avail);



//Filter User by role

// let candidate = [
//     {
//         name:"sameer",
//         role:"developer"
//     },
//     {
//         name:"anmol",
//         role:"student"
//     }
// ];

// const user = candidate.filter(select => select.role==="developer")
// console.log(user);



// . Filter Expensive Products

// let products = [
//     { name: "Mouse", price: 500 },
//     { name: "Keyboard", price: 1500 }
// ];

// const Price = products.filter(value => value.price > 1000);
// console.log(Price);



// Filter Active Users
// const users = [
//     { name: "Rahul", isActive: true },
//     { name: "Priya", isActive: false }
// ]
// const newUser = users.filter(function (username) {
//     return username.isActive === true;
// })
// console.log(newUser);


// section-4 reduce() and Accumulator Pattern 

//  Calculate the Total Cart Price

// let itemPrice = [100,560,240];

// const totalBill = itemPrice.reduce((acc , cv) => acc+cv ,0);
// console.log(totalBill);


// Count Total Products

// let Products = ["Laptop", "Mouse", "Keyboard"];

// const totalItem = Products.reduce((acc, cv)=> acc+1,0)
// console.log(totalItem);



//  Calculate Total Order Amount

// let Prices = [
//     { amount: 200 },
//     { amount: 270 },
//     { amount: 280 }
// ]

// const totalBill = Prices.reduce((acc , cv ) => acc+cv.amount ,0);
// console.log(totalBill);



//  Create a Comma-Separated String

// let arr1 = ["HTML", "CSS", "JavaScript"];
// const arr2 = arr1.reduce((acc, cv) => acc + "," + cv )
// console.log(arr2);

//  Calculate Final Cart Total

// let arr1 = [
//     { name: "Mouse", price: 500, quantity: 2 },
//     { name: "Keyboard", price: 1000, quantity: 1 }
// ];
// const arr2 = arr1.reduce((acc,cv)=> acc+cv.price*cv.quantity , 0);
// console.log(arr2);


//finish 



