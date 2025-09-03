function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  if (!menu || !icon) return;

  const isOpen = menu.classList.toggle("open");
  icon.classList.toggle("open");
  
  icon.setAttribute("aria-expanded", String(isOpen));

  document.body.style.overflow = isOpen ? "hidden" : "";
}

document.addEventListener("click", (e) => {
  const link = e.target.closest(".menu-links a");
  if (!link) return;
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  if (menu?.classList.contains("open")) {
    menu.classList.remove("open");
    icon?.classList.remove("open");
    icon?.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key !== "Escape") return;
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  if (menu?.classList.contains("open")) {
    menu.classList.remove("open");
    icon?.classList.remove("open");
    icon?.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  }
});
