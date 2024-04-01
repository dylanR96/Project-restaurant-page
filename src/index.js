import "./style.css";
import { renderHomePage } from "./home.js";
import { renderMenuSection, menuItems } from "./menu.js";
import { renderAboutSection } from "./about.js";
import { renderContactSection } from "./contact.js";

const homeBtn = document.getElementById("home-btn");
const menuBtn = document.getElementById("menu-btn");
const aboutBtn = document.getElementById("about-btn");
const contactBtn = document.getElementById("contact-btn");

document.addEventListener("DOMContentLoaded", function () {
  renderHomePage();
});

homeBtn.addEventListener("click", () => {
  renderHomePage();
});

menuBtn.addEventListener("click", () => {
  renderMenuSection(menuItems);
});

aboutBtn.addEventListener("click", () => {
  renderAboutSection();
});

contactBtn.addEventListener("click", () => {
  renderContactSection();
});
