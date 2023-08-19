const containerGrid = document.querySelector(".grid");

let gridSize = 16;
let numberOfBoxes = (gridSize ** 2);
let gridPixels = gridSize * 10;
let gridArea = (gridPixels ** 2);
let boxFillPercentage = ((1 / gridSize) * 100);

for (i = 1; i <= numberOfBoxes; i++) {
    div = document.createElement('div');
    div.style.flexBasis = `${boxFillPercentage}%`;
    div.classList.add('gridItem');
    containerGrid.appendChild(div);
}

const gridItems = document.querySelectorAll(".gridItem");

gridItems.forEach((gridItem) => {
    gridItem.addEventListener('mouseover', gridItemsHover);
});

function gridItemsHover(e) {
    e.target.style.backgroundColor = 'black';
}
