const carousel = document.querySelector(".carousel-slide");
const image = document.querySelectorAll(".carousel-image");

// button
const next = document.querySelector(".right");
const prev = document.querySelector(".left");

// counter
let counter = 1;
let size = image[0].clientWidth;
carousel.style.transform = `translateX(${-size * counter}px)`;
//
next.addEventListener("click", () => {
  if (counter >= image.length - 1) return;
  carousel.style.transition = `transform 0.4s ease-in-out`;
  counter++;
  carousel.style.transform = `translateX(${-size * counter}px)`;
});
prev.addEventListener("click", () => {
  if (counter <= 1) return;
  carousel.style.transition = `transform 0.4s ease-in-out`;
  counter--;
  carousel.style.transform = `translateX(${-size * counter}px)`;
});

carousel.addEventListener("transitionend", () => {
  if (image[counter].id === "lastClone") {
    carousel.style.transition = `none`;
    counter = image.length - 1;
    carousel.style.transform = `translateX(${-size * counter}px)`;
  }
  if (image[counter].id === "firstClone") {
    carousel.style.transition = `none`;
    counter = image.length - counter;
    carousel.style.transform = `translateX(${-size * counter}px)`;
  }
});
