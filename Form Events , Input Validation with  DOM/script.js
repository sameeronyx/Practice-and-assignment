// // Form Events & Input Validation with DOM in JavaScript Assignment 

// // Section 1 – Form and Input Events 

// // 1,2. Handle Form Submit Event & Prevent Form Submission 

// const userForm = document.querySelector("#user-form");

// userForm.addEventListener("submit",(e)=>{
//     e.preventDefault();

//     document.querySelector("#user-msg").textContent ="Form submitted successfully!"

// });


// //3. Display Input Using the input Event

// const inputBox = document.querySelector("#input-Box");

// inputBox.addEventListener("input",(e)=>{
//     document.querySelector("#input-msg").textContent =`You Entered:${e.target.value}`
// })


// // 4. Detect Changes Using the change Event

// const langOption = document.querySelector("#langOption");

// langOption.addEventListener("change",(e)=>{
//     document.querySelector("#langMsg").textContent = `You choose : ${e.target.value}`
// });

// 5,6. focus & blur  question 

// const inputTab = document.querySelector("#focusTab");

// inputTab.addEventListener("focus",(e)=>{
//     e.preventDefault();
//    inputTab.classList.add("focusTab")

// });

// inputTab.addEventListener("blur",(e)=>{
//     inputTab.classList.remove("focusTab")
// });



// Section 2 – Basic Form Validation

 // 7.Validate a Required Name Field

//  const Username = document.querySelector("#UserName");
//  const userErr = document.querySelector("#userErr");

//  Username.addEventListener("change",(e)=>{
//     e.preventDefault();
//     if(Username.value.trim().length == 0){
//         userErr.textContent = "Please enter something "
        
//     }else {
//         userErr.textContent = `${e.target.value}`
//     }

//  });


// 8,9. Validate Email & password Field 

// const emailBox = document.querySelector("#emailBox");
// const emailForm = document.querySelector("#emailForm");
// const emailMsg = document.querySelector("#emailMsg");
// const passBox = document.querySelector("#passBox");
// const passMsg = document.querySelector("#passMsg");

// emailForm.addEventListener("submit",(e)=>{
//     e.preventDefault();
//     if(emailBox.value.trim().length == 0 ){
//         emailMsg.textContent = "Please enter something "
        
//     }else {
//         emailMsg.textContent = `Successfully`
//     }

//     if(passBox.value.trim().length <6){
//         passMsg.textContent = "enter altleast 6 character"
//     }
//     else
//     {
//         passMsg.textContent = "Password Created sucessfully"
//     }
// });


// 10. Validate Multiple Form Fields


const userForm = document.querySelector("#userForm");
const userName = document.querySelector("#userName");
const userEmail = document.querySelector("#userEmail");
const userPassword = document.querySelector("#userPassword");
const userNameMsg = document.querySelector("#userNameMsg");
const userPassMag = document.querySelector("#userPassMsg");
const userEmailMsg= document.querySelector("#userEmailMsg");

// 1st method 
// userForm.addEventListener("submit",(e)=>{
//     e.preventDefault();

//     // let isValid = true;
// if(userName.value.trim().length == 0 ){
//     userNameMsg.textContent = "Please enter something "
        
//     }else {
//         userName.textContent = `Successfully`
//     }

//     if(userEmail.value.trim().length == 0 ){
//     userEmailMsg.textContent = "Please enter something "
        
//     }else {
//         userEmailMsg.textContent = `Successfully`
//     }

//     if(userPassword.value.trim().length <6){
//         userPassMag.textContent = "enter altleast 6 character"
//     }
//     else
//     {
//         userPassMag.textContent = "Password Created sucessfully"
//     }



// })

// 2nd msg 

userForm.addEventListener("submit",(e)=>{
    e.preventDefault();

     let isValid = true;
if(userName.value.trim().length == 0 ){
    userNameMsg.textContent = "Please enter something "
    isValid = false
        
    }else {
        userName.textContent = ""
    }

    if(userEmail.value.trim().length == 0 ){
    userEmailMsg.textContent = "Please enter something "
    isValid = false
        
    }else {
        userEmailMsg.textContent = ``
    }

    if(userPassword.value.trim().length <6){
        userPassMag.textContent = "enter altleast 6 character"
        isValid = false
    }
    else
    {
        userPassMag.textContent = ""
    }

    if(isValid){
        document.querySelector("#formMsg").textContent ="form submit successfully";

        userForm.reset();
    }

})
