const words = ["Frontend Developer", "WordPress", "Blockchain Developer", "Web Designer", "Content Creator"];
const el = document.querySelector(".text-animation");
let i = 0;      
let j = 0;      
let currentWord = "";
let isDeleting = false;
let speed = 150; 

function type() {
  if (i >= words.length) i = 0;
  currentWord = words[i];

  if (!isDeleting) {
    el.textContent = currentWord.slice(0, j + 1);
    j++;
    if (j === currentWord.length) {
      isDeleting = true;
      setTimeout(type, 1000); 
      return;
    }
  } else {
    el.textContent = currentWord.slice(0, j - 1);
    j--;
    if (j === 0) {
      isDeleting = false;
      i++;
    }
  }
  setTimeout(type, speed);
}

type();


let menu = document.querySelector("#menu");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

let sections = document.querySelectorAll("section");
let navlinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navlinks.forEach(link => {
        link.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);

  menu.classList.remove("bx-x");
  navbar.classList.remove("active");
};
