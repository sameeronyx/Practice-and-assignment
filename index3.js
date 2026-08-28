// built in objects assignment 

//section -1 math object

// print a random num 

// console.log(Math.random());


// random whole number number between 1 and 10 ;

// let min = 1 ;
// let max = 10 ;

// let res = Math.floor(Math.random() * (max-min +1) + min);
// console.log(res);


// Round a number

// console.log(Math.round(4.6));

// floor and ceil any number

// let num1 = 7.3;

// console.log(Math.floor(num1));
// console.log(Math.ceil(num1));


//power and sq.rt

// console.log(Math.pow(8,3)); // power 
// console.log(Math.sqrt(64)); //sqrt

// minimum and maximum

// console.log(Math.min(1,2,3,4,5,6,7,8,9));
// console.log(Math.max(1,2,3,4,5,6,7,8,9));

// section-2 strings built in objects 

// extract part of a string 
// let str = "JavaScript Programming";
// console.log(str.slice(0,10));

//split a string

// let str = "HTML,CSS,JavaScript";
// console.log(str.split(","));

// replace text 

// let str1 = "Hello World";
// let str2 = "JavaScript"
// console.log(str1.replace("World" , str2)); // my method 

// let str1 = "Hello World";
// console.log(str1.replace("World" , "javaScript")); //aise bhi kr skte hai

// check email 

// let str1 = "user@exampele.com";
// console.log(str1.includes("@"));

// ends with 

// let str1 = "image.jpg";
// console.log(str1.endsWith("jpg"));


// remove extra space 

// let str1 = "  Hello JavaScript  ";
// console.log(str1.trim());


// section-3 Number built in objects 

// let float = 12.3876655454;
// console.log(float.toFixed(2));

// format a Price 

// var price = 499.5;
// console.log(price.toFixed(2));


//section-4 date Objects 

//current date and time

// let currentDateTime = new Date();
// console.log(currentDateTime);


// let myDate = new Date("2026/8/28");
// console.log(myDate);

// current time stamp

// console.log(Date.now());


//step 1
// const currentDateTime = new Date();

// // Step 2: Display in different formats
// console.log("Full Details:", currentDateTime.toString());
// // Output: Fri Aug 28 2026 11:16:00 GMT+0530 (India Standard Time) //more info.

// console.log("Only Date:", currentDateTime.toLocaleDateString());
// // Output: 28/8/2026 (Format depends on system settings)

// console.log("Only Time:", currentDateTime.toLocaleTimeString());



// simple date difference

// let date1 = new Date("2026-01-01");
// let date2 = new Date("2026-01-02");
// //console.log(date2-date1); (shortcut)

// let difference = (date2 - date1);
// console.log(difference);          // (long cut)























