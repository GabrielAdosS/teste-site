let navbar = false
const nav = document.getElementById("nav");

function openNav() {
    navbar = true
    if (navbar) {
        nav.style.marginLeft = '-280px';
    }    
}

function closeNav() {
    navbar = false;
    if (!navbar) {
        nav.style.marginLeft = '-735px';
    }
}