const hamburger = document.getElementById("hambergar");
const navbar = document.getElementById("body");

hamburger.addEventListener("click", () => {
//    document.getElementById("body").style.backgroundColor= "white";
    navbar.classList.toggle("active");
});