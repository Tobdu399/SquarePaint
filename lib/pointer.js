let pointerSize    = 10;
let pointerOpacity = 200;
let pointerX;
let pointerY;

function pointerFocused() {
    if (pointerX > 0 && pointerX < width && pointerY > 0 && pointerY < height || currentStroke.isAlive) {
        return true;
    } else {
        return false;
    }
}

function updatePointer() {
    pointerX = Math.round(mouseX / grid)*grid;
    pointerY = Math.round(mouseY / grid)*grid;

    // Hide the pointer if any of the menus is open
    // This will also hide the pointer when saving the sketch
    if (menuIsOpen() == false) {
        fill(90, 90, 90, pointerOpacity);
        noStroke();
        ellipse(pointerX, pointerY, brushSize*1.5);
    }

    // Show the current stroke
    if (currentStroke) {
        currentStroke.update();
    } else {
        currentStroke = new Stroke();
    }

    // Check if the mouse is inside the canvas
    if (pointerFocused()) {

        // If the left mouse button is held down, draw
        if (keyboard.MouseButtonLeft && currentStroke.isAlive == false) {
            currentStroke = new Stroke();
        }

        // If the left mouse button is not pressed, stop the current stroke
        if (keyboard.MouseButtonLeft == false) {
            currentStroke.end();
        }
    } else {
        currentStroke.end();
    }
}
