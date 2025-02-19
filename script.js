const audio = document.querySelector("#blaargh");

const playButton = document.querySelector(".play");
playButton.addEventListener("click", function () {
  audio.play();
});

const pauseButton = document.querySelector(".pause");
pauseButton.addEventListener("click", function () {
  audio.pause();
});

const resetButton = document.querySelector(".reset");
resetButton.addEventListener("click", function () {
  audio.currentTime = 0;
});
