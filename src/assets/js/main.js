const auto = true;
const intervalTime = 5000;
let slideInterval;

const nextSlide = () => {
  const active = document.querySelector(".slide.active");
  if (active) {
    active.classList.remove("active");
    if (active.nextElementSibling) {
      active.nextElementSibling.classList.add("active");
    } else {
      document.querySelector(".slide:first-child").classList.add("active");
    }
    setTimeout(() => active.classList.remove("active"));
  }
};

const prevSlide = () => {
  const active = document.querySelector(".slide.active");
  active.classList.remove("active");
  if (active.previousElementSibling) {
    active.previousElementSibling.classList.add("active");
  } else {
    document.querySelector(".slide:first-child").classList.remove("active");
    document.querySelector(".slide:last-child").classList.add("active");
  }
  setTimeout(() => active.classList.remove("active"));
};

window.addEventListener("click", (e) => {
  //menu toggle
  if (e.target.matches(".bx-menu")) {
    document.querySelector("#header-wrapper").classList.add("active");
  }
  if (e.target.matches(".bx-x")) {
    document.querySelector("#header-wrapper").classList.remove("active");
  }

  //filter toggle
  if (e.target.matches("#filter-toggle")) {
    document.querySelector("#filter-col").classList.toggle("active");
  }
  if (e.target.matches("#filter-close")) {
    document.querySelector("#filter-col").classList.toggle("active");
  }

  //change image
  const productImg = document.querySelectorAll(".product-img-item");
  productImg.forEach((e) => {
    e.addEventListener("click", () => {
      let img = e.querySelector("img").getAttribute("src");
      document.querySelector("#product-img > img").setAttribute("src", img);
    });
  });

  //next and prev slide
  if (
    e.target.matches(".bxs-chevron-right") ||
    e.target.matches(".slide-next")
  ) {
    nextSlide();
    if (auto) {
      clearInterval(slideInterval);
      slideInterval = setInterval(nextSlide, intervalTime);
    }
  }

  if (
    e.target.matches(".bxs-chevron-left") ||
    e.target.matches(".slide-prev")
  ) {
    prevSlide();
    if (auto) {
      clearInterval(slideInterval);
      slideInterval = setInterval(nextSlide, intervalTime);
    }
  }
});

if (auto) {
  slideInterval = setInterval(nextSlide, intervalTime);
}