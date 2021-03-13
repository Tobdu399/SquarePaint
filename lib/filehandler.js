function capture() {
    canvas.id("drawboard");

    html2canvas(document.getElementById("drawboard"))
        .then(canvas => {
            // This code will run once the promise has completed
            let img = canvas.toDataURL("image/png");
            let filename = getFileName();

            if (filename != undefined) {
                download(img, filename);
            }
    });
}

function getFileName() {
    let name = prompt("Please give a name for your sketch (default: saved-sketch.png)")
    if (name != null) {
        if (name != "") {
            if (name.substr(name.length-4) != ".png") {
                name += ".png";
            }
            return name;
        } else {
            name = "saved-sketch.png";
            return name;
        }
    }
}

function download(uri, filename) {
    var link = document.createElement('a');
    if (typeof link.download === 'string') {
        link.href = uri;
        link.download = filename;
        // Firefox requires the link to be in the body
        document.body.appendChild(link);

        // simulate click
        link.click();

        // remove the link when done
        document.body.removeChild(link);
    } else {
        window.open(uri);
    }
}
