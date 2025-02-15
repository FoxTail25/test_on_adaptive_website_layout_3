			
const btn = document.querySelector(".mobil_menu_btn");
const mobil_menu = document.querySelector(".mobil_menu");
const logo = document.querySelector(".logo");
let menu_open = false; 
btn.addEventListener('click', open_and_close_mobil_menu);
logo.addEventListener('click', ()=> {
    menu_open = true;
    open_and_close_mobil_menu();
})

function open_and_close_mobil_menu () {
    if(!menu_open) {
        mobil_menu.style.display = "flex";
        menu_open = true;
        btn.style.background = "url(./img/icons/mobil_menu_close.svg";
    } else {
        mobil_menu.style.display = "none";
        menu_open = false;
        btn.style.background = "url(./img/icons/gg_menu-left.svg)";
    }
}

[...mobil_menu.children].forEach(e => {
    e.addEventListener('click', open_and_close_mobil_menu)
})
