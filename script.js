const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

yesBtn.addEventListener("click", () => {
  alert("Yay! ❤️");
});

noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * window.innerWidth;
  const y = Math.random() * window.innerHeight;

  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
});
