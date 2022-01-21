let header = document.querySelector(".header")
window.addEventListener('scroll', () => {
  if(window.scrollY > 20 ){
    header.classList.add("black")
  }else {
    header.classList.remove("black")

  }
})


let nav = document.querySelector(".nav");
let modal = document.querySelector(".modal");
let up = document.querySelector("#up");
let modal_link = document.querySelectorAll(".modal__link")
// console.log(modal_link);
let burger = document.querySelector(".burger")


// burger
function myFunction(x) {
  x.classList.toggle("change");
  modal.classList.toggle("active");
}

modal_link.forEach(link => {
  link.addEventListener("click", ()=>{
    myFunction(burger)
    modal.classList.remove("active")
  })
})


// modal_photo

let images = document.querySelectorAll(".photos__blur")
let img_render = document.querySelector(".modal_photo__img")
let modal_photo = document.querySelector(".modal_photo")
let modal_photo__close = document.querySelector(".modal_photo__close")


let vin_img = document.querySelectorAll(".carousel-item")


vin_img.forEach(vin => {

  vin.firstElementChild.addEventListener('click', e =>{
    modal_photo.classList.add("modal_photo_db")
    img_render.innerHTML = `<div class="modal_photo__img">
    <img src="${e.target.src}" alt="photo">
  </div>`
 })
})
images.forEach(img => {
//  console.log(img.firstElementChild);

 img.firstElementChild.addEventListener('click', e =>{
    modal_photo.classList.add("modal_photo_db")
    img_render.innerHTML = `<div class="modal_photo__img">
    <img src="${e.target.src}" alt="photo">
  </div>`
 })

})

modal_photo__close.addEventListener('click', e => {
  modal_photo.classList.remove("modal_photo_db")
})


// carousel


let array = [];
let items = document.querySelectorAll('.carousel-item');
for (let i = 0; i < items.length; i++) {
    array.push(i);
}

function carousel_init(array) { //init carousel
    let middle = array[Math.round(array.length/2)-1]
    items[middle].style.left = `50%`//index: 3
    items[middle].classList.add("active")
    let value = 10;
    for (let i = Math.round(array.length/2) - 2; i >= 0; i--) {//indexes: 0, 1, 2
        items[array[i]].style.left = `${value}%`
        value -= 25;
    }
    value = 90;
    for (let i = Math.round(array.length/2) ; i < items.length; i++) { //indexes : 4, 5, 6
        items[array[i]].style.left = `${value}%`
        value += 25;
    }
}
// event listener of next/prev buttons
document.querySelectorAll('.carousel-items-arrow').forEach((btn) => {
    btn.addEventListener("click", (e) => {

        document.querySelector('.carousel-item.active').classList.remove("active");

        if (e.target.classList.contains("arrow-prev")) { //prev bosilsa:
            items[array[Math.round(array.length/2)-2]].classList.add("active");
            array.unshift(array.pop())
            carousel_init(array)
        } else if (e.target.classList.contains("arrow-next")) { //next bosilsa:
            items[array[Math.round(array.length/2)]].classList.add("active");
            array.push(array.shift())
            carousel_init(array)
        }
    });
});

window.addEventListener("DOMContentLoaded", carousel_init(array));
