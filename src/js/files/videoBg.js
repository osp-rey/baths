export default function videoBg() {
  const players = document.querySelectorAll(".video-bg");

  if (players.length) {
    players.forEach(player => {
      if (!player.classList.contains("_np")) {
        const video = player.querySelector(".video");
        video.src = video.dataset.src
      }
    })
  }
}