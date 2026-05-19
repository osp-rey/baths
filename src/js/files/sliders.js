export default function sliders() {
  const previewSlider = document.querySelector(".s-preview__slider");

  if (previewSlider) {
    const initialSlide = Math.floor(
      previewSlider.querySelectorAll(".swiper-slide").length / 2,
    );
    let curentIndex = 0;
    const swiper = new Swiper(previewSlider, {
      slidesPerView: "auto",
      spaceBetween: 70,
      speed: 900,
      centeredSlides: true,
      initialSlide,
      slideToClickedSlide: true,
      autoplay: {
        delay: 7000,
      },
      scrollbar: {
        el: previewSlider.closest("section").querySelector(".slider-scrollbar"),
        draggable: true,
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
        },
        768: {
          slidesPerView: "auto",
          spaceBetween: 90,
        },
      },
    });
  }

  const formatNav = document.querySelector(".s-format__nav");

  if (formatNav) {
    const swiper = new Swiper(formatNav, {
      speed: 900,
      slidesPerView: "auto",
      spaceBetween: 20,
      observer: true,
      observeParents: true,
    });
  }

  const gallerySliders = document.querySelectorAll(".gallery-slider");

  if (gallerySliders.length) {
    gallerySliders.forEach((slider) => {
      const swiper = new Swiper(slider, {
        speed: 900,
        slidesPerView: 1,
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
}
