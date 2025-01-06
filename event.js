// const section1 = document.getElementById("one");
// const onediv = document.getElementById("onediv");
// const twodiv = document.getElementById("twodiv");
// const threediv = document.getElementById("threediv");

// section1.addEventListener("click", () => {
//     onediv.classList.toggle("active");
//     twodiv.classList.toggle("twodiv");
//     threediv.classList.toggle("threediv");
// });


// const section2 = document.getElementById("two");


// section.addEventListener("click", () => {
//     twodiv.classList.toggle("active");
//     threediv.classList.toggle("threediv");
//     onediv.classList.toggle("onediv");
// });


// const section3 = document.getElementById("three");


// section.addEventListener("click", () => {
//     threediv.classList.toggle("active");
// });


const section1 = document.getElementById("schedules");
const section2 = document.getElementById("events");
const section3 = document.getElementById("three");

const onediv = document.getElementById("onediv");
const twodiv = document.getElementById("twodiv");
const threediv = document.getElementById("threediv");

// Event listener for section 1
section1.addEventListener("click", () => {
    onediv.classList.add("active");
    twodiv.classList.remove("active");
    threediv.classList.remove("active");
});

// Event listener for section 2
section2.addEventListener("click", () => {
    twodiv.classList.add("active");
    onediv.classList.remove("active");
    threediv.classList.remove("active");
});

// Event listener for section 3
section3.addEventListener("click", () => {
    threediv.classList.add("active");
    onediv.classList.remove("active");
    twodiv.classList.remove("active");
});
