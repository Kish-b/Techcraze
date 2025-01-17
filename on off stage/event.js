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














document.addEventListener('DOMContentLoaded', function () {
    // Set the initial position of the background-slide based on the active button
    const activeButton = document.querySelector('.she_ru_ev_btn.active');
    setBackgroundSlidePosition(activeButton);
});

function handleClick(event) {
    const buttons = document.querySelectorAll('.she_ru_ev_btn');
    buttons.forEach(button => button.classList.remove('active'));

    // Add 'active' class to the clicked button
    const clickedButton = event.target;
    clickedButton.classList.add('active');

    // Set the background-slide to the clicked button's position
    setBackgroundSlidePosition(clickedButton);
}

function setBackgroundSlidePosition(button) {
    const backgroundSlide = document.querySelector('.background-slide');
    const buttonRect = button.getBoundingClientRect(); // Get the button dimensions and position
    const navRect = document.querySelector('.she_ru_ev_nav').getBoundingClientRect(); // Get parent dimensions
    
    // Calculate left position based on the button's left position relative to the parent container
    const newLeftPosition = buttonRect.left - navRect.left;
    
    // Set the width of the background-slide to match the button width dynamically
    backgroundSlide.style.width = `${buttonRect.width}px`;
    
    // Set the new position of the background-slide
    backgroundSlide.style.left = `${newLeftPosition}px`;
}
