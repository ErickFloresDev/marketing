const carousel = document.querySelector('.carousel');
const cards = document.querySelectorAll('.card');
const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');

let currentIndex = 0;
let visibleCards = 1;

function updateVisibleCards() {
    const containerWidth = document.querySelector('.carousel-container').offsetWidth;
    const cardWidth = document.querySelector('.card').offsetWidth + 20; // margin
    visibleCards = Math.floor(containerWidth / cardWidth);
}

function updateCarousel() {
    const cardWidth = document.querySelector('.card').offsetWidth + 20;
    const maxIndex = cards.length - visibleCards;
    currentIndex = Math.min(currentIndex, maxIndex); // evitar espacio blanco
    carousel.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}

nextButton?.addEventListener('click', () => {
    const maxIndex = cards.length - visibleCards;
    if (currentIndex < maxIndex) {
        currentIndex++;
        updateCarousel();
    }
});

prevButton?.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    }
});

// Swipe en móviles
let startX = 0;
let isDragging = false;

carousel.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
    isDragging = true;
});

carousel.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    const currentX = e.touches[0].clientX;
    const diffX = startX - currentX;

    const maxIndex = cards.length - visibleCards;
    if (diffX > 50 && currentIndex < maxIndex) {
        currentIndex++;
        updateCarousel();
        isDragging = false;
    } else if (diffX < -50 && currentIndex > 0) {
        currentIndex--;
        updateCarousel();
        isDragging = false;
    }
});

carousel.addEventListener('touchend', () => {
    isDragging = false;
});

window.addEventListener('resize', () => {
    updateVisibleCards();
    updateCarousel();
});

window.addEventListener('load', () => {
    updateVisibleCards();
    updateCarousel();
});