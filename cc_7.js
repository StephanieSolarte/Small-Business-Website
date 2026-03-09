const input = document.getElementById("headline-input");
const button = document.getElementById("update-button");
const ctaText = document.getElementById("cta-text");

button.addEventListener("click", function () {
  const newHeadline = input.value;

  if (newHeadline !== "") {
    ctaText.textContent = newHeadline;
  }
});