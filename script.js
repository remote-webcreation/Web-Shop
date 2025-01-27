const header = document.querySelector("header");

window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", window.scrollY > 0);
});

//  toggle menu
let menu = document.querySelector('#menu-icon');

let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('navlist-open');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('navlist-open');
}