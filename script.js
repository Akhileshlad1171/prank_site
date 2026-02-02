const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

// initial position
let posX = 0;
let posY = 0;

// limit movement
const MOVE_DISTANCE = 120; // px
const ANIMATION_TIME = 250; // ms

// Apply smooth transition
noBtn.style.transition = `transform ${ANIMATION_TIME}ms ease-out`;

// Desktop: hover
noBtn.addEventListener("mouseenter", moveButton);

// Mobile: touch
noBtn.addEventListener("touchstart", moveButton);

function moveButton() {
  // random direction but limited distance
  const dx = (Math.random() - 0.5) * MOVE_DISTANCE;
  const dy = (Math.random() - 0.5) * MOVE_DISTANCE;

  posX += dx;
  posY += dy;

  // screen boundaries
  const maxX = window.innerWidth / 2 - 80;
  const maxY = window.innerHeight / 2 - 40;

  posX = Math.max(-maxX, Math.min(maxX, posX));
  posY = Math.max(-maxY, Math.min(maxY, posY));

  noBtn.style.transform = `translate(${posX}px, ${posY}px)`;
}

// YES click stays same
yesBtn.addEventListener("click", () => {
  for (let i = 0; i < 25; i++) {
    createHeart();
  }
});

function createHeart() {
  const heart = document.createElement("div");
  heart.innerText = "💖";
  heart.style.position = "fixed";
  heart.style.left = Math.random() * window.innerWidth + "px";
  heart.style.top = window.innerHeight + "px";
  heart.style.fontSize = "2rem";
  heart.style.animation = "floatUp 3s linear forwards";
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 3000);
}

