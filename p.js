const text = ["Web Designer", "Frontend Developer", "Freelancer"];
let i = 0;
let j = 0;
let currentText = "";
let isDeleting = false;

function typeEffect() {
  if (i < text.length) {
    if (!isDeleting && j <= text[i].length) {
      currentText = text[i].substring(0, j++);
      document.querySelector(".typing").textContent = currentText;
    }

    if (isDeleting && j >= 0) {
      currentText = text[i].substring(0, j--);
      document.querySelector(".typing").textContent = currentText;
    }

    if (j === text[i].length) {
      isDeleting = true;
      setTimeout(typeEffect, 1000);
    } else if (j === 0) {
      isDeleting = false;
      i++;
      if (i === text.length) i = 0;
    }

    setTimeout(typeEffect, isDeleting ? 50 : 100);
  }
}

document.addEventListener("DOMContentLoaded", typeEffect);
