function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (Math.random() * 2 + 3) + "s";
  document.querySelector(".hearts-container").appendChild(heart);
  setTimeout(() => {
    heart.remove();
  }, 6000);
}

setInterval(createHeart, 300);

function showMessage(message) {
  const modal = document.getElementById("modal");
  const modalText = document.getElementById("modal-text");
  modalText.textContent = message;
  modal.style.display = "flex";
}

function closeMessage() {
  const modal = document.getElementById("modal");
  modal.style.display = "none";
}
