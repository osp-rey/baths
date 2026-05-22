import "../scss/style.scss";
import burger from "./files/burger.js";
import buttonsNote from "./files/buttonsNote.js";
import clickTarget from "./files/clickTarget.js";
import headerScroll from "./files/headerScroll.js";
import inputmask from "./files/inputmask.js";
import map from "./files/maps.js";
import more from "./files/more.js";
import handlerSelect from "./files/select.js";
import sliders from "./files/sliders.js";
import tab from "./files/tab.js";
import tabAnchors from "./files/tabAnchors.js";
import videoBg from "./files/videoBg.js";

document.addEventListener("DOMContentLoaded", () => {
  handlerSelect();
  videoBg();
  sliders();
  tab();
  buttonsNote();
  headerScroll();
  more();
  clickTarget();
  inputmask();
  map();
  burger();
  tabAnchors();

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
