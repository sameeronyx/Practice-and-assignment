//Variables, Operators, if-else & switch-case


// 1.basic calculator

// console.log("basic calculator\n");

// let a = 10;
// let b = 5;

// console.log("Addition:", a+b );
// console.log("subtraction:", a-b );
// console.log("multiplication:", a*b );
// console.log("division:", a/b );
// console.log("remainder:", a%b );


// 2.swap two number 

// var a = 10;
// var b = 20;
// var c;

// console.log("Before swapping\n", a, b);
// console.log("After swapping ");

// c = a;
// a = b;
// b = c;
// console.log(a, b);


// students marks 

// console.log("student marks report\n");

// let maths = 80;
// let science = 88;
// let computer_science = 95;

// const total_marks = maths + science + computer_science;
// console.log("Total marks is", total_marks, "out of 300");
// let avrg = (total_marks / 3);
// console.log("average of marks is ", avrg);
// let percentage = (total_marks / 300) * 100;
// console.log("students secured ", percentage, "percentage");

// shopping bill

// console.log("shopping bill\n");

// console.log("Basmati Rice bag of 10 kg");
// const price = 800;
// const quantity = 2;
// console.log("price", price);
// console.log("quantity", quantity);

// var total_bill = price * quantity;
// console.log("Your total bill is", total_bill);

// console.log("we give 10% discount to new customer;");
// var discount = (total_bill * 10) / 100;
// console.log("your discount is:", discount);
// var final_bill = total_bill - discount;
// console.log("your final bill is: ", final_bill);


// area calculator ;

// var length = 10;
// var breadth = 20;
// var area = length*breadth;
// var para = (length+breadth) *2;
// console.log(" entered length is",length);
// console.log(" entered breadth is",breadth);
// console.log(" total area is" ,area);
// console.log(" parameter  is" ,para);



// section 2 

// odd - even 
// let a = 4;
// if (a % 2 == 0) {
//     console.log("number is even ")
// } else {
//     console.log("number is odd");

// }



// greater between two number ;

// let num1 = 20;
// let num2 = 15;

// if (num1 > num2) {
//     console.log("num1 is greater");


// } else {
//     console.log("num2 is greater");

// }


// largest of three number 

// let num1 = 20;
// let num2 = 56;
// let num3 = 40;

// if (num1 > num2 && num1>num3) {
//     console.log("num1 is greater");

// } else if (num2>num1 && num2>num3){
//     console.log("num2 is greatest");

// } else{
//     console.log("num3 is greatest");

// }



//section 3

//nested conditions , if else 

// let percentage = 180;

// if (percentage <= 0 || percentage >= 100) {
//     console.log("invalid percentage");


// } else if (percentage > 90) {
//     console.log("A grade");

// } else if (percentage > 80) {
//     console.log("b grade");

// } else if (percentage > 70) {
//     console.log("b grade");

// } else if (percentage > 60) {
//     console.log("c grade");

// } else if (percentage > 50) {
//     console.log("A grade");

// } else if (percentage > 40) {
//     console.log("d grade");

// } else {
//     console.log("fail");

// }



// electricity bill calculator 

// var units = 180;
// var bill = 0;
// if (units < 0) {
//     console.log("invalids units");

// }
// else if (units <= 100) {
//     bill = units * 5;
// } else if (units <= 200) {
//     bill = (100*5) + ((units-100) * 7);

// } else {
//     bill = (100 * 5) + (100 * 7) + ((units - 200) * 10);
// }
// console.log("your bill is ", bill);


// simple login program 

// let userName = "sameer";
// let passWord = 123456;
// if (userName === "sameer" && passWord === 123456) {
//     console.log("login success");

// } else {
//     console.log("inavalid info");

// }


// section-4 switch case 

// simple calculator

// let num1 = 10;
// let num2 = 30;

// var Operator = "/";

// switch (Operator) {
//     case '+':
//         console.log(num1 + num2);
//         break;

//     case '-':
//         console.log(num1 - num2);
//         break;

//     case '*':
//         console.log(num1 * num2);
//         break;

//     case '/':
//         if (num1 == 0) {
//             console.log("cannot divisible");

//         } else {


//             console.log(num1 / num2);
//             break;

//         }


//     case '%':
//         console.log(num1 % num2);
//         break;

