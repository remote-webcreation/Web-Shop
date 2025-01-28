// Header sticky

const header = document.querySelector("header");

window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", window.scrollY > 0);
});



//  toggle menu
let menu = document.querySelector('#menu-icon');

let navlist = document.querySelector('.navlist');

// on click

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('navlist-open');
}

// on scroll

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('navlist-open');
}