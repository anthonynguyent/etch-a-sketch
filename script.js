const container = document.getElementById("container");

// Default grid size
let gridSize = 16;

function createGrid() {
    for (let i = 0; i < gridSize * gridSize; i++) {
      const square = document.createElement("div");
      square.classList.add("square");
      container.appendChild(square);
    }
  }

createGrid(); // Call the function to create the initial grid

// Add hover effect to the grid squares
const squares = document.querySelectorAll(".square");
squares.forEach(square => {
  square.addEventListener("mouseover", () => {
    square.style.backgroundColor = "black"
  });
});