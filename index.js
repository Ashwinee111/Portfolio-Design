// ================= filter-work js ==================================
let btns = document.querySelectorAll(".p-btn");
let store = document.querySelectorAll(".img-overlay");

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    for (let j = 0; j < btns.length; j++) {
      btns[i].classList.remove("active");
    }
    this.classList.add("active");

    let dataFilter = this.getAttribute("data-filter");

    for (let k = 0; k < store.length; k++) {
      store[k].classList.add("hide");
      store[k].classList.remove("active");

      if (
        store[k].getAttribute("data-item") == dataFilter ||
        dataFilter == "all"
      ) {
        store[k].classList.remove("hide");
      } else {
        store[k].classList.add("active");
      }
    }
  });
}
// ===================================================

// ================= slide js ==================================
let swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 30,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

//  slide js media query

let myFunction = (z) => {
  if (z.matches) {
    new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  } else {
    new Swiper(".mySwiper", {
      slidesPerView: 2,
      spaceBetween: 30,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }
};

let x = window.matchMedia("(max-width: 600px)");
x.addEventListener("change", myFunction);
myFunction(x);

// ===================================================

// ================= counter js ==================================
let count = document.querySelectorAll(".counter-number");

count.forEach((e) => {
  let startValue = 500;
  let endValue = parseInt(e.getAttribute("data-number"));

  let interval = setInterval(counting, 1);
  function counting() {
    startValue++;
    e.innerHTML = `${startValue}+`;

    if (startValue == endValue) {
      clearInterval(interval);
    }
  }
});

// ===================================================

// ================= mobile nav-bar js ==================================
let mobileBtn = document.querySelector(".mobile-btn");
let headerElem = document.querySelector("header");

mobileBtn.addEventListener("click", () => {
  headerElem.classList.toggle("active");
});
// ===================================================
