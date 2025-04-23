const navHeader = document.getElementById('nav-header');
const navList = document.getElementById('list-nav');
const btnOpen = document.getElementById('btn-open');
const btnClose = document.getElementById('btn-close');
const body = document.querySelector('body');

btnOpen.addEventListener(onclick, menu)

let valor = true;

function menu(){
    if(valor){
        valor = false;
        navList.classList.add('style-menu-cell');
        navHeader.style.display = 'block';
        btnOpen.style.display = 'none';
        btnClose.style.display = 'block';
        body.style.overflow = 'hidden';
    } else {
        valor = true;
        navList.classList.remove('style-menu-cell');
        navHeader.style.display = 'none';
        btnOpen.style.display = 'block';
        btnClose.style.display = 'none';
        body.style.overflow = 'visible';
    }
}