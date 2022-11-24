const container = document.querySelector('#container');
const grid = document.querySelector('#grid');
const clear = document.querySelector('#clear')
const rainbow = document.querySelector('#rainbow')

let row = 0;
let column = 16;

function makeGrid (gridsize) {
    for (let i = 0; i < gridsize; i++) {
        const row = document.createElement('div');
        container.appendChild(row);
        row.classList.add('row')
        for (let j = 0; j < gridsize; j++) {
            const square = document.createElement('div');
            row.appendChild(square);
            square.classList.add('square');

            let height = 960 / parseInt(gridsize);
            square.style.width = `${height}px`
            square.style.height = `${height}px`
        }
    }
}

function rainbowColor () {
    let arr = [];
    for (let i = 0; i < 3; i++) {
        let random = Math.floor(Math.random() * 255);
        arr.push(random);
    }
    return `rgb(${arr[0]}, ${arr[1]}, ${arr[2]})`;
}

grid.addEventListener('click', () => {

    let removeOldGrid = document.querySelector("#container");
    removeOldGrid.textContent = '';

    let gridSize = +prompt("Que tamaño de grid queres?: ");
    makeGrid(gridSize);
    
    const squares = document.querySelectorAll('.square')
    squares.forEach((square) => {
        square.addEventListener('mouseover' , () => {
            square.style.backgroundColor = 'black';
        })
    })
})

clear.addEventListener('click', () => {
    const squares = document.querySelectorAll('.square')
    squares.forEach((square) => {
        square.style.backgroundColor = 'white';
    })
})

rainbow.addEventListener('click', () => {
    const squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = rainbowColor();
        })
    })
})