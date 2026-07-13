
gsap.registerPlugin(ScrollTrigger);
const nav = document.querySelector('.nav')
const navBtn = document.querySelector('.nav__btn')

navBtn.addEventListener('click', () => {
    navBtn.classList.toggle('active')
    nav.classList.toggle('active')
})

//animation 
const parent = document.querySelector('.help')
const content = document.querySelector('.help__content')



const tl = gsap.timeline({
    scrollTrigger: {
        trigger: parent,
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
    }
})
tl.to(content, {
    xPercent: -120
})





const items = document.querySelectorAll('.faq__item');

items.forEach(item => {
    const question = item.querySelector('.faq__question');

    question.addEventListener('click', () => {

        items.forEach(i => {
            if (i !== item) {
                i.classList.remove('active');
            }
        });

        item.classList.toggle('active');
    });
});



var swiper = new Swiper('.feedback-slider', {
    slidesPerView: 'auto',
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});