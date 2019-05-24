// customer comments script
let slideIndex = 100;
slide(slideIndex);

const arrowClickPrev = document.querySelector(".prev");
arrowClickPrev.addEventListener("click", function(n) {
  slide((slideIndex += -1));
});

const arrowClickNext = document.querySelector(".next");
arrowClickNext.addEventListener("click", function(n) {
  slide((slideIndex += 1));
});

function slide(n) {
  let i;
  let slides = document.querySelectorAll(".slides");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}
//events
const mouseDown = document.querySelector(".btn");
mouseDown.addEventListener("mousedown", function() {
  mouseDown.style.background = "purple";
});
