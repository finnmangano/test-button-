
    let colors = ["red", "orange", "yellow", "green", "lightblue", "darkblue", "pink", "purple", "white"];
    let colorIndex = 0;

    function changeColor() {
        const col = document.getElementById("body");
        if (colorIndex >= colors.length) {
            colorIndex = 0;
        }
        col.style.backgroundColor = colors[colorIndex];
        colorIndex++;
    }
