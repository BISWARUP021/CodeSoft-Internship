// let typingEffect = new Typed(".multiText",{
//     strings:["FRONT-END DEVELOPER","CODER"],
//     loop: true,
//     typeSpeed:150,
//     backSpeed:150
// })

let preloader = document.getElementById("preloader");
window.addEventListener("load", function () {
  preloader.style.display = "none";
});

let cursor = document.querySelector("#cursor");
document.addEventListener("mousemove", function (posi) {
  cursor.style.left = posi.x - 11.7 + "px"; // cursor movement
  cursor.style.top = posi.y - 10 + "px";
});

gsap.from("#nav-logo, .nav-list", {
  y: -100,
  duration: 0.3,
  stagger: 0.1,
});

let navbar = document.getElementById("nav-bar");
let navList = document.getElementsByClassName("nav-list");

function changeNav() {
  if (window.scrollY > 660) {
    console.log("hello");
    navbar.classList.add("active1");
    // console.log("hello2");
    // for (let i = 0; i < navList.length; i++) {
    // navList[i].classList.add("listCol");
    // }
  } else {
    // console.log("hello3");
    navbar.classList.remove("active1");
    // for (let i = 0; i < navList.length; i++) {
    //   navList[i].classList.remove("listCol");
    // }
  }

  if (window.scrollY > 1500) {
    navbar.classList.add("active2");
  } else {
    navbar.classList.remove("active2");
  }

  if (window.scrollY > 3447) {
    navbar.classList.add("active3");
    // for (let i = 0; i < navList.length; i++) {
    // navList[i].classList.add("listCol");
    // }
  } else {
    navbar.classList.remove("active3");
    // for (let i = 0; i < navList.length; i++) {
    // navList[i].classList.remove("listCol");
    // }
  }
}

window.addEventListener("scroll", changeNav);










// Hamburger
let hamburger = document.getElementById("hamburger");
let navLists = document.getElementById("nav-lists");
hamburger.addEventListener("click", function(){
  console.log("clicked")
  navLists.classList.toggle("active");
})


















// Page 1 animation
gsap.from("#page1-content", {
  y: 500,
  opacity: 0,
  duration: 0.4,
});

//**********Page 2 animation*****************

// gsap.from("#page-2",{
//     scale:0,
//     scrollTrigger:{
//         trigger: "#page-2",
//         scroller:"body",
//         // markers:true,
//         start: "top 100%",
//         end : "top 100%",

//     }
// })

gsap.from("#page2-heading", {
  scale: 0,
  opacity: 0,
  scrollTrigger: {
    trigger: "#page2-heading",
    scroller: "body",
    start: "top 100%",
    end: "top 90%",
    scrub: 1,
  },
});

gsap.from("#page2-left h3 , #page2-left p, #page2-left a", {
  x: -500,
  scrollTrigger: {
    trigger: "#page2-left h3 , #page2-left p, #page2-left a",
    scroller: "body",
    // markers:true,
    start: "top 90%",
    end: "top 60%",
    scrub: 1,
  },
});
gsap.from("#my-skills", {
  x: 500,
  scrollTrigger: {
    trigger: "#my-skills",
    scroller: "body",
    start: "top 100%",
    end: "top 90%",
    scrub: 1,
  },
});
gsap.from("#page2-right-skills p", {
  y: 150,
  scale: 0,
  stagger: 0.1,
  scrollTrigger: {
    trigger: "#page2-right-skills p",
    scroller: "body",
    // markers: true,
    start: "top 100%",
    end: "top 100%",
    scrub: 1,
  },
});
gsap.from("#projectBtn", {
  y: 150,
  scale: 0,
  scrollTrigger: {
    trigger: "#projectBtn",
    scroller: "body",
    // markers: true,
    start: "top 100%",
    end: "top 100%",
    scrub: 1,
  },
});

// Page 3 animation
gsap.from("#page3-heading, page3-line", {
  opacity: 0,
  scale: 0,

  scrollTrigger: {
    trigger: "#page3-heading, page3-line",
    scroller: "body",
    // markers:true,
    start: "top 100%",
    end: "top 90%",
    scrub: 1,
  },
});
gsap.from("#page3-project-imageSearchApp", {
  x: 1000,
  scrollTrigger: {
    trigger: "#page3-project-imageSearchApp",
    scroller: "body",
    // markers:true,
    start: "top 80%",
    end: "top 50%",
    scrub: 1,
  },
});
gsap.from("#page3-project-websiteClone", {
  x: -1000,
  scrollTrigger: {
    trigger: "#page3-project-websiteClone",
    scroller: "body",
    // markers:true,
    start: "top 80%",
    end: "top 50%",
    scrub: 1,
  },
});
gsap.from("#page3-project-snakegame", {
  x: 1000,
  scrollTrigger: {
    trigger: "#page3-project-snakegame",
    scroller: "body",
    // markers:true,
    start: "top 80%",
    end: "top 50%",
    scrub: 1,
  },
});
gsap.from("#page3-project-alarmClock", {
  x: -1000,
  scrollTrigger: {
    trigger: "#page3-project-alarmClock",
    scroller: "body",
    // markers:true,
    start: "top 80%",
    end: "top 50%",
    scrub: 1,
  },
});

// Page 4 animation
gsap.from("#page-4", {
  scale: 0,
  scrollTrigger: {
    trigger: "#page-4",
    scroller: "body",
    // markers:true,
    start: "top 100%",
    end: "top 90%",
    scrub: 1,
  },
});

// Receiving form response

const scriptURL =
  "https://script.google.com/macros/s/AKfycbzNOaQ0NRI4Unqf01ZNTSjvof2N6xY9zw02rG-r-INYnr6W88yIKuPgdOQhwmMWlwt5/exec";
const form = document.forms["google-sheet"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) =>
      alert("Thanks for Contacting us..! We Will Contact You Soon...")
    )
    .catch((error) => console.error("Error!", error.message));
});
