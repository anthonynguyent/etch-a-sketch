// Even though the script tag is at the bottom of the body in HTML, if the code relys on external resources like css folders, it's best to use DOMContentLoaded
document.addEventListener("DOMContentLoaded", function () {
    // Constants linking to the elements in HTML
    const container = document.getElementById("container");
    const resizeButton = document.getElementById("resizeButton");

    // Function to create the grid
    function createGrid(size) {
        // Clear the existing grid
        container.innerHTML = "";

        // Calculate the size of each square
        const squareSize = 960 / size;

        // Create new grid of square divs
        for (let i = 0; i < size; i++) {
            for (let j = 0; j < size; j++) {
                const square = document.createElement("div");
                square.classList.add("square");
                square.style.width = `${squareSize}px`;
                square.style.height = `${squareSize}px`;
                container.appendChild(square);
            }
        }

        // Set the grid columns and rows
        container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    }

    // Initial grid creation with 16x16 squares
    createGrid(16);

    // Add event listener to the reset button
    resizeButton.addEventListener("click", function () {
        let inputSize = prompt("Enter a number between 1 and 100 for the grid's size:");

        // Validate the input
        inputSize = parseInt(inputSize);
        if (isNaN(inputSize) || inputSize < 1 || inputSize > 100) {
            alert("Please enter a valid number between 1 and 100.");
            return;
        }

        // Generate the new grid
        createGrid(inputSize);
    });

    // Function to generate a random RGB color
    function getRandomColor() {
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);
        return `rgb(${red}, ${green}, ${blue})`;
    }

    // Add hover effect to grid divs
    container.addEventListener("mouseover", function (event) {
        const square = event.target;
        if (square.classList.contains("square")) {
            // square.style.backgroundColor = "black";
            square.style.backgroundColor = getRandomColor();
        }
    });
});
