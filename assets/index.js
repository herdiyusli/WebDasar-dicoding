let card = document.querySelectorAll(".card");
for (cards of card) {
  cards.addEventListener("mouseover", function (event) {
    if (event.target.id === "farikha") {
      event.target.setAttribute("src", "assets/image/product (2).JPEG");
      return;
    } else if (event.target.id === "ale") {
      event.target.setAttribute("src", "assets/image/ale (2).JPEG");
      return;
    }
  });

  cards.addEventListener("mouseout", function (event) {
    if (event.target.id === "farikha") {
      event.target.setAttribute("src", "assets/image/product (1).JPEG");
      return;
    }
    if (event.target.id === "ale") {
      event.target.setAttribute("src", "assets/image/ale (1).JPEG");
      return;
    }
  });
}
