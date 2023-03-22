// Write your JavaScript here...
const slides = document.querySelectorAll('.slide');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const dots = document.querySelectorAll('.dot');
let currentSlide = 0;

function showSlide(n) {
  slides[currentSlide].style.display = 'none';
  dots[currentSlide].classList.remove('active');
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].style.display = 'block';
  dots[currentSlide].classList.add('active');
}

prev.addEventListener('click', () => {
  showSlide(currentSlide - 1);
});

next.addEventListener('click', () => {
  showSlide(currentSlide + 1);
});

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    showSlide(index);
  });
});

showSlide(currentSlide);
dots[currentSlide].classList.add('active');