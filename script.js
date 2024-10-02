

// gsap.registerPlugin(ScrollTrigger);

// // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

// const locoScroll = new LocomotiveScroll({
//   el: document.querySelector(".main"),
//   smooth: true
// });
// // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
// locoScroll.on("scroll", ScrollTrigger.update);

// // tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
// ScrollTrigger.scrollerProxy(".main", {
//   scrollTop(value) {
//     return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
//   }, // we don't have to define a scrollLeft because we're only scrolling vertically.
//   getBoundingClientRect() {
//     return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
//   },
//   // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
//   pinType: document.querySelector(".smooth-scroll").style.transform ? "transform" : "fixed"
// });

// // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
// ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
// ScrollTrigger.refresh();

// function Cursor_Effect(){
//     var page1Content = document.querySelector(".page1-content")
// var cursor = document.querySelector(".cursor")

// page1Content.addEventListener("mousemove",function(dets){
//     // cursor.style.left = dets.x + 'px';
//     // cursor.style.top = dets.y + 'px';
//     gsap.to(".cursor",{
//         x:dets.x,
//         y:dets.y
//     })

// })
// page1Content.addEventListener("mouseenter",function(dets){
//     gsap.to(".cursor",{
//         scale:1
//     })
// })
// page1Content.addEventListener("mouseleave",function(dets){
//     gsap.to(".cursor",{
//         scale:0
//     })
// })
//  }
//  Cursor_Effect();

// function page2_Animation(){
//     gsap.from(".content h1",{
//         y:120,
//         stagger:0.2,
//         duration:2,
//         scrollTrigger:{
//             trigger:".page2",
//             scroller:"main",
//             start:"top 47%",
//             end : "top 46%",
//             // markers:"true",
//             scrub:2,
    
//         }
//      })
// }
// page2_Animation();

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Initialize Locomotive Scroll
const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});

// Synchronize Locomotive Scroll with ScrollTrigger
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  },
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});

// Refresh and update both Locomotive Scroll and ScrollTrigger after initialization
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();

// Cursor Animation
function Cursor_Effect() {
  const cursor = document.querySelector(".cursor");
  const page1Content = document.querySelector(".page1-content");

  // Move cursor based on mouse position
  document.addEventListener("mousemove", function (dets) {
    gsap.to(cursor, {
      x: dets.clientX,
      y: dets.clientY,
      ease: "power2.out"
    });
  });

  // Scale cursor on mouse enter
  page1Content.addEventListener("mouseenter", function () {
    gsap.to(cursor, { scale: 1 });
  });

  // Scale cursor down on mouse leave
  page1Content.addEventListener("mouseleave", function () {
    gsap.to(cursor, { scale: 0 });
  });
}

// Initialize the cursor animation
Cursor_Effect();

// Page 2 Content Animation (ScrollTrigger-based)
// Page 2 Content Animation (ScrollTrigger-based)
function page2_Animation() {
  gsap.from(".part1 nav", {
      y: 120,
      stagger: 1,
      duration: 1,
      ease: "power3.out",
      delay: 2,
      scrollTrigger: {
        trigger: ".page2",
        scroller: ".main", // Use the correct scroller (Locomotive Scroll container)
        start: "top 70%",  // Adjusted trigger point
        end: "top 50%",
        scrub: 2,
        // markers: true, // Uncomment to visualize the trigger points for debugging
      }
    });
gsap.from(".page2 .content h1", {
  y: 120,
  stagger: 1,
  duration: 1,
  ease: "power3.out",
  delay: 2,
  scrollTrigger: {
    trigger: ".page2",
    scroller: ".main", // Use the correct scroller (Locomotive Scroll container)
    start: "top 70%",  // Adjusted trigger point
    end: "top 50%",
    scrub: 2,
    // markers: true, // Uncomment to visualize the trigger points for debugging
  }
});
}

// Initialize the page 2 animation
page2_Animation();

// Page 4 Content Animation (ScrollTrigger-based)
function page4_animation() {
gsap.from(".page4 .part1 #page4nav", { // Ensure correct selector for page4nav
  y: 150,
  stagger: 1,
  duration: 1,
  ease: "power3.out",
  delay: 2,
  scrollTrigger: {
    trigger: ".page4", 
    scroller: ".main", // Use the correct scroller (Locomotive Scroll container)
    start: "top 70%",  // Adjusted trigger point
    end: "top 50%",
    scrub: 2,
    // markers: true, // Uncomment to visualize the trigger points for debugging
  }
});

gsap.from(".page4 .content h1", { // Ensure the correct selector for content h1
  y: 120,
  stagger: 0.2,
  duration: 0,
  ease: "power3.out",
  delay: 2,
  scrollTrigger: {
    trigger: ".page4", 
    scroller: ".main", // Use the correct scroller (Locomotive Scroll container)
    start: "top 70%",  // Adjusted trigger point
    end: "top 50%",
    scrub: 2,
    // markers: true, // Uncomment to visualize the trigger points for debugging
  }
});
}

// Initialize the page 4 animation
page4_animation();

function page6_animation(){


gsap.from(".part1 nav", {
  y: 120,
  stagger: 1,
  duration: 0,
  ease: "power3.out",
  delay: 0,
  scrollTrigger: {
    trigger: ".page6",
    scroller: ".main", // Use the correct scroller (Locomotive Scroll container)
    start: "top 70%",  // Adjusted trigger point
    end: "top 50%",
    scrub: 2,
    // markers: true, // Uncomment to visualize the trigger points for debugging
  }
});
gsap.from(".page6 .content h1", {
y: 120,
stagger: 1,
duration: 1,
ease: "power3.out",
delay: 2,
scrollTrigger: {
trigger: ".page6",
scroller: ".main", // Use the correct scroller (Locomotive Scroll container)
start: "top 70%",  // Adjusted trigger point
end: "top 50%",
scrub: 2,
// markers: true, // Uncomment to visualize the trigger points for debugging
}
});
}

page6_animation();

function slider_animation(){


var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 60,
  duration:1,
  loop: true,
  autoplay: {
    delay: 1000,
    disableOnInteraction: true,
  },
  speed:1500,
});
}
slider_animation();

var tl = gsap.timeline();
tl.from(".loader h3",{
  x:50,
  opacity:0,
  duration:1,
  stagger:0.1,

})
tl.to(".loader h3",{
  opacity:0,
  x:-10,
  duration:1,
  stagger:-0.1,

})
tl.to(".loader",{
  duration:0.5,
  // y:"-100%",
  display:"none",

})
tl.from(".page1-content h1 span",{
  y:100,
  opacity:0,
  stagger:0.1,
  duration:1,

})
gsap.from(".page9 .left h1 span",{
  y:100,
  opacity:0,
  stagger:1,
})