let isHamburgerMenuOn = false;
let menu = document.getElementById('menu');
let menuB = document.getElementById('hIcon');
let menuBT = document.getElementById('hTop');
let menuBM = document.getElementById('hMid');
let menuBB = document.getElementById('hBot');

function hamburgerMenu() {
    isHamburgerMenuOn = (isHamburgerMenuOn) ? false: true;
    if (isHamburgerMenuOn) {
        menuBM.style.opacity = 0;
        menuBT.style.rotate = "45deg";
        menuBB.style.rotate = "-45deg";
        menu.style.display = "block";
        menu.style.animation = "slideNav 100ms ease-in-out both "
    } else {
        menuBM.style.opacity = 1;
        menuBT.style.rotate = "0deg";
        menuBB.style.rotate = "0deg";
        menu.style.animation = "slideNav 100ms ease-in-out reverse"
        menu.style.display = "none";
    }
}