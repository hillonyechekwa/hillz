import { gsap } from "gsap";

function pageTransition() {
  const overlay = document.getElementById("transition-overlay")
  const content = document.getElementById("page-content")
  
  const tl = gsap.timeline();

  tl.to(overlay, {
    duration: 0.089,
    scaleY: 1,
    ease: "power2.out",
  });

  tl.to(content, {
    duration: 0.1,
    opacity: 0,
    ease: "none",
  }, '>-0.1');

  tl.to(overlay, {
    duration: 0.089,
    scaleY: 0,
    transformOrigin: 'bottom',
    ease: 'power2.inOut'
  }, '+=0.1')

  tl.to(content, {
    duration: 0.1,
    opacity: 1,
    ease: 'none'
  }, '<')

  console.log("page transitioning....");
}

document.addEventListener("astro:before-preparation", pageTransition);
