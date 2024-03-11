import menu from './module/menu'
menu()

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