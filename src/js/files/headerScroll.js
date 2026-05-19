export default function headerScroll() {
  const header = document.querySelector(".header");

  if (header) {
    const formatNav = document.querySelector(".s-format__nav");
    let lastScrollTop = 0;

    window.addEventListener("scroll", () => {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > 0) {
        header.classList.add("_scroll");
      } else {
        header.classList.remove("_scroll");
      }

      if (window.matchMedia("(max-width: 991px)").matches) {
        if (formatNav) {
          formatNav.style.top = header.clientHeight + "px";
        }
      } else if (formatNav.style.top) {
        formatNav.style.top = "auto";
      }

      lastScrollTop = scrollTop;
    });
  }
}
