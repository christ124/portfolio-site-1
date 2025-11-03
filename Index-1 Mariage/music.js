document.addEventListener("DOMContentLoaded", () => {
  const music = document.getElementById("bg-music");
  const playButton = document.getElementById("play-music");

  // iPhone/iPad detection
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);

  if (isIOS) {
    // Show button for iPhone users (autoplay blocked)
    playButton.style.display = "block";
    playButton.style.position = "fixed";
    playButton.style.bottom = "20px";
    playButton.style.left = "50%";
    playButton.style.transform = "translateX(-50%)";
    playButton.style.padding = "10px 20px";
    playButton.style.background = "#c49b63";
    playButton.style.color = "white";
    playButton.style.border = "none";
    playButton.style.borderRadius = "25px";
    playButton.style.fontSize = "1rem";
    playButton.style.boxShadow = "0 4px 10px rgba(0,0,0,0.2)";
    playButton.style.zIndex = "9999";

    // Start music when the button is tapped
    playButton.addEventListener("click", () => {
      music.play();
      playButton.style.display = "none";
    });
  } else {
    // On desktop or Android, play immediately
    music.play().catch(() => {
      // If autoplay blocked, show button
      playButton.style.display = "block";
      playButton.addEventListener("click", () => {
        music.play();
        playButton.style.display = "none";
      });
    });
  }

  // Loop manually in case browser disables built-in loop
  music.addEventListener("ended", () => {
    music.currentTime = 0;
    music.play();
  });
});
