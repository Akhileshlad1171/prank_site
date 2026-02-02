const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const heartsContainer = document.getElementById("hearts");

// NO button runs away
noBtn.addEventListener("mouseenter", moveButton);
noBtn.addEventListener("click", moveButton);

function moveButton() {
  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 50);

  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
}

// YES button = love explosion
yesBtn.addEventListener("click", () => {
  for (let i = 0; i < 30; i++) {
    createHeart();
  }
});

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerText = "💖";

  heart.style.left = Math.random() * window.innerWidth + "px";
  heart.style.top = window.innerHeight + "px";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 3000);
}
