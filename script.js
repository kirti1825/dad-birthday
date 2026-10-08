const enterButton = document.getElementById("enterButton");

enterButton.addEventListener("click", () => {
    enterButton.textContent = "OPENING...";

    setTimeout(() => {
        window.location.href = "page2.html";
    }, 1800);
});
