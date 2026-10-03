// // section-1 (Selecting and Modifying Elements)

// // select an element by ID

// const header = document.getElementById('title')
// header.textContent = "hello js";

// // select an element using query selector 

// const paragraph = document.querySelector(".description");

// paragraph.textContent = "new description";

// // Select multiple elements using queryselectorAll()

// let list = document.querySelectorAll('.item');

// list.forEach((lists) => {
//     lists.style.color = 'red'
// });

// // Add elements using inner html

// const conatiner = document.querySelector("#container");
// conatiner.innerHTML = ' <h2>my website</h2> <p> Welcome to my website</p>'


// // Section-2(Atrributes,classes and styles)

// //change an attribute using setAttribute()

// const img = document.querySelector('#profileImage');
// img.setAttribute('alt', 'newImage');
// img.setAttribute('src', 'DPimage');

// // Add and Remove classes Using classList

// const btn = document.querySelector("#btn");

// btn.addEventListener('click', () => {

//     btn.classList.toggle('btn')
// })


// //Read Data using dataset


// let product = document.querySelector("#productBtn");

// product.addEventListener("click" ,()=>{
// const productId = product.dataset.id;

// console.log(productId);

// });

// // Section -3 Creating and Adding elements

// // create an elements using create elements 

// const para = document.createElement('p')
// para.textContent ="This ParaGraph was created Using javascript"

// document.body.prepend(para);

// // Add an elements using append child 

// const taskList = document.querySelector("#taskList");

// const newTask = document.createElement('li')

// // taskList.createElement('li');
// newTask.textContent = "go to college";

// taskList.appendChild(newTask);

// // insert an element

// let languageList = document.querySelector("#languageList");

// const newLanguage = document.createElement('li')

// const referencelanguage = document.getElementById('js-lang')

// newLanguage.textContent = "css"

// languageList.insertBefore(newLanguage,referencelanguage)

// // Removing and cloing elements

//  // 1.
// // const removeLang = document.querySelector("#js-language");

// // removeLang.remove()

// //2.
// let languageList1 = document.querySelector("#languagelist");

// const removeLang = document.querySelector("#js-language");

// languageList1.removeChild(removeLang)

// // cloning elements 

// const parentBtn = document.querySelector("#clnBtn")

// const orgBtn = document.querySelector("#btn1");

// const clnBtn = orgBtn.cloneNode(true);

// parentBtn.appendChild(clnBtn)










