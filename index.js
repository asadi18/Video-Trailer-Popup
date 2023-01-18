const btnEl = document.querySelector(".btn");
const trailerContainerEl = document.querySelector(".trailer-container");
const crossIconEl = document.querySelector(".close-icon");
const videoEl = document.querySelector("video");

const buttonClick = () => {
  trailerContainerEl.classList.remove("active");
};

const closeIcon = () => {
  trailerContainerEl.classList.add("active");
  videoEl.pause();
  videoEl.currentTime = 0;
};

btnEl.addEventListener("click", buttonClick);
crossIconEl.addEventListener("click", closeIcon);
