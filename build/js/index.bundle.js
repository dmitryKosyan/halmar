!function(){"use strict";(()=>{const e=document.querySelector(".header__btn-menu"),t=document.querySelector(".modal");e.addEventListener("click",(()=>{t.classList.toggle("open"),console.log(t)}))})(),new Swiper(".swiper",{autoplay:{delay:2500,disableOnInteraction:!1},pagination:{el:".swiper-pagination",clickable:!0}});const e=document.querySelectorAll(".gallery__btn"),t=document.querySelector(".gallery__inner").querySelectorAll(".gallery__items");function r(){gsap.timeline().fromTo(".menu__list li",{y:-50,opacity:0},{y:0,opacity:1,stagger:.15},.5).fromTo(".header__logo",{y:-50,opacity:0},{y:0,opacity:1,stagger:.15}),gsap.registerPlugin(ScrollTrigger),gsap.from(".colection__title",{scrollTrigger:{trigger:".colection",start:"-150% center",and:" +50% center",scrub:3},y:-0,scale:0,duration:1}),gsap.from(".decor__title",{scrollTrigger:{trigger:".colection__inner",start:"top ",and:" +=10px",scrub:1},scale:0,duration:1}),gsap.from(".decor__text",{scrollTrigger:{trigger:".colection",start:"top",and:" center",scrub:1},scale:0,y:150,duration:1}),gsap.from(".blog-box__title",{scrollTrigger:{trigger:".gallery__inner ",start:" top",end:"center",scrub:2},y:-100,opacity:0})}e.forEach((r=>{r.addEventListener("click",(()=>{e.forEach((e=>{e.classList.remove("active__btn")})),r.classList.add("active__btn"),t.forEach((e=>{e.classList.remove("active"),r.id===e.id&&e.classList.add("active")}))}))})),window.innerWidth<640?r=!1:r()}();