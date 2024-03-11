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
}).fromTo('.about__title', {
    y: 0,
    opacity: 0,
}, {
    y: 0,
    opacity: 1,
    stagger: 0.15
})





gsap.registerPlugin(ScrollTrigger);
gsap.from('.about__content-title ', {
    scrollTrigger: {
        trigger: '.about__top',
        start: 'top',
        and: '+50% center',
        scrub: 1,
    },
    x: -550,
    duration: 4,
    stagger: 0.15
})
gsap.from('.about__text', {
    scrollTrigger: {
        trigger: '.about__top',
        start: 'top',
        and: ' +50% center',
        scrub: 1,
    },
    x: 550,
    duration: 4,
    stagger: 0.15
})

gsap.from(".insperation__line", {
    scrollTrigger: ".insperation__line", // same as scrollTrigger: {trigger: ".line-1", toggleActions: "play none none none", start: "top bottom", end: "bottom top"}
    scaleX: 0,
    duration: 1,
    transformOrigin: "left center",
    ease: "none"
});
gsap.from('.colection__title', {
    scrollTrigger: {
        trigger: '.partners__inner ',
        start: 'top bottom',
        end: 'center',
        scrub: 2,
    },

    scale: 0,
    duration: 4,
})