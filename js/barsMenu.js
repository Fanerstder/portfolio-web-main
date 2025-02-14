/* Bars menu  */

document.querySelector(".bars-menu").addEventListener("click", animateBars);

var  barsMenu = document.querySelector("bars-menu");
var  line1_bars = document.querySelector(".line1");
var  line2_bars = document.querySelector(".line2");
var  line3_bars = document.querySelector(".line3");
var containerMenu = document.querySelector(".menu");


function animateBars() {
    line1_bars.classList.toggle("activeline1");
    line2_bars.classList.toggle("activeline2");
    line3_bars.classList.toggle("activeline3");
    containerMenu.classList.toggle("activemenu");
}



document.querySelector(".button__contact").addEventListener("click",  () =>{
    let modal = document.querySelector(".modal__contact");
   modal.classList.add("is-active");
}
    );