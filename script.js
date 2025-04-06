const menu_btn = document.getElementById("menu_btn");
const nav_links = document.getElementById("nav_links");
const menu_i_tag = document.querySelector("i");

menu_btn.addEventListener("click", (e) => {
  nav_links.classList.toggle("open");

  const is_open = nav_links.classList.contains("open");

  menu_i_tag.setAttribute(
    "class",
    is_open ? "ri-close-line" : "ri-menu-3-line"
  );
});

nav_links.addEventListener("click", (e) => {
  nav_links.classList.remove("open");
  menu_i_tag.setAttribute("class", "ri-menu-3-line");
});