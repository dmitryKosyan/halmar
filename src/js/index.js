import menu from './module/menu'
menu()

const swiper = new Swiper('.swiper', {


    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

const battons = document.querySelectorAll('.gallery__btn')

const gallaryItems = document.querySelector('.gallery__inner')
const www = gallaryItems.querySelectorAll('.gallery__items')

battons.forEach(el => {

    el.addEventListener('click', () => {
        battons.forEach(item => {
            item.classList.remove('active__btn')
        })

        el.classList.add('active__btn')
        www.forEach(elem => {
            elem.classList.remove('active')
            if (el.id === elem.id) {
                elem.classList.add('active')

            }
        })
    })
});
function gsapAnimation() {
    const tl = gsap.timeline();
    tl.fromTo('.menu__list li', {
        y: -50,
        opacity: 0,
    }, {
        y: 0,
        opacity: 1,
        stagger: 0.15
    },
        0.5
    ).fromTo('.header__logo', {
        y: -50,
        opacity: 0,
    }, {
        y: 0,
        opacity: 1,
        stagger: 0.15
    })

    gsap.registerPlugin(ScrollTrigger);


    gsap.from('.colection__title', {
        scrollTrigger: {
            trigger: '.colection',
            start: '-150% center',
            and: ' +50% center',
            scrub: 3,

        },
        y: -0,
        scale: 0,
        duration: 1
    })

    gsap.from('.decor__title', {
        scrollTrigger: {
            trigger: '.colection__inner',

            start: 'top ',
            and: ' +=10px',
            scrub: 1,
        },
        scale: 0,

        duration: 1,
    })
    gsap.from('.decor__text', {
        scrollTrigger: {
            trigger: '.colection',

            start: 'top',
            and: ' center',
            scrub: 1,
        },
        scale: 0,
        y: 150,
        duration: 1,
    })
    gsap.from('.blog-box__title', {
        scrollTrigger: {
            trigger: '.gallery__inner ',
            start: ' top',
            end: 'center',
            scrub: 2,
        },
        y: -100,
        opacity: 0
    })
}

if (window.innerWidth < 640) {
    gsapAnimation = false

} else {
    gsapAnimation()
}
