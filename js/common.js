// Initialize AOS
AOS.init({
  once: true,
  duration: 1000,
});

// Handle mobile navbar state
const toggleBtn = document.querySelector("#menu-bars");
const navList = document.querySelector("nav > ul");
const links = document.querySelectorAll("nav > ul > li");

toggleBtn.addEventListener("click", () => {
  navList.classList.toggle("nav-active");
  toggleBtn.classList.toggle("nav-toggled");
});

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
