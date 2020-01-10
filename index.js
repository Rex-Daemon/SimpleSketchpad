window.onload = () => {

    let gridNumber = 25;
    let sketchpadBgColor = '#e2f3f5'
    let sketchpadFillColor = '#0e153a'
    const sketchpadContainer = document.getElementById("sketchpad-container")

    // Construct the sketchpad
    for (let row = 0; row < gridNumber; row++) {
        for (let column = 0; column < gridNumber; column++) {
            let div = document.createElement("div");
            div.classList.add("pix");
            div.style.width = "25px";
            div.style.height = "25px";
            div.style.background = sketchpadBgColor;
            div.style.display = "inline-block"
            sketchpadContainer.appendChild(div);
        }
        // Jump to next line
        let jump = document.createElement("br");
        sketchpadContainer.appendChild(jump);
    }

    // Color div on mouse hover
    let pix = document.querySelectorAll(".pix");
    for (let i = 0; i < pix.length; i++) {
        pix[i].addEventListener("mouseover", changeBackground);
    }

    function changeBackground() {
        this.style.backgroundColor = sketchpadFillColor;
    }
}