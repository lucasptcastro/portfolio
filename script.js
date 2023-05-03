// To display hamburguer menu
function clickMenu() {
  const navbar = document.querySelector(".navbar");

  if (navbar.style.display == "block") {
    navbar.style.display = "none";
  } else {
    navbar.style.display = "block";
  }
}

// Change theme
function changeTheme() {
  const html = document.documentElement;
  html.classList.toggle("dark");

  const div_theme = document.querySelector(".btn-theme");
  div_theme.classList.add("btn-theme-click");

  const sun_span = document.querySelector(".sun-span");
  const moon_span = document.querySelector(".moon-span");

  const home_avatar_img = document.querySelector(".avatar img");
  const about_avatar_img = document.querySelector(".about-avatar img");

  // Change theme to dark or  light
  if (html.classList.contains("dark")) {
    sun_span.style.display = "block";
    moon_span.style.display = "none";

    // Home avatar
    home_avatar_img.setAttribute("src", "./assets/profile_dark_avatar.png");
    home_avatar_img.setAttribute(
      "alt",
      "Foto de Lucas com fundo transparente e círculo azul turquesa"
    );

    // About avatar
    about_avatar_img.setAttribute("src", "./assets/profile_dark_avatar.png");
    about_avatar_img.setAttribute(
      "alt",
      "Foto de Lucas com fundo transparente e círculo azul turquesa"
    );
  } else {
    sun_span.style.display = "none";
    moon_span.style.display = "block";

    // Home avatar
    home_avatar_img.setAttribute("src", "./assets/profile_light_avatar.png");
    home_avatar_img.setAttribute(
      "alt",
      "Foto de Lucas com fundo transparente e círculo azul"
    );

    // About avatar
    about_avatar_img.setAttribute("src", "./assets/profile_light_avatar.png");
    about_avatar_img.setAttribute(
      "alt",
      "Foto de Lucas com fundo transparente e círculo azul"
    );
  }
}

// Scroll sections
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((section) => {
    let top = window.scrollY;
    let offset = section.offsetTop - 100;
    let height = section.offsetHeight;
    let id = section.getAttribute("id");

    if (top >= offset && top < offset + height) {
      // active navbar links
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  let header = document.querySelector("header");

  header.classList.toggle("sticky", window.scrollY > 100);
};
