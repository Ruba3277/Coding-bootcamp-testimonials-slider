// 1. Get elements
const slides = document.querySelectorAll(".testimonial");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let index = 0; // Starts at first slide

// 2. Click '>' (Next)
nextBtn.addEventListener("click", () => {
  // If we are already at the last slide, do nothing
  if (index >= slides.length - 1) return;

  slides[index].classList.remove("active"); // Hide current slide
  index = index + 1;                        // Move to next slide
  slides[index].classList.add("active");    // Show new slide
});

// 3. Click '<' (Previous)
prevBtn.addEventListener("click", () => {
  // If we are already at the first slide, do nothing
  if (index <= 0) return;

  slides[index].classList.remove("active"); // Hide current slide
  index = index - 1;                        // Move to previous slide
  slides[index].classList.add("active");    // Show new slide
});