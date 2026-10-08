const enterButton = document.getElementById("enterButton");

enterButton.addEventListener("click", () => {

    enterButton.classList.add("pressed");

    setTimeout(() => {

        enterButton.classList.remove("pressed");

    }, 180);

});
