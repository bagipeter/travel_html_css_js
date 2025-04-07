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

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header_content h1", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".header_content .section_description", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header_content form", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header_content img", {
  ...scrollRevealOption,
  origin: "left",
  delay: 1500,
});

ScrollReveal().reveal(".about_content .section_header", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".about_content .section_description", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".about_signature", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".tour_card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".destination_card", {
  ...scrollRevealOption,
  interval: 500,
});

const swiper = new Swiper(".swiper", {
  loop: true,
});

ScrollReveal().reveal(".blog_card", {
  ...scrollRevealOption,
  interval: 500,
});

const banner = document.querySelector(".banner_wrapper");
const bannerImages = Array.from(banner.children);

bannerImages.forEach((item) => {
  const duplicateNode = item.cloneNode(true);
  duplicateNode.setAttribute("aria-hidden", true);
  banner.appendChild(duplicateNode);
});