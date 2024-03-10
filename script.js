// Получаем элементы слайдера
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const wrapper = document.querySelector('.slider-container')
const slidesField = document.querySelector('.slider');
const slides = slidesField.querySelectorAll(".slide");
const dotParent = document.querySelector('.slider_indicators');
const dots = dotParent.querySelectorAll(".indicator");
const width = window.getComputedStyle(wrapper).width;
let slideIndex = 1;
let offset = 0

slidesField.style.width = slides.length * 100 + '%';
slidesField.style.display = 'flex'
slidesField.style.transition = 'all .5s'

dots.forEach((item) => {
    item.style.opacity = "0.5";
});
dots[slideIndex - 1].style.opacity = "1";
prevButton.addEventListener('click', () => {
    if (offset !== 0) {
        offset -= +width.slice(0, (width.length - 2));
        slideIndex--;
    } else {
        offset = +width.slice(0, width.length - 2) * (slides.length - 1);
        slideIndex = slides.length;
    }
    slidesField.style.transform = `translateX(-${offset}px)`
    dots.forEach((item) => {
        item.style.opacity = "0.5";
    });
    dots[slideIndex - 1].style.opacity = "1";
})
nextButton.addEventListener('click', () => {
    if (offset === +width.slice(0, width.length - 2) * (slides.length - 1)) {
        offset = 0
        slideIndex = 1;
    } else {
        offset += +width.slice(0, width.length - 2);
        slideIndex++;
    }
    slidesField.style.transform = `translateX(-${offset}px)`

    dots.forEach(item => {
        item.style.opacity = '0.5'
    });
    dots[slideIndex - 1].style.opacity = '1'
})