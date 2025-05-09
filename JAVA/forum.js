
window.addEventListener("load", () => {
      let currentIndex = 0;
      const slides = document.querySelectorAll('.carousel-slide');
      const container = document.querySelector('.carousel-container');
  
      function moveCarousel(direction) {
        const maxIndex = slides.length - 4;
        currentIndex += direction;
        if (currentIndex < 0) currentIndex = 0;
        if (currentIndex > maxIndex) currentIndex = maxIndex;
        const slideWidth = slides[0].getBoundingClientRect().width;
        container.style.transform = `translateX(-${currentIndex * (slideWidth + 32)}px)`;
      }
  
      window.moveCarousel = moveCarousel;
  
      // Auto-slide HERO
      const heroSlides = document.querySelectorAll(".slide");
      const heroDots = document.querySelectorAll(".dot");
      let slideIndex = 0;
  
      function showSlide(index) {
        heroSlides.forEach(slide => slide.classList.remove("active"));
        heroDots.forEach(dot => dot.classList.remove("active"));
        heroSlides[index].classList.add("active");
        heroDots[index].classList.add("active");
      }
  
      function autoSlide() {
        slideIndex = (slideIndex + 1) % heroSlides.length;
        showSlide(slideIndex);
      }
  
      setInterval(autoSlide, 5000);
    });