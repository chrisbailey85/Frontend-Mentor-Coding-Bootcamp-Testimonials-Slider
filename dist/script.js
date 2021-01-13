const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const slideOne = document.querySelector('.slide-one');
const slideTwo = document.querySelector('.slide-two');
next.addEventListener('click', function () {
    if (slideOne.classList[2] === 'active') {
        slideOne.classList.remove('active');
        slideTwo.classList.add('active');
    }
})
prev.addEventListener('click', function () {
    if (slideTwo.classList[2] === 'active') {
        slideTwo.classList.remove('active');
        slideOne.classList.add('active');
    }
})