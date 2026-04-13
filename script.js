function llamar() {
  window.location.href = "tel:+50685713009";
}

function whatsapp() {
  window.open("https://wa.me/50685713009", "_blank");
}

function ubicacion() {
  window.open("https://www.google.com/maps?q=WWJX+3HJ,San+Pedro", "_blank");
}

// Mostrar info servicios
function toggleInfo(card) {
  const extra = card.querySelector(".extra");
  extra.style.display = extra.style.display === "block" ? "none" : "block";
}
let index = 0;
const images = document.querySelectorAll(".carousel img");

setInterval(() => {
  images[index].classList.remove("active");
  index = (index + 1) % images.length;
  images[index].classList.add("active");
}, 3000);
const elements = document.querySelectorAll(".scroll-anim");

window.addEventListener("scroll", () => {
  elements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add("show");
    }
  });
});
function instagram() {
  window.open("https://www.instagram.com/", "_blank");
}
window.onload = function() {
  let index = 0;
  const images = document.querySelectorAll(".carousel img");

  setInterval(() => {
    images[index].classList.remove("active");
    index = (index + 1) % images.length;
    images[index].classList.add("active");
  }, 3000);
};
function instagram() {
  window.open("https://www.instagram.com/", "_blank");
}
