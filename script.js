const modalOverlay = document.querySelector(".modal-overlay");
const cards = document.querySelectorAll(".mais-acessadas__card");

for (let card of cards) {
  card.addEventListener("click", function() {
    const fotoId = card.querySelector("img").getAttribute("alt");
    const title = card.querySelector("p.nome").textContent;
    const autor = card.querySelector("p.autor").textContent;

    modalOverlay.querySelector("img").src = `img/${fotoId}.jpg`;
    modalOverlay.querySelector("p.nome").innerHTML = title;
    modalOverlay.querySelector("p.autor").innerHTML = autor;

    modalOverlay.classList.add("active");
  });
}

document.querySelector(".modal-close").addEventListener("click", function() {
  modalOverlay.classList.remove("active");
});
