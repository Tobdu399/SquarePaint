let brushSize    = 4;
let currentColor = "rgb(0,0,0)";
let cancelledOperations = [];

class Stroke {
    constructor() {
        this.points  = []
        this.isAlive = true;
    }

    update() {
        if (this.isAlive) {
            if (pointerFocused() && menuIsOpen() == false) {
                this.points.push([pointerX, pointerY, brushSize, currentColor]);
            }

            // Connect the points of the current stroke
            for (let i=0; i<this.points.length-1; i++) {
                drawLine(this.points[i][0], this.points[i][1], this.points[i+1][0], this.points[i+1][1], this.points[i][2], this.points[i][3]);
            }
        }
    }

    end() {
        if (this.isAlive == true) {
            this.isAlive = false;
            strokes.push(this.points);
        }
    }
}

let strokes = [];
let currentStroke;

function drawLine(x1, y1, x2, y2, weight, color) {
    stroke(color);
    strokeWeight(weight);
    line(x1, y1, x2, y2);
}

function drawStrokes() {
    for (let i=0; i<strokes.length; i++) {
        for (let j=0; j<strokes[i].length-1; j++) {
            drawLine(strokes[i][j][0], strokes[i][j][1], strokes[i][j+1][0], strokes[i][j+1][1], strokes[i][j][2], strokes[i][j][3]);
        }
    }
}

function updateBrush() {
    let slider = document.getElementById("brush-slider");
    let value  = parseInt(slider.value)

    let label       = document.getElementById("brush-slider-label");
    label.innerHTML = "Brush Size   " + value;

    brushSize = value;
}

function setColor(newColor) {
    currentColor = newColor;
}

function clearScreen() {
    strokes             = [];
    cancelledOperations = [];
    currentStroke.end();    
}

function undo() {
    // Don't undo something that hasn't been done
    if (strokes.length > 0) {
        cancelledOperations.push(strokes[strokes.length - 1])
        strokes.pop();
    }
}

function redo() {
    // Don't redo something that hasn't been undone
    if (cancelledOperations.length > 0) {
        strokes.push(cancelledOperations[cancelledOperations.length -1]);
        cancelledOperations.pop();
    }
}
