export default function sliders() {
  const previewSlider = document.querySelector(".s-preview__slider");

  if (previewSlider) {
    const initialSlide = Math.floor(
      previewSlider.querySelectorAll(".swiper-slide").length / 2,
    );
    let curentIndex = 0;
    const swiper = new Swiper(previewSlider, {
      slidesPerView: "auto",
      spaceBetween: 10,
      speed: 900,
      initialSlide: 0,
      slideToClickedSlide: true,
      autoplay: {
        delay: 7000,
      },
      scrollbar: {
        el: previewSlider.closest("section").querySelector(".slider-scrollbar"),
        draggable: true,
      },
      pagination: {
        el: previewSlider
          .closest("section")
          .querySelector(".slider-pagination"),
        clickable: true,
      },
      on: {
        slideChange: ({ slides, activeIndex }) => {
          const player = slides[activeIndex].querySelector(".video-bg");

          if (!player.classList.contains("_played")) {
            player.classList.add("_played");
          }

          const video = slides[activeIndex].querySelector(".video");
          if (video && !video.src) {
            video.src = video.dataset.src;
          }

          curentIndex = activeIndex;
        },
      },
      breakpoints: {
        1200: {
          slidesPerView: "auto",
          spaceBetween: 100,
          centeredSlides: true,
          initialSlide,
        },
        768: {
          slidesPerView: "auto",
          spaceBetween: 90,
          centeredSlides: true,
          initialSlide,
        },
        576: {
          slidesPerView: "auto",
          spaceBetween: 20,
          initialSlide: 0,
        },
      },
    });
  }

  const gallerySliders = document.querySelectorAll(".gallery-slider");

  if (gallerySliders.length) {
    gallerySliders.forEach((slider) => {
      const swiper = new Swiper(slider, {
        speed: 900,
        slidesPerView: "auto",
        spaceBetween: 10,
        autoplay: {
          delay: 6500,
        },
        navigation: {
          prevEl: slider
            .closest(".slider-wrapper")
            .querySelector(".slider-arrow._prev"),
          nextEl: slider
            .closest(".slider-wrapper")
            .querySelector(".slider-arrow._next"),
        },
        pagination: {
          el: slider
            .closest(".slider-wrapper")
            .querySelector(".slider-pagination"),
          clickable: true,
        },
        breakpoints: {
          1200: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          576: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
        },
      });
    });
  }

  const formatSliders = document.querySelectorAll(".s-format__slider");

  if (formatSliders.length) {
    formatSliders.forEach((slider) => {
      const swiper = new Swiper(slider, {
        speed: 900,
        slidesPerView: 1,
        spaceBetween: 20,
        navigation: {
          prevEl: slider
            .closest(".slider-wrapper")
            .querySelector(".slider-arrow._prev"),
          nextEl: slider
            .closest(".slider-wrapper")
            .querySelector(".slider-arrow._next"),
        },
        pagination: {
          el: slider.closest(".slider-wrapper").nextElementSibling,
          clickable: true,
        },
        on: {
          touchStart: function (swiper, event) {
            const isProductSlider = event.target.closest(
              ".s-format__slide-gallery",
            );
            if (isProductSlider) {
              swiper.allowTouchMove = false;
            }
          },
          touchEnd: function (swiper) {
            swiper.allowTouchMove = true;
          },
        },
        breakpoints: {
          1200: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 25,
          },
          576: {
            slidesPerView: 2,
            spaceBetween: 25,
          },
        },
      });
    });
  }

  const slidersFormatGallery = document.querySelectorAll(
    ".s-format__slide-gallery",
  );

  if (slidersFormatGallery.length) {
    slidersFormatGallery.forEach((slider) => {
      const swiper = new Swiper(slider, {
        speed: 900,
        spaceBetween: 10,
        navigation: {
          prevEl: slider.querySelector(".slider-arrow._prev"),
          nextEl: slider.querySelector(".slider-arrow._next"),
        },
        pagination: {
          el: slider.querySelector(".slider-pagination-blur"),
          clickable: true,
        },
      });
    });
  }

  const navMenu = document.querySelector(".s-menu__nav");

  if (navMenu) {
    const swiper = new Swiper(navMenu, {
      speed: 900,
      slidesPerView: "auto",
      spaceBetween: 10,
    });
  }

  const menuSliders = document.querySelectorAll(".s-menu__slider");

  if (menuSliders.length) {
    menuSliders.forEach((slider) => {
      const swiper = new Swiper(slider, {
        speed: 900,
        slidesPerView: "auto",
        spaceBetween: 15,
        autoplay: {
          delay: 6000,
        },
        navigation: {
          prevEl: slider
            .closest(".slider-wrapper")
            .querySelector(".slider-arrow._prev"),
          nextEl: slider
            .closest(".slider-wrapper")
            .querySelector(".slider-arrow._next"),
        },
        pagination: {
          el: slider
            .closest(".slider-wrapper")
            .querySelector(".slider-pagination"),
          clickable: true,
        },
        breakpoints: {
          992: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        },
      });
    });
  }

  const complexSlider = document.querySelector(".s-complex__slider");

  if (complexSlider) {
    const swiper = new Swiper(complexSlider, {
      speed: 900,
      spaceBetween: 25,
      autoplay: {
        delay: 7000,
      },
      navigation: {
        prevEl: complexSlider
          .closest(".slider-wrapper")
          .querySelector(".slider-arrow._prev"),
        nextEl: complexSlider
          .closest(".slider-wrapper")
          .querySelector(".slider-arrow._next"),
      },
      pagination: {
        el: complexSlider
          .closest(".slider-wrapper")
          .querySelector(".slider-pagination"),
        clickable: true,
      },
      scrollbar: {
        el: complexSlider
          .closest(".slider-wrapper")
          .querySelector(".slider-scrollbar"),
        draggable: true,
      },
      on: {
        touchStart: function (swiper, event) {
          const isProductSlider = event.target.closest(
            ".s-complex__slide-gallery",
          );
          if (isProductSlider) {
            swiper.allowTouchMove = false;
          }
        },
        touchEnd: function (swiper) {
          swiper.allowTouchMove = true;
        },
      },
    });
  }

  const complexSlidersGallery = document.querySelectorAll(
    ".s-complex__slide-gallery",
  );

  if (complexSlidersGallery.length) {
    complexSlidersGallery.forEach((slider) => {
      const swiper = new Swiper(slider, {
        speed: 900,
        spaceBetween: 15,
        pagination: {
          el: slider.querySelector(".slider-pagination-blur"),
          clickable: true,
        },
      });
    });
  }

  const formatTablesSliders = document.querySelectorAll(".s-format__table");

  if (formatTablesSliders.length) {
    formatTablesSliders.forEach((slider) => {
      const swiper = new Swiper(slider, {
        speed: 900,
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
          el: slider.closest("[data-tab]").querySelector(".slider-pagination"),
          clickable: true,
        },
        autoplay: {
          delay: 5500,
        },
        breakpoints: {
          1200: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          576: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
        },
      });
    });
  }
}
