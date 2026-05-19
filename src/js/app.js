import "../scss/style.scss";
import buttonsNote from "./files/buttonsNote.js";
import headerScroll from "./files/headerScroll.js";
import handlerSelect from "./files/select.js";
import sliders from "./files/sliders.js";
import tab from "./files/tab.js";
import videoBg from "./files/videoBg.js";

document.addEventListener("DOMContentLoaded", () => {
  handlerSelect();
  videoBg();
  sliders();
  tab();
  buttonsNote();
  headerScroll();

  Fancybox.bind("[data-fancybox]", {
    closeButton: false,
    on: {
      destroy: (instance) => {
        const id = instance.getSlide().src;

        if (id.includes("#modal")) {
          const inputNote = document
            .querySelector(id)
            .querySelector(".input-note");

          if (inputNote) inputNote.value = "";
        }
      },
    },
  });
  // Fancybox.show([{src: "#modal-brone", type: "inline"}], { closeButton: false })
});
