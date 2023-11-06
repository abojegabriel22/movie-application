"use strict";

// function lightMode(){
//     let myLight = document.body
//     myLight.classList.toggle("myLight")
//     let myColor = document.getElementsByClassName("myColor1")[0]
//     let btn2A = document.getElementsByClassName("btn2A")[0]
//     myColor.classList.toggle("myColor")
//     btn2A.classList.toggle("btn2B")
// }
// COUPON LOAD FUNCTION 
function loadCoupon() {
  document.getElementById("coupon").style.visibility = "visible";
  document.getElementById("root").style.opacity = "0.4";
} // COUPON CLOSE BUTTON 


function closeCoupon() {
  document.getElementById("coupon").style.visibility = "hidden";
  document.getElementById("root").style.opacity = "1";
}

function couponLink() {
  document.getElementById("coupon").style.visibility = "hidden";
  document.getElementById("root").style.opacity = "1";
}