const gridContainer = document.querySelector("#grid");
const resetButton = document.querySelector("#resetButton");
resetButton.addEventListener("click", start);

let sketchHovered = document.querySelector(".sketchHovered");

const colorInput = document.querySelector("#colorInput");
let selectedColor = colorInput.value;

colorInput.addEventListener("input", function () {
  selectedColor = colorInput.value;
});

let gridSize = 8;
createGrid(gridSize);

const gridSizeSelector = document.querySelector("#sliderRange");
gridSizeSelector.addEventListener("change", start);

function start() {
  let newGrid = Number(gridSizeSelector.value);
  gridSize = newGrid;
  resetNodes(gridContainer);
  createGrid(gridSize);
}

function createGrid(inputGrid) {
  gridContainer.style.gridTemplateColumns = `repeat(${inputGrid}, 1fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${inputGrid}, 1fr)`;

  for (let i = 1; i <= inputGrid + 1; i++) {
    for (let j = 1; j <= inputGrid + 1; j++) {
      let newDiv = document.createElement("div");
      newDiv.style.height = "1fr";
      newDiv.style.width = "1fr";
      newDiv.setAttribute("class", "sketch");
      newDiv.style.gridArea = `${j}/${i}`;
      gridContainer.appendChild(newDiv);
      newDiv.addEventListener("mouseenter", () => {
        newDiv.style.background = selectedColor;
      });
    }
  }
}

function resetNodes(myNode) {
  while (myNode.firstChild) {
    myNode.removeChild(myNode.lastChild);
    console.log("removing node");
  }
}

function reset() {
  start();
}
