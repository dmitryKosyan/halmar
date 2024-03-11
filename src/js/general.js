import menu from './module/menu'
menu()
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