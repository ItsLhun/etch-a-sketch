const gridContainer = document.querySelector("#grid");

let gridSize = 50;
gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
gridContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

for (let i = 1; i <= gridSize + 1; i++) {
  for (let j = 1; j <= gridSize + 1; j++) {
    let newDiv = document.createElement("div");
    newDiv.style.background = "white";
    newDiv.style.height = "1fr";
    newDiv.style.width = "1fr";
    newDiv.style.gridArea = `${j}/${i}`;
    gridContainer.appendChild(newDiv);
  }
}
