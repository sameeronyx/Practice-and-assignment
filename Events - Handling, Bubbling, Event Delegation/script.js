// section-1 events handling Basics

//1. add button click
// const btn = document.querySelector("#btn");

// btn.addEventListener("click",()=>{
//   document.querySelector("#btn-msg").textContent ="Button clicked"


// })


// 2. change the text on click

// const greetBtn = document.querySelector("#greet-btn");

// greetBtn.addEventListener("click",() =>{
//     document.querySelector("#greet-msg").textContent ="Thanks for visiting"

// })


//3. mouseOver

// const greetBtn = document.querySelector("#greet-btn");

// greetBtn.addEventListener("mouseover", () => {
//     document.querySelector("#greet-msg").textContent = "Thanks for visiting"

// })


// section-3 Event Object

//4. display the clicked Elements

//const revealBtn = document.querySelector("#reveal-btn");

// revealBtn.addEventListener("click" ,(e)=>{
//      document.querySelector("#reveal-msg").textContent = e.target.type;
// })


// 5. display mouse coordinates 


// const coordinateArea = document.querySelector("#coordinate-div");

// coordinateArea.addEventListener("click" ,(e)=>{
//      document.querySelector("#coordinate-msg").textContent = `X: ${e.clientX}, Y: ${e.clientY}`;
// })


//6. get the value of an input 

// const inputArea = document.querySelector("#input-bar");
// const inputMsg = document.querySelector("#input-msg");

// inputArea.addEventListener("input" ,(e)=>{
//     inputMsg.textContent = e.target.value
// })


// section -3 Removing and cntrolling events

// 7. remove an Event listner 

// const revealBtn = document.querySelector("#reveal-btn");
//  const revealMsg = document.querySelector("#reveal-msg")

// revealBtn.addEventListener("click", ()=>{
//     revealMsg.textContent ="";
     
// })

// revealBtn.removeEventListener("click",'revealMsg');


//8. run an Event Only once 

//  const revealBtn = document.querySelector("#reveal-btn");
 

// revealBtn.addEventListener("click", ()=>{


// console.log(document.querySelector("#reveal-msg").textContent ="hi");
// } ,{once:true});



//9.Stop Event Propogation 

// const eventProp = document.querySelector("#eventpropogation");
// const eventPropBtn = document.querySelector("#eventpropogationBtn");

// eventProp.addEventListener("click",()=>{
//     console.log("parent");
    
// });

// eventPropBtn.addEventListener("click",(e)=>{
//     e.stopPropagation()

//     console.log("child");
    
// })


// section-4 Bubbling ,capturing & default actions

// 10 . demonstrate event capturing

// const eventProp = document.querySelector("#eventpropogation");
// const eventPropBtn = document.querySelector("#eventpropogationBtn");

// eventPropBtn.addEventListener("click",(e)=>{
//     //e.stopPropagation()

//     console.log("child");
    
// })

// eventProp.addEventListener("click",()=>{
//     console.log("parent");
    
// },{capture});



// section-5 Event deligation 

// 12.  Handle Multiple Buttons Using Event Delegation 

// const langButton = document.querySelector("#langsbuttons");

// langButton.addEventListener("click",(e)=>{
//     e.preventDefault();

//     if(e.target.tagName === "BUTTON"){

//         document.querySelector("#langMsg").textContent =e.target.textContent
//     }
    
// })

















