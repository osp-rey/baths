export default function clickTarget() {
  const buttons = document.querySelectorAll("[data-click-target]");

  if (buttons.length) {
    buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const selector = btn.dataset.clickTarget;
        const el = document.querySelector(selector);

        if (el) {
          el.click();
        }
      });
    });
  }
}
