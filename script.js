let number;
const gridContainer = document.getElementById("game");

// Build a nodelist of the Divs
gameDiv = () => gridContainer.querySelectorAll("div");

// Sketch it all out
function sketch() {
  userInput();
  makeGrid(number);
}

//Create a grid of divs
function makeGrid(number) {
  for (let i = 0; i < number; i++) {
    let row = document.createElement("div");
    gridContainer.appendChild(row);

    for (let j = 0; j < number; j++) {
      let cell = document.createElement("div");
      row.appendChild(cell);
    }
  }
  setSize();
}

//user grid set to max of 100
function userInput() {
  number = prompt("how many sides", "");
  if (number <= 100) {
    return number;
  } else {
    alert("Pick a number between 1-100");
    userInput();
  }
}

//Color the Grid on Hover
gridContainer.addEventListener("mouseover", function (hover) {
  hover.target.classList.add("onHover");
});

//Set the size of the grid
function setSize() {
  let size = 960 / number;
  gameDiv().forEach(function (e) {
    e.style.height = size + "px";
    e.style.width = size + "px";
  });
}

//Clear current grid
function resetDivs() {
  gameDiv().forEach(function (e) {
    e.classList.remove("onHover");
  });
}

//Clear grid & resize new grid
function reset() {
  if (gridContainer.hasChildNodes()) {
    while (gridContainer.firstChild) {
      gridContainer.removeChild(gridContainer.firstChild);
    }
  }
  sketch();
}

sketch();
