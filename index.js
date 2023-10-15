function toggleMenu() {
    const menu = document.querySelector(".menu_links");
    const icon = document.querySelector("#three");
    const x_icon = document.querySelector("#x");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
    x_icon.classList.toggle("open");
  }

