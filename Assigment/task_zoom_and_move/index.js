document.addEventListener("DOMContentLoaded", () => {
    const object = document.getElementById("object");
    const zoomInput = document.getElementById("zoom");
    const moveXInput = document.getElementById("move_x");
    const moveYInput = document.getElementById("move_y");


    const sizeLabel = zoomInput.previousElementSibling.children[1];
    const moveXLabel = moveXInput.previousElementSibling.children[1];
    const moveYLabel = moveYInput.previousElementSibling.children[1];

    let scale = 1;
    let translateX = 0;
    let translateY = 0;

    function update() {
        object.style.transform = `scale(${scale}) translate(${translateX * 100}%, ${translateY * 100}%)`;
    }


    zoomInput.addEventListener("input", (e) => {
        scale = e.target.value;
        sizeLabel.textContent = `${Math.round(scale * 100)}%`;
        update();
    });

    moveXInput.addEventListener("input", (e) => {
        translateX = e.target.value;
        moveXLabel.textContent = `${Math.round(translateX * 100)}%`;
        update();
    });

    moveYInput.addEventListener("input", (e) => {
        translateY = e.target.value;
        moveYLabel.textContent = `${Math.round(translateY * 100)}%`;
        update();
    });
});