import "../scss/style.scss";
import handlerSelect from "./files/select.js";
import sliders from "./files/sliders.js";
import tab from "./files/tab.js";
import videoBg from "./files/videoBg.js";

document.addEventListener("DOMContentLoaded", () => {
  handlerSelect();
  videoBg();
  sliders();
  tab();

  Fancybox.bind("[data-fancybox]", { closeButton: false });
  // Fancybox.show([{src: "#modal-brone", type: "inline"}], { closeButton: false })
});
