const enterButton = document.getElementById("enterButton");

enterButton.addEventListener("click", () => {

    enterButton.style.transform = "scale(0.96)";

    setTimeout(() => {
        enterButton.style.transform = "";
    }, 150);

});
