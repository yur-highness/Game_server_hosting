console.log("connected via external script");
//drop login

let loginBtn = document.querySelector('.login-btn');
let dropLogin = document.querySelector('.drop-login');

loginBtn.onclick = () => {
    dropLogin.classList.toggle("drop-login-open")
}


//menu open close

let menu = document.querySelector(".menu-icon");
// let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle("move");

}

//Home Swiper
var swiper = new Swiper("#home", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 10000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    
  });