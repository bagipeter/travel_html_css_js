const menu_btn = document.getElementById("menu_btn");

const nav_links = document.getElementById("nav_links");

const menu_icon = menu_btn.querySelector("i");

menu_btn.addEventListener("click", (e) => {
    nav_links.classList.toggle("open")
});