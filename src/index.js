import createHome from "./home.js";
import createMenu from "./menu.js";
import createAbout from "./about.js";
import createContact from "./contact.js";

const content = document.querySelector("#content");

document.querySelector("#home-btn").addEventListener("click", () => {
  content.innerHTML = "";
  createHome();
});

document.querySelector("#menu-btn").addEventListener("click", () => {
  content.innerHTML = "";
  createMenu();
});

document.querySelector("#about-btn").addEventListener("click", () => {
  content.innerHTML = "";
  createAbout();
});

document.querySelector("#contact-btn").addEventListener("click", () => {
  content.innerHTML = "";
  createContact();
});
