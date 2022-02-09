function makeGrid(number){
    const gridContainer = document.getElementById('game');

    for (let i = 0; i < number; i++) {
        let row = document.createElement('div')
        gridContainer.appendChild(row);
        }
    }

makeGrid();


//First go around: https://www.youtube.com/watch?v=23AGsRkghjo

// function makeGrid() {
//     let grid = document.getElementById('game');

//     for (let i = 0; i < 16; i++){
//         let row = document.createElement('row');
//         row.id = 'row' + i;

//         grid.appendChild(row);
//         let cell = document.getElementById ('row' + i);

        // for (let j = 0; j < 16; j++){
        //     let box = document.createElement('box');

        //     cell.appendChild(box);
//         }
//     }
// }

// for (let j = 0; j < 16; j++){
//     let box = document.createElement('div');
//     box.className = 'box'

//     row.appendChild(box);