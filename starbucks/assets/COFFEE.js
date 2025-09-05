let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
  navbar.classList.toggle('active');
  menu.classList.toggle('fa-xmark'); 
};

let navLinks = document.querySelectorAll('.navbar a');
navLinks.forEach(link => {
  link.onclick = () => {
    navbar.classList.remove('active'); 
    menu.classList.remove('fa-xmark'); 
  };
});
