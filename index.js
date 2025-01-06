const hamburger = document.getElementById("hambergar");
const navbar = document.getElementById("navbar");

hamburger.addEventListener("click", () => {
    navbar.classList.toggle("active");
});


// hamburger.addEventListener('click', () => {
//     if (navbar.style.display === 'none' || navbar.style.display === '') {
//         navbar.style.display = 'flex'; // Make it visible
//         setTimeout(() => {
//             navbar.classList.add('active'); // Trigger slide animation
//         }, 10); // Delay to ensure the transition applies
//     } else {
//         navbar.classList.remove('active'); // Slide it out
//         setTimeout(() => {
//             navbar.style.display = 'none'; // Hide after animation completes
//         }, 700); // Matches the transition duration (0.7s)
//     }
// });


const track = document.querySelector('.carousel-track');
const cards = document.querySelectorAll('.info');
const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');
let currentIndex = 0;

const updateCarousel = () => {
  if (window.innerWidth > 768) { // Only apply carousel function for larger screens
    const cardWidth = cards[0].offsetWidth + 400; // Card width + margin
    const offset = -(currentIndex * cardWidth);
    track.style.transform =  `translateX(${offset}px)`;
  } else {
    track.style.transform = 'none'; // Disable carousel on small screens
  }
};

nextButton.addEventListener('click', () => {
  if (window.innerWidth > 768 && currentIndex < cards.length - 4) { // Only work for larger screens
    currentIndex++;
    updateCarousel();
  }
});

prevButton.addEventListener('click', () => {
  if (window.innerWidth > 768 && currentIndex > 0) { // Only work for larger screens
    currentIndex--;
    updateCarousel();
  }
});

// Update carousel on window resize
window.addEventListener('resize', updateCarousel);

// Initial setup
updateCarousel();




