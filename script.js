
    const colors = ["red", "orange", "yellow", "green", "lightblue", "darkblue", "pink", "purple", "white"];
    let colorIndex = 0;

    const bodyElement = document.getElementById("body");

    function changeColor() {
        if (colorIndex >= colors.length) {
            colorIndex = 0;
        }
        bodyElement.style.backgroundColor = colors[colorIndex];
        colorIndex++;
    }
