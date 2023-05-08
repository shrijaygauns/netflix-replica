// Toggle mobile navigation
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});

// Search function
const searchForm = document.querySelector('.search-form');
const searchInput = document.querySelector('.search-input');

searchForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const searchTerm = searchInput.value.trim();
  if (searchTerm.length > 0) {
    alert(`You searched for "${searchTerm}"`);
    searchInput.value = '';
  }
});

// Carousel
const carousel = document.querySelector('.carousel');
const carouselItems = document.querySelectorAll('.carousel-item');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
let currentItem = 0;

function showItem() {
  carouselItems.forEach(item => item.classList.remove('active'));
  carouselItems[currentItem].classList.add('active');
}

function prevItem() {
  currentItem--;
  if (currentItem < 0) {
    currentItem = carouselItems.length - 1;
  }
  showItem();
}

function nextItem() {
  currentItem++;
  if (currentItem > carouselItems.length - 1) {
    currentItem = 0;
  }
  showItem();
}

prevButton.addEventListener('click', prevItem);
nextButton.addEventListener('click', nextItem);

// Automatically advance carousel every 5 seconds
setInterval(() => {
  nextItem();
}, 5000);
