const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const slideOne = document.querySelector('.slide-one');
const slideTwo = document.querySelector('.slide-two');
next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

window.addEventListener('keyup', (e) => {
    console.log(e.code)
    if (e.code === 'ArrowRight') {
        nextSlide();
    } else if (e.code === 'ArrowLeft') {
        prevSlide();
    }
});

function nextSlide() {
    if (slideOne.classList[2] === 'active') {
        slideOne.classList.remove('active');
        slideTwo.classList.add('active');
    }
}

function prevSlide() {
    if (slideTwo.classList[2] === 'active') {
        slideTwo.classList.remove('active');
        slideOne.classList.add('active');
    }
}