const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const buttons = document.getElementById("buttons");
const result = document.getElementById("result");

// ---- NO button movement (medium speed) ----
let posX = 0;
let posY = 0;

const MOVE_DISTANCE = 250;
const ANIMATION_TIME = 250;

noBtn.style.transition = `transform ${ANIMATION_TIME}ms ease`;

noBtn.addEventListener("mouseenter", moveNo);
noBtn.addEventListener("touchstart", moveNo);

function moveNo() {
  const dx = (Math.random() - 0.5) * MOVE_DISTANCE;
  const dy = (Math.random() - 0.5) * MOVE_DISTANCE;

  posX += dx;
  posY += dy;

  const maxX = window.innerWidth / 2 - 100;
  const maxY = window.innerHeight / 2 - 60;

  posX = Math.max(-maxX, Math.min(maxX, posX));
  posY = Math.max(-maxY, Math.min(maxY, posY));

  noBtn.style.transform = `translate(${posX}px, ${posY}px)`;
}

// ---- YES button action 💖 ----
yesBtn.addEventListener("click", () => {
  buttons.style.display = "none";   // hide buttons
  result.style.display = "block";   // show text + image

  // hearts burst
  for (let i = 0; i < 40; i++) {
    setTimeout(createHeart, i * 80);
  }
});

function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerText = "💖";

  heart.style.left = Math.random() * window.innerWidth + "px";
  heart.style.top = window.innerHeight + "px";

  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 3000);
}




