const containerGrid = document.querySelector(".grid");
const selectElement = document.querySelector("select");
const resetButton = document.querySelector(".reset");
const eraseButton = document.querySelector(".erase");

selectElement.addEventListener("change", updateGridSize);
resetButton.addEventListener("click", resetGrid);
eraseButton.addEventListener("click", eraseGridToggle);


// creating variable outside function for access in resetGrid function
gridItems = "";

function updateGridSize(e) {
    
    let newSize = e?.target.value ?? 16;

    let gridSize = newSize;
    let numberOfBoxes = (gridSize ** 2);
    let gridPixels = gridSize * 10;
    let gridArea = (gridPixels ** 2);
    let boxFillPercentage = ((1 / gridSize) * 100);

    containerGrid.replaceChildren();

    for (i = 1; i <= numberOfBoxes; i++) {
    div = document.createElement('div');
    div.style.flexBasis = `${boxFillPercentage}%`;
    div.classList.add('gridItem');
    containerGrid.appendChild(div);
    }

    gridItems = document.querySelectorAll(".gridItem");

    gridItems.forEach((gridItem) => {
        gridItem.addEventListener('mouseover', gridItemsHover);
    });


}

function resetGrid () {
    gridItems.forEach((gridItem) => {
        gridItem.style.backgroundColor ="lightgray";
    });
}

function eraseGridToggle () {
    switch (eraseButton.innerText) {
        case "Erase":
            eraseButton.innerText = "Draw";
            gridItems.forEach((gridItem) => {
                gridItem.removeEventListener('mouseover', gridItemsHover);
                gridItem.addEventListener('mouseover', gridItemsHoverErase);
            });
            break;
        case "Draw":
            eraseButton.innerText = "Erase";
            gridItems.forEach((gridItem) => {
                gridItem.removeEventListener('mouseover', gridItemsHoverErase);
                gridItem.addEventListener('mouseover', gridItemsHover);
            });
            break;
    }
}

updateGridSize();



// Populate grid size dropdown 1-100
for (i=1; i<=100; i++) {
    dropdownSize = document.createElement("option");
    dropdownSize.value = i;
    dropdownSize.textContent = i;
    selectElement.appendChild(dropdownSize);
}

selectElement.value = 16;

function gridItemsHover(e) {
    e.target.style.backgroundColor = 'black';
}

function gridItemsHoverErase(e) {
    e.target.style.backgroundColor = 'lightgray';
}