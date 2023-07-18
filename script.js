const container = document.getElementById("container");
const squares = container.getElementsByClassName("square");

for (let i = 0; i < 16 * 16; i++) {
  const square = document.createElement("div");
  square.classList.add("square");
  container.appendChild(square);
}

for (let i = 0; i < squares.length; i++) {
  squares[i].addEventListener("mouseenter", function () {
    this.style.backgroundColor = "black";
  });

  squares[i].addEventListener("mouseleave", function () {
    this.style.backgroundColor = "";
  });
}