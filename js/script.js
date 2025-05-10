//* Merchandising Carousel functionality */
    
window.addEventListener('DOMContentLoaded', () => {
    const carousel = document.getElementById('carousel');
    const cards = Array.from(carousel.children);
    const cardWidth = cards[0].offsetWidth + 15;
    const visibleCards = Math.floor(carousel.offsetWidth / cardWidth);

    const prepend = cards.slice(-visibleCards).map(card => card.cloneNode(true));
    const append = cards.slice(0, visibleCards).map(card => card.cloneNode(true));

    prepend.forEach(clone => carousel.insertBefore(clone, carousel.firstChild));
    append.forEach(clone => carousel.appendChild(clone));

    let startScroll = visibleCards * cardWidth;
    carousel.scrollLeft = startScroll;

    carousel.addEventListener('scroll', () => {
      if (carousel.scrollLeft <= 0) {
        carousel.scrollLeft = cards.length * cardWidth;
      } else if (carousel.scrollLeft >= (cards.length + visibleCards) * cardWidth) {
        carousel.scrollLeft = startScroll;
      }
    });

    let autoScroll;
    function startAutoScroll() {
      autoScroll = setInterval(() => {
        carousel.scrollBy({ left: cardWidth, behavior: 'smooth' });
      }, 1500);
    }

    function stopAutoScroll() {
      clearInterval(autoScroll);
    }

    startAutoScroll();

    carousel.addEventListener('mouseenter', stopAutoScroll);
    carousel.addEventListener('mouseleave', startAutoScroll);

  });
  function scrollCarousel(direction) {
const carousel = document.getElementById('carousel');
const card = carousel.querySelector('.carousel-card');
const cardWidth = card.offsetWidth + 15; 
const visibleCards = Math.floor(carousel.offsetWidth / cardWidth);
const originalCardsCount = carousel.children.length - 2 * visibleCards;

const startScroll = visibleCards * cardWidth;
const endScroll = (originalCardsCount + visibleCards) * cardWidth;

const newScroll = carousel.scrollLeft + direction * cardWidth;

if (newScroll <= 0) {
  carousel.scrollLeft = endScroll - cardWidth;
} else if (newScroll >= endScroll) {
  carousel.scrollLeft = startScroll;
} else {
  carousel.scrollBy({
    left: direction * cardWidth,
    behavior: 'smooth'
  });
}
}
  // 3 Slides Carousel functionality
  document.addEventListener('DOMContentLoaded', () => {
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
  const totalSlides = slides.length;
  currentSlide = (index + totalSlides) % totalSlides;

  const offset = -currentSlide * 100;
  document.querySelector('.slides').style.transform = `translateX(${offset}%)`;

  dots.forEach(dot => dot.classList.remove('active'));
  dots[currentSlide].classList.add('active');
}

setInterval(() => {
  showSlide(currentSlide + 1);
}, 5000);

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    showSlide(index);
  });
});
});