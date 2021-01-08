const gridContainer = document.querySelector("#grid");

/*gridContainer.style.gridTemplateColumns = 
gridContainer.style.gridTemplateRows = " 20px 30px";*/

let gridSize = 50;

for (let i = 0; i < gridSize; i++) {
  for (let j = 0; j < gridSize; j++) {
    let newDiv = document.createElement("div");
    newDiv.style.color = "orange";
    newDiv.style.background = "green";
    newDiv.style.height = "1vw";
    newDiv.style.width = "1vw";
    newDiv.style.margin = "1px";
    newDiv.style.display = "block";
    newDiv.style.gridRow = i;
    gridContainer.appendChild(newDiv);
  }
}
