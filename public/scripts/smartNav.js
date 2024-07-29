// import gsap from "gsap";

// let previousScrollPosition = 0;

// const isScrollingDown = () => {
//   const currentScrolledPosition = window.scrollY || window.pageYOffset;
//   let scrollingDown;

//   currentScrolledPosition > previousScrollPosition
//     ? (scrollingDown = true)
//     : (scrollingDown = false);

//   previousScrollPosition = currentScrolledPosition;

//   return scrollingDown;
// };

// const handleNavScroll = () => {
//   const nav = document.querySelector(".navigation");

//   if (isScrollingDown()) {
//     nav.classList.add("scroll-down");
//     nav.classList.remove("scroll-up");
//   } else {
//     nav.classList.add("scroll-up");
//     nav.classList.remove("scroll-down");
//   }
// };

// let throttleWait;

// const throttle = (callback, time) => {
//   if (throttleWait) return;

//   throttleWait = true;

//   setTimeout(() => {
//     callback();

//     throttleWait = false;
//   }, time);
// };

// window.addEventListener("scroll", handleNavScroll);

// page loader logic
