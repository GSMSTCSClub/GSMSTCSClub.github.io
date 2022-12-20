// Initialize AOS
AOS.init({
  once: true,
  duration: 1000,
});

// Navigation bar
let nav = document.querySelector("nav");
let menu = document.querySelector("#menu-bars");

menu.onclick = () => {
  menu.querySelector('i').classList.toggle("fa-times");
  nav.classList.toggle("active");
};

window.onscroll = () => {
  menu.querySelector('i').classList.remove("fa-times");
  nav.classList.remove("active");
};

// Initialize vanta animated background
VANTA.NET({
  el: "#vanta-target",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.0,
  minWidth: 200.0,
  scale: 1.0,
  scaleMobile: 1.0,
  color: 0x089ccc,
});

// Initialize tilt effect 
VanillaTilt.init(document.querySelector(".panel-img"), {
  max: 25,
  speed: 400,
  reverse: true,
});
