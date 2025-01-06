const hamburger = document.getElementById("hambergar");
const navbar = document.getElementById("navbar");

hamburger.addEventListener("click", () => {
    navbar.classList.toggle("active");
});
