let songIcon = document.querySelector(".landing__icon");

songIcon.addEventListener('click', (event) => {
  let state = event.currentTarget.dataset.state;
  if (state === 'play') {
    document.querySelector("audio").play();
    event.currentTarget.dataset.state = "pause";
  } else {
    document.querySelector("audio").pause();
    event.currentTarget.dataset.state = "play";
  }
});
