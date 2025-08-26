let isHamburgerMenuOn = false;
let menu = document.getElementById('menu');
let menuB = document.getElementById('hIcon');
let menuBT = document.getElementById('hTop');
let menuBM = document.getElementById('hMid');
let menuBB = document.getElementById('hBot');
let imgDecor = document.getElementById('imgDecor');

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

function abrirTarjeta(articulo){
    var selection = window.getSelection();
    if (selection.type != 'Range') {
        
        articulo.classList.toggle('open');
        let svg = articulo.children[1];
        svg.classList.toggle('open-svg')
    }
}

document.addEventListener('DOMContentLoaded', () =>{
    imgDecor.addEventListener('click', () =>{
        this.classList.toggle('animation-stop')
    });
    imgDecor.addEventListener('touchstart', () =>{
        this.classList.toggle('animation-stop')
    });
});
