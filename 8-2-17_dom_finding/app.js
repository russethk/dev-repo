// document.getElementById("container");
// 
// document.querySelector('section#container');
// 
// document.getElementsByClassName('second');
// 
// document.querySelector('ol .third');
// 
// let sectionText = document.querySelector("#container");
// sectionText.innerText = "Hello!"
// 
// let footer = document.querySelector('.footer');
// footer.classList.add('main');
// 
// let footer = document.querySelector('.footer');
// footer.classList.remove('main');


let newLi = document.createElement("li");
newLi.innerText = 'four';

let list = document.querySelector("ul");
list.appendChild(newLi);

let liInsideOl = document.querySelectorAll('ol li');

for (let i = 0; i < liInsideOl.length; i++) {
    liInsideOl[i].style.backgroundColor = 'green';
}

// let footer = document.querySelector('.footer');
// footer.remove();



