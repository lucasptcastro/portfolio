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

  const img = document.querySelector(".avatar img");

  // Change theme to dark or  light
  if (html.classList.contains("dark")) {
    sun_span.style.display = "block";
    moon_span.style.display = "none";

    img.setAttribute("src", "./assets/profile_dark_avatar.png");
    img.setAttribute(
      "alt",
      "Foto de Lucas com fundo transparente e círculo azul escuro"
    );
  } else {
    sun_span.style.display = "none";
    moon_span.style.display = "block";

    img.setAttribute("src", "./assets/profile_light_avatar.png");
    img.setAttribute(
      "alt",
      "Foto de Lucas com fundo transparente e círculo azul turquesas"
    );
  }
}
