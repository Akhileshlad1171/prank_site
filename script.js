const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const response = document.getElementById("response");
const question = document.getElementById("question");

// slow movement settings
let posX = 0;
let posY = 0;

const MOVE_DISTANCE = 70;   // small movement
const ANIMATION_TIME = 600; // slow animation (ms)

noBtn.style.transition = `transform ${ANIMATION_TIME}ms ease`;

// desktop
noBtn.addEventListener("mouseenter", moveButton);
// mobile
noBtn.addEventListener("touchstart", moveButton);

function moveButton() {
  const dx = (Math.random() - 0.5) * MOVE_DISTANCE;
  const dy = (Math.random() - 0.5) * MOVE_DISTANCE;

  posX += dx;
  posY += dy;

  // keep inside screen
  const maxX = window.innerWidth / 2 - 80;
  const maxY = window.innerHeight / 2 - 40;

  posX = Math.max(-maxX, Math.min(maxX, posX));
  posY = Math.max(-maxY, Math.min(maxY, posY));

  noBtn.style.transform = `translate(${posX}px, ${posY}px)`;
}

// YES button magic 💖
yesBtn.addEventListener("click", () => {
  question.style.display = "none";
  noBtn.style.display = "none";
  yesBtn.style.display = "none";

  response.style.display = "block";
  response.innerText = "Yes… I knew it 😌💖";

  for (let i = 0; i < 30; i++) {
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



