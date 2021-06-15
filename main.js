const slides = document.querySelectorAll('.slide');

for (const slide of slides) {
    slide.addEventListener('click', (e) => {
        clearActiveSlide();
        addActiveSlide(e);
    });
}

function addActiveSlide(e) {
    e.target.classList.add('active');
}

function clearActiveSlide() {
    slides.forEach((elem) => {
        elem.classList.remove('active');
    });
}