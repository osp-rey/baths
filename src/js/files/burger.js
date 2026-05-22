export default function burger() {
  const burgerBtn = document.querySelector("#burger-btn");

  if (burgerBtn) {
    const burger = document.querySelector("#burger");
    const headerBurgerWrap = document.querySelector(".header__burger-wrap");
    const burgerOverlay = document.querySelector("#burger-overlay");
    const header = document.querySelector(".header");
    const burgerAnchors = burger.querySelectorAll("a[href^='/#']");

    burgerAnchors.forEach((anchor) => {
      anchor.addEventListener("click", () => {
        handleClose();
      });
    });

    document.addEventListener("click", () => {
      if (headerBurgerWrap.classList.contains("_open")) {
        burgerBtn.classList.remove("_active");
        headerBurgerWrap.classList.remove("_open");
      }
    });

    burgerOverlay.addEventListener("click", handleClose);
    headerBurgerWrap.addEventListener("click", (e) => e.stopPropagation());

    burgerBtn.addEventListener("click", (e) => {
      e.stopPropagation();

      if (window.matchMedia("(min-width: 992px)").matches) {
        if (!headerBurgerWrap.classList.contains("_open")) {
          burgerBtn.classList.add("_active");
          headerBurgerWrap.classList.add("_open");
        } else {
          headerBurgerWrap.classList.remove("_open");
          burgerBtn.classList.remove("_active");
        }
      } else {
        if (burger.classList.contains("_open")) {
          handleClose();
        } else {
          handleOpen();
        }
      }
    });

    function updateHeightBurger() {
      burger.style.maxHeight = `${window.visualViewport.height}px`;
    }

    function handleOpen() {
      header.classList.add("_small");
      burgerBtn.classList.add("_active");
      document.body.classList.add("body-hidden");
      burger.classList.add("_open");
      burgerOverlay.classList.add("_active");

      updateHeightBurger();
    }
    function handleClose() {
      header.classList.remove("_small");
      burgerBtn.classList.remove("_active");
      document.body.classList.remove("body-hidden");
      burger.classList.remove("_open");
      burgerOverlay.classList.remove("_active");
    }

    window.visualViewport.addEventListener("resize", updateHeightBurger);
    window.visualViewport.addEventListener("scroll", updateHeightBurger);

    updateHeightBurger();
  }
}