//     default:
//         console.log("invailid operators");

// }


// Traffic signal ;

// const signal_colour = "red";

// switch (signal_colour) {
//     case "green":
//         console.log("go ");
//         break;

//     case "yellow":
//         console.log("wait");
//         break;

//     case "red":
//         console.log("stop");
//         break;

//     default:
//         console.log("invalid signal");

// }



//section -5  mixed problem 

// atm Transaction prototype

// var balance = 10000;
// var witdhrawAmount = 4000;

// console.log("balance:",balance);
// console.log("withdrawAmount",witdhrawAmount);



// if (witdhrawAmount <= 0) {
//     console.log("invalid witdhraw amount");

// } else if (witdhrawAmount > balance) {
//     console.log("insufficient balance");

// }
// else {
//     balance = balance - witdhrawAmount;

//     console.log("widthraw success");
//     console.log("remaining balance", balance);
// }

// movie tickets

// var age = 25;
// var numberOfTickets = 4;
// var totalPrice;
// var ticketPrice;

// if (age < 12) {
//     ticketPrice = 100;

// } else if (age >= 12 && age <= 59) {
//     ticketPrice = 200;
// } else {
//     ticketPrice = 120;
// }

// totalPrice = ticketPrice * numberOfTickets;

// console.log("total:", totalPrice);


// Restaurent Menu

// var choice = 2;
// var quantity = 3;
// var final_price;
// var price;

// console.log("1. Burger  - ₹150");
// console.log("2. Pizza   - ₹250");
// console.log("3. Pasta   - ₹180");
// console.log("4. Sandwich - ₹120");


// switch (choice) {
//     case 1:
//         console.log("ordered item - Burger");
//         price = 150;
//         break;

//     case 2:
//         console.log("ordered item - Pizza ");
//         price = 250;
//         break;

//     case 3:
//         console.log("ordered item - pasta ");
//         price = 180;
//         break;

//     case 4:
//         console.log("ordered item - sandwich");
//         price = 120;
//         break;

// }

// final_price = price * quantity;

// console.log("Quantity",quantity);


// console.log("total", final_price);




// ElectriCity Bill + Discount 

// var units = 200;
// var bill = 0;
// var Discount;
// var final_bill;


// if (units > 0 && units <= 100) {
//     bill = (units * 5);

// } else if (units > 100 & units <= 200) {
//     bill = (units * 5) + ((units - 100) * 7);

// } else {
//     bill = (units * 5) + ((units - 200) * 10)
// }
// console.log("units :", units);
// console.log("original bill", bill);

// if (bill >= 2000) {
//     Discount = bill * 10 / 100;

// } else {
//     Discount = 0 ;


// }
// console.log("discount",Discount);
// final_bill = bill - Discount;

// console.log("total bill:", final_bill);



// // Students result system 

// var studentName = "MOhd Sameer";
// var rollNumber = 37;

// var mathMarks = 71;
// var scienceMarks = 82;
// var englishMarks = 78;

// var totalMarks = mathMarks + scienceMarks + englishMarks;
// var percentage = totalMarks / 3;

// var grade;
// var result;

// if (percentage > 100) {

//     console.log("Invalid percentage");


// } else if (percentage >= 90) {
//     grade = "A";
// }
// else if (percentage >= 80) {
//     grade = "B";
// } else if (percentage >= 70) {
//     grade = "C";
// } else if (percentage >= 60) {
//     grade = "D";
// } else if (percentage >= 40) {
//     grade = "E";
// } else {
//     grade = "F";
// }

// if (mathMarks >= 40 && scienceMarks >= 40 && englishMarks >= 40) {
//     result = "PASS";
// }
// else {
//     result = "FAIL";
// }

// console.log("---------------------");
// console.log("   STUDENT RESULT    ");
// console.log("---------------------");

// console.log("Name      :", studentName);
// console.log("Roll No   :", rollNumber);
// console.log("\n");

// console.log("Math      :", mathMarks);
// console.log("Science   :", scienceMarks);
// console.log("English   :", englishMarks);
// console.log("\n");

// console.log("Total     :", totalMarks);
// console.log("Percentage:", percentage.toFixed(2) + "%");
// console.log("Grade     :",grade);
// console.log("Result    :", result);

// console.log("---------------------");






























































