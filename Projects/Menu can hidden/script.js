const nav = document.querySelector('.nav');
const vMenu = document.querySelector('.visible-menu');
const hMenu = document.querySelector('.hidden-menu');
const burger = document.querySelector('.burger');
const burgerCount = document.querySelector('.burger-count');
const breaks = [];

function updateNav() {
    let navWidth = burger.classList.contains('hidden') ? nav.offsetWidth : nav.offsetWidth - burger.offsetWidth;
    let vMenuWidth = vMenu.offsetWidth; 
    if(vMenuWidth > navWidth) {
        breaks.push(vMenuWidth);
        hMenu.prepend(vMenu.lastElementChild);
        burger.classList.remove('hidden');
        burgerCount.innerText = breaks.length;
        updateNav();
    } else {
        if (navWidth > breaks[breaks.length - 1]) {
            breaks.pop();
            vMenu.append(hMenu.firstElementChild);
            burgerCount.innerText = breaks.length;
        }
        if (breaks.length < 1) {
            burger.classList.add('hidden');
            hMenu.classList.remove('active');
        }
    }
}

burger.addEventListener('click', function() {
    hMenu.classList.toggle('active');
    burger.classList.toggle('active');
});

window.addEventListener('resize', updateNav);
document.addEventListener('DOMContentLoaded', updateNav);