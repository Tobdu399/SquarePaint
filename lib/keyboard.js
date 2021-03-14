class Keyboard {
    constructor() {
        this.MouseButtonDown  = false;
        this.MouseButtonLeft  = false;
        this.MouseButtonRight = false;
    }

    update() {
        if (mouseIsPressed) {
            if (mouseButton === LEFT && this.MouseButtonLeft == false) {
                this.MouseButtonLeft = true;
            }
            if (mouseButton === RIGHT && this.MouseButtonRight == false) {
                this.MouseButtonRight = true;
            }
        } else {
            this.MouseButtonLeft = false;
            this.MouseButtonRight = false;
        }

        if (this.MouseButtonLeft || this.MouseButtonRight && this.MouseButtonDown == false) {
            this.MouseButtonDown = true;
        } else {
            this.MouseButtonDown = false;
        }
    }
}
