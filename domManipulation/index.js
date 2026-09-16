// section-1 (Selecting and Modifying Elements)

// select an element by ID

const header = document.getElementById('title')
header.textContent = "hello js";

// select an element using query selector 

const paragraph = document.querySelector(".description");

paragraph.textContent = "new description";

// Select multiple elements using queryselectorAll()

let list = document.querySelectorAll('.item');

list.forEach((lists) => {
    lists.style.color = 'red'
});

// Add elements using inner html

const conatiner = document.querySelector("#container");
conatiner.innerHTML = ' <h2>my website</h2> <p> Welcome to my website</p>'


// Section-2(Atrributes,classes and styles)

//change an attribute using setAttribute()

const img = document.querySelector('#profileImage');
img.setAttribute('alt', 'newImage');
img.setAttribute('src', 'DPimage');

// Add and Remove classes Using classList

const btn = document.querySelector("#btn");

btn.addEventListener('click', () => {

    btn.classList.toggle('btn')
})


//Read Data using dataset


let product = document.querySelector("#productBtn");

product.addEventListener("click" ,()=>{
const productId = product.dataset.id;

console.log(productId);

});

// Section -3 Creating and Adding elements




