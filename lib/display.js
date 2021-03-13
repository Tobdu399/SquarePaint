let showGrid       = true;
let grid, gridSize = 5
let toolbarOpen    = false;


function updateDisplay() {
    background(240);

    // Center the canvas
    setTimeout(function() {
        canvas.position(windowWidth/2-width/2, windowHeight/2-height/2);
    }, 100);

    drawGrid(grid);
}

function updateGrid() {
    let slider = document.getElementById("grid-slider");
    let value  = parseInt(slider.value)

    let label       = document.getElementById("grid-slider-label");
    label.innerHTML = "Grid Size   " + value;

    grid = width / value;
}

function menuIsOpen() {
    let menuPosition = getComputedStyle(document.documentElement).getPropertyValue('--toolbar-width');

    // Toolbar
    let toolbar = document.getElementsByClassName("container")[0];
    let toolbarRect = toolbar.getBoundingClientRect();

    // Color palette
    let colorpalette = document.getElementById("colorpalette-itemholder");
    let colorpaletteRect = colorpalette.getBoundingClientRect();

    menuPosition = parseInt(menuPosition.replace("px", ""));

    if (toolbarRect.x > -menuPosition+50 || colorpaletteRect.x > -menuPosition+50) {
        return true;
    } else {
        return false;
    }
}

function drawGrid(gridSize) {
    updateGrid();

    if (showGrid) {
        stroke(0);
        strokeWeight(0.3);

        // Vertical lines
        for (let y=gridSize; y<height; y+=gridSize) {        
            line(0, y, width, y);
        }

        // Horizontal lines
        for (let x=gridSize; x<width; x+=gridSize) {
            line(x, 0, x, height);
        }
    }
}

function toggleGrid() {
    showGrid = !showGrid;
}
