let cursor = document.querySelector("#cursor");
let blurredCursor = document.querySelector("#blurred-cursor");
document.addEventListener("mousemove", function (posi) {
  cursor.style.left = posi.x - 15 + "px"; // cursor movement
  cursor.style.top = posi.y - 20 + "px";
  blurredCursor.style.left = posi.x - 150 + "px"; // blurred cursor movement
  blurredCursor.style.top = posi.y - 150 + "px";
});

gsap.to("#nav", {
  backgroundColor: "black",
  duration: 0.2,
  height: "120px",
  scrollTrigger: {
    trigger: "#nav", // nav bar animation
    scroller: "body",
    markers: true,
    start: "top 0%",
    end: "top -10%",
    scrub: 1,
  },
});

let navElement = document.querySelectorAll("#nav h4");
navElement.forEach(function (element) {
  element.addEventListener("mouseenter", function () {
     //transforming cursor while hovering on navigation bar lists
    cursor.style.scale = 3;
    cursor.style.backgroundColor = "transparent";
    cursor.style.border = "1px solid white";
    cursor.style.transition = "all 0.5s ease";
  });
});
navElement.forEach(function (element) {
  element.addEventListener("mouseleave", function () {
    //transforming back cursor while hovering on navigation bar lists
    cursor.style.scale = 1;
    cursor.style.backgroundColor = "#95c11e";
    cursor.style.border = "0px solid #95c11e";
    cursor.style.transition = "none";
  });
});

gsap.to("#main", {
  backgroundColor: "black",
  duration: 2,
  scrollTrigger: {
    trigger: "#main", //main getting blurred
    scroller: "body",
    start: "top 0%",
    end: "top -100%",
    scrub: 2,
  },
});

gsap.from("#page2-about-us img, #page2-about-us #page2-about-us-content", {
  y: 50,
  opacity: 0,
  duration: 1,
  stagger: 0.5, //adding animation on ABOUT US section
  scrollTrigger: {
    trigger: "#page2-about-us img, #page2-about-us #page2-about-us-content",
    scroller: "body",
    start: "top 70%",
    end: "top 100%",
    scrub: 2,
  },
});

gsap.from("#page2-green-section", {
  x: -2000,
  duration: 0.5,
  scrollTrigger: {
    trigger: "#page2-green-section", //adding animation on green-section
    scroller: "body",
    // markers:true,
    start: "top 70%",
    end: "top 60%",
    scrub: 3,
  },
});
gsap.from("#page2-card-1", {
  x: -700,
  scale: 0,
  duration: 0.1,
  scrollTrigger: {
    trigger: "#page2-card-1", //adding animation on card-1
    scroller: "body",
    // markers:true,
    start: "top 100%",
    end: "top 80%",
    scrub: 0,
  },
});
gsap.from("#page2-card-2", {
  scale: 0,
  duration: 0.1,
  scrollTrigger: {
    trigger: "#page2-card-2", //adding animation on card-2
    scroller: "body",
    // markers: true,
    start: "top 100%",
    end: "top 50%",
    scrub: 0,
  },
});
gsap.from("#page2-card-3", {
  x: 700,
  scale: 0,
  duration: 0.1,
  scrollTrigger: {
    trigger: "#page2-card-3", //adding animation on card-3
    scroller: "body",
    // markers:true,
    start: "top 100%",
    end: "top 80%",
    scrub: 0,
  },
});


gsap.from("#colon-1", {
  x: -70,
  y:-100,
  duration: 1,
  scrollTrigger: {
    trigger: "#colon-1", //adding animation on colon-1
    scroller: "body",
    // markers:true,
    start: "top 100%",
    end: "top 60%",
    scrub: 3,
  },
});
gsap.from("#colon-2", {
  x: 70,
  y:100,
  duration: 1,
  scrollTrigger: {
    trigger: "#colon-2", //adding animation on colon-1
    scroller: "body",
    // markers:true,
    start: "top 100%",
    end: "top 60%",
    scrub: 3,
  },
});
gsap.from("#page-4 h1", {
  y:70,
  duration: 2,
  scrollTrigger: {
    trigger: "#page-4 h1", //adding animation on page 4 heading (h1)
    scroller: "body",
    markers:true,
    start: "top 100%",
    end: "top 90%",
    scrub: 2,
  },
});


let page4Box = document.querySelectorAll(".page4-box");

page4Box.forEach(function (element) {
  element.addEventListener("mouseenter", function () {
     //transforming cursor while hovering on page-4 boxes
    cursor.style.scale = 3;
    cursor.style.backgroundColor = "transparent";
    cursor.style.border = "1px solid white";
    cursor.style.transition = "all 0.5s ease";
  });
});

page4Box.forEach(function (element) {
  element.addEventListener("mouseleave", function () {
    //transforming back cursor while hovering on page-4 boxes
    cursor.style.scale = 1;
    cursor.style.backgroundColor = "#95c11e";
    cursor.style.border = "0px solid #95c11e";
    cursor.style.transition = "none";
  });
});












