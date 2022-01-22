let header = document.querySelector(".header");
window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    header.classList.add("black");
  } else {
    header.classList.remove("black");
  }
});

let nav = document.querySelector(".nav");
let modal = document.querySelector(".modal");
let up = document.querySelector("#up");
let modal_link = document.querySelectorAll(".modal__link");
// console.log(modal_link);
let burger = document.querySelector(".burger");

// burger
function myFunction(x) {
  x.classList.toggle("change");
  modal.classList.toggle("active");
}

modal_link.forEach((link) => {
  link.addEventListener("click", () => {
    myFunction(burger);
    modal.classList.remove("active");
  });
});

// course menu

let menu = document.querySelectorAll(".course__item");
let info = document.querySelectorAll(".course__info");

function addTab(arr) {
  arr.forEach((element) => {
    element.addEventListener("click", (e) => {

      let clicked = e.target.getAttribute("data-id");

      
      info.forEach(function (el) {
        el.classList.remove("dgrid");
      });
      
      arr.forEach(function (el) {
        el.classList.remove("course_active");
      });
      
      // console.log(clicked);
      
      e.target.classList.add("course_active");
      document.getElementById(`${clicked}`).classList.add("dgrid");
    });
  });
}

addTab(menu);

//////////////////////////////

let items = document.querySelectorAll(".carousel-item");
let array = []; //carouse items ga mos array yaratildi
for (let i = 0; i < items.length; i++) {
  array.push(i);
}
//init carousel
function carousel_init(array) {
  let middle = array[Math.round(array.length / 2) - 1];
  items[middle].style.left = `285px`; //index: 3
  let value = 0;
  for (let i = Math.round(array.length / 2) - 2; i >= 0; i--) {
    //indexes: 0, 1, 2
    items[array[i]].style.left = `${value}px`;
    value -= 285;
  }
  value = 570;
  for (let i = Math.round(array.length / 2); i < items.length; i++) {
    //indexes : 4, 5, 6
    items[array[i]].style.left = `${value}px`;
    value += 285;
  }
}
// event listener of next/prev buttons
document.querySelectorAll(".carousel-items-arrow").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (e.target.classList.contains("arrow-prev")) {
      //prev bosilsa:
      array.unshift(array.pop());
    } else if (e.target.classList.contains("arrow-next")) {
      //next bosilsa:
      array.push(array.shift());
    }
    carousel_init(array);
  });
});

window.addEventListener("DOMContentLoaded", carousel_init(array));
