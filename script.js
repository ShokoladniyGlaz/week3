// Получаем элементы слайдера
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const slider = document.querySelector('.slider');
const slides = Array.from(slider.querySelectorAll('.slide'));
const slider_indicators = document.querySelector('.slider_indicators');
const indicators = Array.from(slider_indicators.querySelector('.indicator'));
const slideCount = slides.length;
const indicatorCount = indicators.length;
let slideIndex = 0;
let indicatorIndex = 0;

// Устанавливаем обработчики событий для кнопок
prevButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);

// Функция для показа предыдущего слайда
function showPreviousSlide() {
  slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  indicatorIndex = (indicatorIndex - 1 + indicatorCount) % indicatorCount;
  thisSlide();
  updateSlider();
}

// Функция для показа следующего слайда
function showNextSlide() {
  slideIndex = (slideIndex + 1) % slideCount;
  indicatorIndex = (indicatorIndex + 1) % indicatorCount;
  thisSlide();
  updateSlider();
}

//Индикаторы
function thisSlide(){
    indicators.forEach((indicator, index) => {
        if (index === indicatorIndex) {
          indicator.style.opacity = "1";
        } else {
          indicator.style.opacity = "0.5";
        }
      });
}

// Функция для обновления отображения слайдера
function updateSlider() {
  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

// Инициализация слайдера
thisSlide();
updateSlider();