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

// Устанавливаем обработчики событий для кнопок
prevButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);

// Функция для показа предыдущего слайда
function showPreviousSlide() {
    slideIndex = (slideIndex - 1 + slideCount) % slideCount;
    updateSlider();
    thisSlide();
}

// Функция для показа следующего слайда
function showNextSlide() {
    slideIndex = (slideIndex + 1) % slideCount;
    updateSlider();
    thisSlide();
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

//Индикаторы
function thisSlide() {
    indicators.forEach((indicator, index) => {
        if (index !== slideIndex) {
            indicator.style.opacity = "0.5";
        } else {
            indicator.style.opacity = "1";
        }
    });
}
// Инициализация слайдера
updateSlider();
thisSlide();