const container = document.querySelector(".container");
const clearButton = document.querySelector(".clearButton");

function createGrid(gridNum) {
  container.replaceChildren();
  for (let i = 0; i < gridNum; i++) {
    const row = document.createElement("div");
    row.classList.add("grid-row");

    for (let j = 0; j < gridNum; j++) {
      const widthAndHeight = 960 / gridNum;
      const gridBox = document.createElement("div");
      gridBox.classList.add("grid-box")
      gridBox.style.width = `${widthAndHeight}px`;
      gridBox.style.height = `${widthAndHeight}px`;
      gridBox.addEventListener("mouseover", () => {
        let currentColor = getComputedStyle(gridBox).backgroundColor;
        let rgb = currentColor.match(/\d+/g).map(Number);
        let newColor = `rgb(${rgb[0] - 10}, ${rgb[1] - 10}, ${rgb[2] - 10})`;
        gridBox.style.backgroundColor = newColor;
      })
      row.appendChild(gridBox);
    }
    container.appendChild(row);
  }
}

createGrid(16);

clearButton.addEventListener("click", () => {
  let userSize = Number(prompt("Selecciona el tamaño del tablero"));

  while (userSize > 100) {
    userSize = Number(prompt("Elige un numero igual o menor a 100"));
  }
  createGrid(userSize);
})