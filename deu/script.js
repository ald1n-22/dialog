
gsap.registerPlugin(ScrollTrigger);
const nav = document.querySelector('.nav')
const navBtn = document.querySelector('.nav__btn')

navBtn.addEventListener('click', () => {
    navBtn.classList.toggle('active')
    nav.classList.toggle('active')
    if (nav.classList.contains('active')) {
        document.body.style.overflow = 'hidden'
    } else {
        document.body.style.overflow = 'auto'
    }
})

//animation 
const parent = document.querySelector('.help')
const content = document.querySelector('.help__content')
const contentImg = document.querySelectorAll('.help__img')

if (window.innerWidth > 1280) {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: parent,
            start: 'top top',
            end: 'bottom bottom',
            scrub: true,
        }
    })
    tl.to(content, {
        xPercent: -125
    })
    const tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: parent,
            start: 'top top',
            end: 'bottom bottom',
            scrub: true,
        }
    })
    contentImg.forEach(el => {
        tl2.to(el, {
            xPercent: 120
        })
    })
} else {
    var swiper = new Swiper('.help-mob__swiper', {
        slidesPerView: 'auto',
        spaceBetween: 30,
        centeredSlides: true,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

}
if (window.innerWidth < 577) {
    var workSwiper = new Swiper('.work__slider', {
        slidesPerView: 'auto',
        spaceBetween: 30,
        centeredSlides: true,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.step-study__wrap',
            start: 'top center',
            end: 'bottom center',
            scrub: true,
        }
    })
    tl.to('.step-study__progress-line-fill', {
        height: "100%"
    })
}





const stepItem = document.querySelectorAll('.step__row');

stepItem.forEach(item => {
    item.addEventListener('click', () => {
        stepItem.forEach(i => {
            if (i !== item) {
                i.classList.remove('active');
            }
        });

        item.classList.toggle('active');
    });
});
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
    pagination: {
        el: '.feedback-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});