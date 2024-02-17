// console.log("Hellow");
//Бургер

const burger = document.getElementById("burger");
const nav = document.getElementById("nav");

burger.addEventListener("click", function(){
  nav.classList.toggle("nav--active");
  burger.classList.toggle("burger--active");
  document.body.classList.toggle("stop-scroll");

});

//modal
const callFormBtn = document.getElementById("call-form");
const modalCallForm = document.getElementById("modal-call-form");

//open modal
callFormBtn.addEventListener("click", function(){
  modalCallForm.classList.add("modal-parent--open");
});

//close modal

modalCallForm.querySelector(".modal").addEventListener("click", function(event){
    event._isClick = true;
});

modalCallForm.addEventListener("click", function(event){
  if (event._isClick === true) return
  modalCallForm.classList.remove("modal-parent--open");
});

//close form click ESC

window.addEventListener("keydown", function(event){
  if(event.key === "Escape") {
    modalCallForm.classList.remove("modal-parent--open");
  }
})

// gallery

const swiper = new Swiper("#gallery", {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 20,

  navigation: {
    prevEl: "#gallery-prev",
    nextEl: "#gallery-next"
  }
})





