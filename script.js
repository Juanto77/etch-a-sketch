const gridContainer = document.getElementById('game');
let number = 280;

//Ask user

//Create a grid of divs
function makeGrid(number){
    for (let i = 0; i < number; i++) {
        let row = document.createElement('div')
        gridContainer.appendChild(row);
        }
};

// Build a nodelist of the Divs
gameDiv = () => gridContainer.querySelectorAll('div');

//Color the Grid
gridContainer.addEventListener('mouseover', function(hover){
    hover.target.classList.add('onHover');
});

//Clear Div Cells
function resetDivs(){
    gameDiv().forEach(function(e){
        e.classList.remove('onHover');
    })

}

//Clear the Grid of all Divs
function reset(){
    if (gridContainer.hasChildNodes()){
        while (gridContainer.firstChild) {
            gridContainer.removeChild(gridContainer.firstChild);
        }
    }
};
