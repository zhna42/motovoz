if(process.env.NODE_ENV != "production") require("./index.html");
import "./style.scss";
import "./delivery/delivery.js";

document.querySelector(".menu-button").addEventListener("click", function () {
  this.classList.toggle("is-active");
  document.querySelector(".header-menu").classList.toggle("is-active");
  document.querySelector("body").classList.toggle("is-active");
});