/* _______________ Menu _______________ */
export function menu() {
  const menu = document.querySelector(".header__menu");
  const overlay = document.querySelector(".header__menu-overlay");
  const menuBtn = document.querySelector(".header__btn-area");
  const burger = document.querySelector(".header__btn");

  const body = document.body;

  if (menu && menuBtn && overlay) {
    menu.addEventListener("click", (event) => {
      if (event.target.classList.contains("header__menu")) {
        menu.classList.remove("show");
        overlay.classList.remove("show");
        menuBtn.classList.remove("show");
        burger.classList.remove("show");
        body.classList.remove("lock");
      }
    });

    overlay.addEventListener("click", (event) => {
      if (event.target.classList.contains("header__menu-overlay")) {
        menu.classList.remove("show");
        overlay.classList.remove("show");
        menuBtn.classList.remove("show");
        burger.classList.remove("show");
        body.classList.remove("lock");
      }
    });

    menuBtn.addEventListener("click", () => {
      menu.classList.toggle("show");
      overlay.classList.toggle("show");
      menuBtn.classList.toggle("show");
      burger.classList.toggle("show");
      body.classList.toggle("lock");
    });

    menu.querySelectorAll(".header__menu-item").forEach((link) => {
      link.addEventListener("click", () => {
        menu.classList.remove("show");
        overlay.classList.remove("show");
        menuBtn.classList.remove("show");
        burger.classList.remove("show");
        body.classList.remove("lock");
      });
    });
  }

  /* _______________ Anchors _______________ */

  const anchors = document.querySelectorAll('a[href*="#"]');

  anchors.forEach((anchor) => {
    anchor.addEventListener("click", (event) => {
      event.preventDefault();

      const blockID = anchor.getAttribute("href").substring(1);
      if (document.getElementById(blockID)) {
        document.getElementById(blockID).scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
}
