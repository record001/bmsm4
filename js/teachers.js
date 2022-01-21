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