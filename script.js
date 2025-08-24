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

let articulosContent = document.getElementById('articulos');
let articulos = articulosContent.querySelectorAll('article');
document.addEventListener('DOMContentLoaded', () =>{
    for (const articulo of articulos) {
            let articleList = articulo.classList;
            let svg = articulo.childNodes[3];
            let svgList = svg.classList;
            let children = articulo.children;
            articulo.addEventListener('click', () =>{
                    articleList.toggle('open');
                    svgList.toggle('open-svg')
                });
            for (const child of children) {
                
                console.log(child);
            
                child.addEventListener('click', () =>{
                    articleList.toggle('open');
                    svgList.toggle('open-svg')
                });
            }
    }
})
