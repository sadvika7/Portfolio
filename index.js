let menuIcon = document.querySelector("#menu-icon");
let navBar = document.querySelector(".navbar");

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");
const loginform = document.getElementById("login-form");
// let names = document.getElementById("name");
// let email = document.getElementById("email");
// let phone = document.getElementById("phone");
let textbox = document.getElementById("textbox");
let submit = document.getElementById("submit");
console.log(loginform);
menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navBar.classList.toggle("active");
};

const typed = new Typed(".multiple-text", {
  strings: ["FrontEnd Developer", "React developer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

document.getElementById("shareButton").addEventListener("click", function () {
  const currentURL = window.location.href;
  if (navigator.share) {
    navigator
      .share({
        title: "porfolio",
        text: "check out this porfolio",
        url: currentURL,
      })
      .then(() => console.log("share successfuly"))
      .catch((error) => console.error("error sharing:", error));
  } else {
    prompt("copy this link", currentURL);
  }
});
window.ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});
ScrollReveal().reveal(".home-content,.heading", { origin: "top" });
ScrollReveal().reveal(" .home-img,.education-container,.contact form", {
  origin: "bottom",
});
ScrollReveal().reveal(".home-content h1,.about-img,.skills", {
  origin: "left",
});
ScrollReveal().reveal(".home-content p,.about-content p", { origin: "right" });
