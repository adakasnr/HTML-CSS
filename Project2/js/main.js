const menuButton = document.querySelector('.menu-button');
const hamburgger = document.querySelector('.menu-button__burgger');
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.nav__item');


let showMenu = false;

menuButton.addEventListener('click', toggleMenu)

function toggleMenu() {
    if (!showMenu) {
        hamburgger.classList.add('open');
        nav.classList.add('open');
        menuNav.classList.add('open');
        navItems.forEach(item => item.classList.add('open'));

        showMenu = true;
    } else {
        hamburgger.classList.remove('open');
        nav.classList.remove('open');
        menuNav.classList.remove('open');
        navItems.forEach(item => item.classList.remove('open'));

        showMenu = false;
    }
}